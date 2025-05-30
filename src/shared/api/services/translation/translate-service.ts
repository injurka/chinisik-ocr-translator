import type { TranslationResult } from '../../../types'
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, GeminiConfig } from './config'
import type { TranslateRequestParams } from './types'
import browser from 'webextension-polyfill'
import { TranslationProvider } from '../../../types'
import { getTranslationProvider } from './provider-factory'
import { CHINISIK_DEFAULT_API_URL } from './providers/chinisik/config'

async function getProviderSettings(providerId: TranslationProvider): Promise<BaseProviderConfig> {
  const storage = await browser.storage.sync.get('providerSettings')
  const allSettings = (storage.providerSettings || {}) as AllProviderConfigs

  switch (providerId) {
    case TranslationProvider.Default:
      return {
        apiKey: allSettings.chinisik?.apiKey || '',
        apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
      } as ChinisikConfig
    case TranslationProvider.Gemini:
      return {
        apiKey: allSettings.gemini?.apiKey || '',
        model: allSettings.gemini?.model || 'gemini-pro-vision',
      } as GeminiConfig
    // case TranslationProvider.OLLAMA:
    //   return {
    //     apiUrl: allSettings.ollama?.apiUrl || 'http://localhost:11434/api/generate', // Пример
    //     model: allSettings.ollama?.model || 'llava',
    //     keepAlive: allSettings.ollama?.keepAlive || '5m',
    //   } as OllamaConfig
    default:
      throw new Error(`Configuration not defined for provider: ${providerId}`)
  }
}

async function performTranslate(imageDataUrl: string): Promise<TranslationResult> {
  // 1. Получить выбранный провайдер из storage
  const { selectedProvider } = await browser.storage.sync.get({
    selectedProvider: TranslationProvider.Default,
  })
  const currentProviderId = selectedProvider as TranslationProvider

  // 2. Получить настройки для этого провайдера
  const providerConfig = await getProviderSettings(currentProviderId)

  // 3. Получить экземпляр провайдера через фабрику
  const translator = getTranslationProvider(currentProviderId)

  // 4. Сформировать параметры запроса
  const requestParams: TranslateRequestParams = {
    imageDataUrl,
    // targetLanguage: 'ru',
  }

  // 5. Выполнить перевод
  try {
    const result = await translator.translate(requestParams, providerConfig)
    // Можно добавить логирование или обновление статистики здесь
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

export { getProviderSettings, performTranslate }
