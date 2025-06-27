import type { AllProviderConfigs } from '~/shared/api/services/all/types/config'
import type { Language } from '~/shared/types'
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '~/shared/api/services/all/providers/chinisik/config'
import { TranslationProvider } from '~/shared/types'

export function useProviderSettings() {
  const { locale } = useI18n()
  const isLoading = ref(true)
  const selectedProvider = ref<TranslationProvider>(TranslationProvider.Default)
  const providerSettingsForm = reactive<AllProviderConfigs>({
    [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
    [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
    [TranslationProvider.Custom]: { apiKey: '', apiUrl: '', model: '', ttsModel: '' },
  })
  const selectedLanguage = ref<Language>('ru')

  // --- Логика сохранения ---
  let debounceTimer: number
  async function saveSettings() {
    try {
      await browser.storage.sync.set({
        selectedProvider: selectedProvider.value,
        providerSettings: JSON.parse(JSON.stringify(providerSettingsForm)),
        targetLanguage: selectedLanguage.value,
      })
    }
    catch (error) {
      console.error('Error saving settings:', error)
    }
  }
  function saveSettingsDebounced() {
    clearTimeout(debounceTimer)
    debounceTimer = window.setTimeout(saveSettings, 500)
  }

  // --- Логика загрузки ---
  async function loadSettings() {
    isLoading.value = true
    try {
      const result = await browser.storage.sync.get([
        'selectedProvider',
        'providerSettings',
        'targetLanguage',
      ]) as any

      const defaults = {
        provider: TranslationProvider.Default,
        settings: {
          [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
          [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
          [TranslationProvider.Custom]: { apiKey: '', apiUrl: '', model: '', ttsModel: '' },
        },
        lang: 'ru',
      }

      selectedProvider.value = result.selectedProvider || defaults.provider
      selectedLanguage.value = result.targetLanguage || defaults.lang

      const loadedSettings = result.providerSettings || {}
      for (const pId in defaults.settings) {
        providerSettingsForm[pId as TranslationProvider] = {
          ...defaults.settings[pId as TranslationProvider],
          ...(loadedSettings[pId as TranslationProvider] || {}),
        }
      }

      locale.value = selectedLanguage.value
    }
    catch (error) {
      console.error('Error loading settings:', error)
    }
    finally {
      isLoading.value = false
    }
  }

  // --- Watchers ---
  watch([selectedProvider], saveSettings)
  watch(providerSettingsForm, saveSettingsDebounced, { deep: true })
  watch(selectedLanguage, (newLang) => {
    locale.value = newLang
    saveSettings()
  })

  // --- Lifecycle & Listeners ---
  onMounted(loadSettings)

  return {
    isLoading,
    selectedProvider,
    providerSettingsForm,
    selectedLanguage,
  }
}
