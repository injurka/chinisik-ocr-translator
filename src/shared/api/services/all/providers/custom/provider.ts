import type { BaseProviderConfig, CustomConfig } from '../../types/config'
import type { ITranslationProvider, LlmPromptParams, TextToSpeechRequestParams, TranslateRequestParams } from '../../types/provider'
import type { TranslationResult } from '~/shared/types'
import OpenAI from 'openai'
import { requestControllers } from '~/shared/api/request-controllers'
import { LocalizedError } from '~/shared/utils/error'
import { getOcrAndTranslatePrompt } from '~/shared/utils/prompt'

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
      throw new LocalizedError('errors.api.customProviderConfig')

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
        throw new LocalizedError('errors.api.customProviderError', { key, message: error.message })
      }
      throw new LocalizedError('errors.api.generic', { context: `Custom Provider during ${key}` })
    }
  }

  public translate(params: TranslateRequestParams, baseConfig: BaseProviderConfig): Promise<TranslationResult> {
    return this.requestWrapper(async (openai, model) => {
      const { imageDataUrl, targetLanguage } = params

      // 1. Генерируем промпты с помощью новой функции
      const { system, user } = getOcrAndTranslatePrompt({
        user: { imageDataUrl },
        targetLanguage,
      })

      // 2. Отправляем запрос в API
      const response = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        max_tokens: 1024,
        response_format: { type: 'json_object' },
      })

      const content = response.choices[0].message.content
      if (!content)
        throw new LocalizedError('errors.api.noContent')

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
        throw new LocalizedError('errors.api.noContent')

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
