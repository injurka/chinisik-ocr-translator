// --- Импорты остаются те же ---
import type { BaseProviderConfig, ChinisikConfig } from '../../types/config'
import type { InlineTextTranslateResult, ITranslationProvider, LexicalAnalysisRequestParams, LexicalAnalysisResult, QuestionForAnswerRequestParams, QuestionForAnswerResult, TextToSpeechRequestParams, TextToSpeechResult, TranslateRequestParams } from '../../types/provider'
import type { TranslationResult } from '~/shared/types'
import { $fetch, FetchError } from 'ofetch'
import { dataURLtoBlob } from '../../../../../utils/helpers'
import { CHINISIK_DEFAULT_API_URL } from './config'

export class ChinisikProvider implements ITranslationProvider {
  /**
   * Централизованный обработчик ошибок API.
   * @param error - Перехваченная ошибка.
   * @param context - Описание операции, в которой произошла ошибка (e.g., 'translation', 'lexical analysis').
   * @throws {Error} Всегда выбрасывает новую, отформатированную ошибку.
   */
  private handleApiError(error: unknown, context: string): never {
    if (error instanceof FetchError) {
      const status = error.response?.status || 'N/A'
      const statusText = error.response?.statusText || 'Unknown Error'
      let errorMessage = `Chinisik API ${context} error: ${status} ${statusText}`

      const responseData = error.data ?? error.response?._data
      if (responseData) {
        let details = ''
        if (typeof responseData === 'object' && responseData !== null) {
          const rd = responseData as Record<string, any>
          details = rd.message || rd.detail || rd.error
        }
        else if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
          details = responseData
        }

        if (details) {
          errorMessage += ` - ${details}`
        }
        console.error(`Chinisik API ${context} Error Full Response Data:`, responseData)
      }
      throw new Error(errorMessage)
    }

    if (error instanceof Error) {
      error.message = `Chinisik API ${context} failed: ${error.message}`
      throw error
    }

    console.error(`Unknown API error in ChinisikProvider (${context}):`, error)
    throw new Error(`Unknown error during Chinisik API ${context} request`)
  }

  /**
   * Обертка для выполнения запросов к API с автоматической обработкой ошибок.
   * @param requestFn - Функция, выполняющая сам запрос и возвращающая Promise.
   * @param context - Контекст для логирования и сообщений об ошибках.
   */
  private async requestWrapper<T>(
    requestFn: () => Promise<T>,
    context: string,
  ): Promise<T> {
    try {
      return await requestFn()
    }
    catch (error) {
      this.handleApiError(error, context)
    }
  }

  /**
   * Получение конфигурации для провайдера.
   */
  private getConfig(baseConfig: BaseProviderConfig): ChinisikConfig {
    return {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }
  }

  /**
   * Внутренний метод для вызова raw LLM эндпоинта.
   */
  private rawLlm<T>(config: ChinisikConfig, prompt: { user: string, system: string }): Promise<T> {
    const { apiKey, apiUrl } = config

    return $fetch<T>(`${apiUrl}/llvm/raw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: { ...prompt },
    })
  }

  public translate(
    params: TranslateRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TranslationResult> {
    const context = 'image translation'
    return this.requestWrapper(async () => {
      const config = this.getConfig(baseConfig)
      const { imageDataUrl } = params

      const blob = dataURLtoBlob(imageDataUrl)
      const formData = new FormData()
      formData.append('image', blob, 'screenshot.png')

      const data = await $fetch<TranslationResult>(`${config.apiUrl}/llvm/image-to-text-translate`, {
        method: 'POST',
        headers: { Authorization: config.apiKey },
        body: formData,
      })

      if (!data) {
        throw new Error('Could not extract translation from API response.')
      }
      return data
    }, context)
  }

  public analyzeLexically(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<LexicalAnalysisResult> {
    const context = 'lexical analysis'
    return this.requestWrapper(async () => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<LexicalAnalysisResult>(config, params)

      if (!data) {
        throw new Error('Could not extract lexical analysis from API response.')
      }
      return data
    }, context)
  }

  public textToSpeech(
    params: TextToSpeechRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TextToSpeechResult> {
    const context = 'text-to-speech'

    return this.requestWrapper(async () => {
      const config = this.getConfig(baseConfig)
      const { text, model = 'gpt-4o-mini-tts', voice = 'alloy', response_format = 'mp3', speed = 1 } = params

      const audioBlob = await $fetch<Blob>(`${config.apiUrl}/llvm/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`,
          'Accept': 'audio/mp3',
        },
        body: {
          text: text.replace(/\s+/g, ''),
          model,
          voice,
          response_format,
          speed,
        },
      })

      if (!(audioBlob instanceof Blob)) {
        throw new TypeError('API did not return a valid audio Blob.')
      }
      return audioBlob
    }, context)
  }

  public inlineTextTranslate(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<InlineTextTranslateResult> {
    const context = 'inline text translate'

    return this.requestWrapper(async () => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<LexicalAnalysisResult>(config, params)

      if (!data) {
        throw new Error('Could not extract lexical analysis from API response.')
      }
      return data
    }, context)
  }

  public questionForAnswer(
    params: QuestionForAnswerRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<QuestionForAnswerResult> {
    const context = 'question for answer'

    return this.requestWrapper(async () => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<QuestionForAnswerResult>(config, params)

      if (!data) {
        throw new Error('Could not extract answer from API response.')
      }
      return data
    }, context)
  }
}
