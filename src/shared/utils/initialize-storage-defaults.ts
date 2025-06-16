import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '../api/services/all/providers/chinisik/config'
import { STORAGE_KEY_CONTROLS } from '../constant'
import { TranslationProvider } from '../types'

export async function initializeStorageDefaults() {
  const defaults = {
    selectedProvider: TranslationProvider.Default,
    providerSettings: {
      [TranslationProvider.Default]: {
        apiKey: 'Not needed',
        apiUrl: CHINISIK_DEFAULT_API_URL,
      },
      [TranslationProvider.Gemini]: {
        apiKey: '',
        model: 'gemini-pro-vision',
      },
      [TranslationProvider.Custom]: {
        apiKey: '',
        apiUrl: '',
        model: '',
        ttsModel: '',
      },
    },
    appTheme: 'light',
    targetLanguage: 'ru',
    [STORAGE_KEY_CONTROLS]: {
      displayStyle: 'standard',
      displayPosition: 'center',
    },
  }

  const stored = await browser.storage.sync.get(Object.keys(defaults))
  const toSet: Partial<typeof defaults> = {}

  if (stored.selectedProvider === undefined)
    toSet.selectedProvider = defaults.selectedProvider

  if (stored.appTheme === undefined)
    toSet.appTheme = defaults.appTheme

  if (stored.targetLanguage === undefined)
    toSet.targetLanguage = defaults.targetLanguage

  if (stored[STORAGE_KEY_CONTROLS] === undefined)
    toSet[STORAGE_KEY_CONTROLS] = defaults[STORAGE_KEY_CONTROLS]

  const currentProviderSettings = (stored.providerSettings || {}) as typeof defaults.providerSettings
  let updateProviderSettings = false

  for (const providerKey in defaults.providerSettings) {
    const key = providerKey as TranslationProvider
    if (!currentProviderSettings[key]) {
      // @ts-expect-error dynamic key
      currentProviderSettings[key] = defaults.providerSettings[key]
      updateProviderSettings = true
    }
    else {
      for (const settingKey in defaults.providerSettings[key]) {
        // @ts-expect-error dynamic key
        if (currentProviderSettings[key][settingKey] === undefined) {
          // @ts-expect-error dynamic key
          currentProviderSettings[key][settingKey] = defaults.providerSettings[key][settingKey]
          updateProviderSettings = true
        }
      }
    }
  }

  if (updateProviderSettings) {
    toSet.providerSettings = currentProviderSettings
  }

  if (Object.keys(toSet).length > 0) {
    await browser.storage.sync.set(toSet)
  }
}
