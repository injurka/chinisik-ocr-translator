import type { TranslationResult } from '../../../types'
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, GeminiConfig } from './config'
import type { LexicalAnalysisRequestParams, LexicalAnalysisResult, TranslateRequestParams } from './types'
import browser from 'webextension-polyfill'
import { lexicalAnalysisPrompt } from '~/shared/constant'
import { TranslationProvider } from '../../../types'
import { getTranslationProvider } from './provider-factory'
import { CHINISIK_DEFAULT_API_URL } from './providers/chinisik/config'

export async function getProviderSettings(providerId: TranslationProvider): Promise<BaseProviderConfig> {
  const storage = await browser.storage.sync.get('providerSettings')
  const allSettings = (storage.providerSettings || {}) as AllProviderConfigs

  switch (providerId) {
    case TranslationProvider.Default: // Chinisik
      return {
        apiKey: allSettings.chinisik?.apiKey || '', // Убедитесь, что ключ по умолчанию или обработка его отсутствия корректна
        apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
      } as ChinisikConfig
    case TranslationProvider.Gemini:
      return {
        apiKey: allSettings.gemini?.apiKey || '',
        model: allSettings.gemini?.model || 'gemini-pro-vision',
      } as GeminiConfig
    // ... другие провайдеры
    default:
      console.warn(`Configuration not defined for provider: ${providerId}, falling back to Chinisik defaults for settings.`)
      return { // Фолбэк на случай неизвестного провайдера, хотя фабрика должна вернуть ChinisikProvider
        apiKey: allSettings.chinisik?.apiKey || '',
        apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
      } as ChinisikConfig
  }
}

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
    console.error(`Error during lexical analysis with ${currentProviderId}:`, error)
    if (error instanceof Error) {
      throw new TypeError(`Lexical analysis failed with ${currentProviderId}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred during lexical analysis with ${currentProviderId}.`)
  }
}
