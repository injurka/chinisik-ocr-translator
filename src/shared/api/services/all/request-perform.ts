import type { TranslationResult } from '../../../types'
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, CustomConfig, GeminiConfig } from './types/config'
import type { InlineTextTranslateResult, LexicalAnalysisRequestParams, LexicalAnalysisResult, QuestionForAnswerRequestParams, QuestionForAnswerResult, TextToSpeechRequestParams, TranslateRequestParams } from './types/provider'
import browser from 'webextension-polyfill'
import { lexicalAnalysisPrompt } from '~/shared/constant'
import { TranslationProvider } from '../../../types'
import { CHINISIK_DEFAULT_API_URL } from './providers/chinisik/config'
import { getTranslationProvider } from './utils/provider-factory'

export async function getProviderSettings(providerId: TranslationProvider): Promise<BaseProviderConfig> {
  const storage = await browser.storage.sync.get('providerSettings')
  const allSettings = (storage.providerSettings || {}) as AllProviderConfigs

  switch (providerId) {
    case TranslationProvider.Default: // Chinisik
      return {
        apiKey: allSettings.chinisik?.apiKey || '',
        apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
      } as ChinisikConfig
    case TranslationProvider.Gemini:
      return {
        apiKey: allSettings.gemini?.apiKey || '',
        model: allSettings.gemini?.model || 'gemini-pro-vision',
      } as GeminiConfig
    case TranslationProvider.Custom:
      return {
        apiKey: allSettings.custom?.apiKey || '',
        apiUrl: allSettings.custom?.apiUrl || '',
        model: allSettings.custom?.model || '',
        ttsModel: allSettings.custom?.ttsModel || '',
      } as CustomConfig
    default:
      console.warn(`Configuration not defined for provider: ${providerId}, falling back to Chinisik defaults for settings.`)
      return {
        apiKey: allSettings.chinisik?.apiKey || '',
        apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
      } as ChinisikConfig
  }
}

//

export async function performTranslate(imageDataUrl: string): Promise<TranslationResult> {
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider
  const providerConfig = await getProviderSettings(currentProviderId)
  const translator = getTranslationProvider(currentProviderId)

  const requestParams: TranslateRequestParams = { imageDataUrl }

  try {
    const result = await translator.translate(requestParams, providerConfig)

    return result
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      throw error

    console.error(`Error during translation with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Translation failed with ${currentProviderId}: ${error.message}`)
    }

    throw new Error(`An unknown error occurred during translation with ${currentProviderId}.`)
  }
}

export async function performLexicalAnalysisService(sentence: string): Promise<LexicalAnalysisResult> {
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider
  const providerConfig = await getProviderSettings(currentProviderId)
  const providerInstance = getTranslationProvider(currentProviderId)

  if (!providerInstance.analyzeLexically) {
    throw new Error(`Lexical analysis is not supported by the current provider: ${currentProviderId}.`)
  }

  const requestParams: LexicalAnalysisRequestParams = {
    user: sentence,
    system: lexicalAnalysisPrompt,
  }

  try {
    const result = await providerInstance.analyzeLexically(requestParams, providerConfig)

    return result
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      throw error

    console.error(`Error during lexical analysis with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Lexical analysis failed with ${currentProviderId}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred during lexical analysis with ${currentProviderId}.`)
  }
}

export async function performTextToSpeechService(text: string): Promise<Blob> {
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider
  const providerConfig = await getProviderSettings(currentProviderId)
  const providerInstance = getTranslationProvider(currentProviderId)

  if (!providerInstance.textToSpeech) {
    throw new Error(`Text-to-speech is not supported by the current provider: ${currentProviderId}.`)
  }

  const requestParams: TextToSpeechRequestParams = { text }

  try {
    const result = await providerInstance.textToSpeech(requestParams, providerConfig)

    return result
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      throw error

    console.error(`Error during text-to-speech with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Text-to-speech failed with ${currentProviderId}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred during text-to-speech with ${currentProviderId}.`)
  }
}

export async function performInlineTextTranslate(userPrompt: string, systemPrompt: string): Promise<InlineTextTranslateResult> {
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider
  const providerConfig = await getProviderSettings(currentProviderId)
  const providerInstance = getTranslationProvider(currentProviderId)

  if (!providerInstance.inlineTextTranslate) {
    throw new Error(`Inline text translation is not supported by the current provider: ${currentProviderId}.`)
  }

  try {
    const result = await providerInstance.inlineTextTranslate(
      {
        user: userPrompt,
        system: systemPrompt,
      },
      providerConfig,
    )

    return result
  }
  catch (error) {
    console.error(`Error during inline text translation with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Inline text translation failed with ${currentProviderId}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred during inline text translation with ${currentProviderId}.`)
  }
}

export async function performQuestionForAnswer(userPrompt: string, systemPrompt: string): Promise<QuestionForAnswerResult> {
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider
  const providerConfig = await getProviderSettings(currentProviderId)
  const providerInstance = getTranslationProvider(currentProviderId)

  if (!providerInstance.questionForAnswer) {
    throw new Error(`Question/Answer feature is not supported by the current provider: ${currentProviderId}.`)
  }

  const requestParams: QuestionForAnswerRequestParams = {
    user: userPrompt,
    system: systemPrompt,
  }

  try {
    const result = await providerInstance.questionForAnswer(requestParams, providerConfig)

    return result
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      throw error

    console.error(`Error during question/answer with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Question/Answer failed with ${currentProviderId}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred during question/answer with ${currentProviderId}.`)
  }
}
