import type { BaseProviderConfig, CustomConfig } from '../../types/config'
import type { ITranslationProvider, LlmPromptParams, TextToSpeechRequestParams, TranslateRequestParams } from '../../types/provider'
import type { TranslationResult } from '~/shared/types'
import OpenAI from 'openai'
import { requestControllers } from '~/shared/api/request-controllers'

/**
 * CustomProvider - это универсальный провайдер для любых
 * OpenAI-совместимых API. Он получает baseURL, apiKey и model
 * из настроек и использует их для выполнения запросов.
 */
export class CustomProvider implements ITranslationProvider {
  /**
   * Создает и конфигурирует экземпляр клиента OpenAI.
   */
  private createOpenAIClient(config: CustomConfig, signal: AbortSignal): OpenAI {
    if (!config.apiUrl || !config.model)
      throw new Error('Custom Provider requires API URL and a model name.')

    return new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.apiUrl,
      // @ts-expect-error - AbortSignal types might not align perfectly, but it works
      signal,
    })
  }

  /**
   * Обертка для выполнения запросов с AbortController.
   */
  private async requestWrapper<T>(
    requestFn: (openai: OpenAI, model: string) => Promise<T>,
    baseConfig: BaseProviderConfig,
    key: keyof ITranslationProvider,
  ): Promise<T> {
    const config = baseConfig as CustomConfig
    // Сбрасываем предыдущий запрос, если он был
    requestControllers[key].abort()
    const newController = new AbortController()
    requestControllers[key] = newController

    try {
      const openai = this.createOpenAIClient(config, newController.signal)
      return await requestFn(openai, config.model)
    }
    catch (error) {
      if (newController.signal.aborted) {
        const abortError = new Error('Request was aborted.', { cause: 'AbortController' })
        abortError.name = 'AbortError'
        throw abortError
      }
      if (error instanceof Error) {
        throw new TypeError(`Custom Provider Error (${key}): ${error.message}`)
      }
      throw new Error(`Unknown error in Custom Provider during ${key} request`)
    }
  }

  public translate(params: TranslateRequestParams, baseConfig: BaseProviderConfig): Promise<TranslationResult> {
    return this.requestWrapper(async (openai, model) => {
      const { imageDataUrl } = params
      const response = await openai.chat.completions.create({
        model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Recognize and translate the text from this image into Russian. Provide the result as a JSON object with three fields: "source" (the recognized Chinese text), "translate" (the Russian translation), and "transcription" (the pinyin transcription of the source text). Return only JSON.' },
              { type: 'image_url', image_url: { url: imageDataUrl } },
            ],
          },
        ],
        max_tokens: 1024,
        response_format: { type: 'json_object' },
      })

      const content = response.choices[0].message.content
      if (!content)
        throw new Error('API returned no content.')

      return JSON.parse(content) as TranslationResult
    }, baseConfig, 'translate')
  }

  private performLlmRequest(params: LlmPromptParams, baseConfig: BaseProviderConfig, key: keyof ITranslationProvider): Promise<string> {
    return this.requestWrapper(async (openai, model) => {
      const response = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: params.system },
          { role: 'user', content: params.user },
        ],
        temperature: 0.3,
      })
      const content = response.choices[0].message.content
      if (!content)
        throw new Error('API returned no content.')
      return content
    }, baseConfig, key)
  }

  public analyzeLexically(params: LlmPromptParams, baseConfig: BaseProviderConfig): Promise<string> {
    return this.performLlmRequest(params, baseConfig, 'analyzeLexically')
  }

  public inlineTextTranslate(params: LlmPromptParams, baseConfig: BaseProviderConfig): Promise<string> {
    return this.performLlmRequest(params, baseConfig, 'inlineTextTranslate')
  }

  public questionForAnswer(params: LlmPromptParams, baseConfig: BaseProviderConfig): Promise<string> {
    return this.performLlmRequest(params, baseConfig, 'questionForAnswer')
  }

  public textToSpeech(params: TextToSpeechRequestParams, baseConfig: BaseProviderConfig): Promise<Blob> {
    return this.requestWrapper(async (openai) => {
      const config = baseConfig as CustomConfig

      const modelForTts = params.model // 1. Из параметров вызова
        || config.ttsModel // 2. Из настроек пользователя
        || 'tts-1' // 3. Фоллбэк

      const response = await openai.audio.speech.create({
        model: modelForTts,
        input: params.text,
        voice: params.voice || 'alloy',
        response_format: params.response_format || 'mp3',
        speed: params.speed || 1.0,
      })
      return response.blob()
    }, baseConfig, 'textToSpeech')
  }
}
