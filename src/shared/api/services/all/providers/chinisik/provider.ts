import type { BaseProviderConfig, ChinisikConfig } from '../../types/config'
import type { InlineTextTranslateResult, ITranslationProvider, LexicalAnalysisRequestParams, LexicalAnalysisResult, QuestionForAnswerRequestParams, QuestionForAnswerResult, TextToSpeechRequestParams, TextToSpeechResult, TranslateRequestParams } from '../../types/provider'
import type { TranslationResult } from '~/shared/types'
import { $fetch, FetchError } from 'ofetch'
import { requestControllers } from '~/shared/api/request-controllers'
import { LocalizedError } from '~/shared/utils/error'
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
          throw new LocalizedError('errors.api.chinisikContextDetails', { context, status, statusText, details })
        }
      }
      throw new LocalizedError('errors.api.chinisikContext', { context, status, statusText })
    }

    if (error instanceof Error) {
      throw new LocalizedError('errors.api.chinisikFailed', { context, message: error.message })
    }
    throw new LocalizedError('errors.api.generic', { context })
  }

  /**
   * Обертка для выполнения запросов к API с автоматической обработкой ошибок.
   * @param requestFn - Функция, выполняющая сам запрос и возвращающая Promise.
   * @param key - Контекст для логирования и сообщений об ошибках.
   */
  private async requestWrapper<T>(
    requestFn: (signal: AbortSignal) => Promise<T>,
    key: keyof ITranslationProvider,
  ): Promise<T> {
    requestControllers[key].abort()
    const newController = new AbortController()
    requestControllers[key] = newController

    try {
      return await requestFn(newController.signal)
    }
    catch (error) {
      if (newController.signal.aborted) {
        const abortError = new Error('Request was aborted.', { cause: 'AbortController' })
        abortError.name = 'AbortError'
        throw abortError
      }
      else {
        this.handleApiError(error, key)
      }
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
  private rawLlm<T>(config: ChinisikConfig, prompt: { user: string, system: string }, signal?: AbortSignal): Promise<T> {
    const { apiKey, apiUrl } = config

    return $fetch<T>(`${apiUrl}/llvm/raw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: { ...prompt },
      signal,
    })
  }

  public translate(
    params: TranslateRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TranslationResult> {
    return this.requestWrapper(async (signal) => {
      const config = this.getConfig(baseConfig)
      const { imageDataUrl, targetLanguage } = params

      const blob = dataURLtoBlob(imageDataUrl)
      const formData = new FormData()
      formData.append('image', blob, 'screenshot.png')
      formData.append('targetLanguage', targetLanguage)

      const data = await $fetch<TranslationResult>(`${config.apiUrl}/llvm/image-to-text-translate`, {
        method: 'POST',
        headers: { Authorization: config.apiKey },
        body: formData,
        signal,
      })

      if (!data) {
        throw new LocalizedError('errors.api.noContent')
      }
      return data
    }, 'translate')
  }

  public analyzeLexically(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<LexicalAnalysisResult> {
    return this.requestWrapper(async (signal) => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<LexicalAnalysisResult>(config, params, signal)

      if (!data) {
        throw new LocalizedError('errors.api.noContent')
      }
      return data
    }, 'analyzeLexically')
  }

  public textToSpeech(
    params: TextToSpeechRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TextToSpeechResult> {
    return this.requestWrapper(async (signal) => {
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
        signal,
      })

      if (!(audioBlob instanceof Blob)) {
        throw new LocalizedError('errors.api.invalidAudioBlob')
      }
      return audioBlob
    }, 'textToSpeech')
  }

  public inlineTextTranslate(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<InlineTextTranslateResult> {
    return this.requestWrapper(async (signal) => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<LexicalAnalysisResult>(config, params, signal)

      if (!data) {
        throw new LocalizedError('errors.api.noContent')
      }
      return data
    }, 'inlineTextTranslate')
  }

  public questionForAnswer(
    params: QuestionForAnswerRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<QuestionForAnswerResult> {
    return this.requestWrapper(async (signal) => {
      const config = this.getConfig(baseConfig)
      const data = await this.rawLlm<QuestionForAnswerResult>(config, params, signal)

      if (!data) {
        throw new LocalizedError('errors.api.noContent')
      }
      return data
    }, 'questionForAnswer')
  }
}
