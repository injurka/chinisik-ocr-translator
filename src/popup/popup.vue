<script setup lang="ts">
import type { AllProviderConfigs, ChinisikConfig, CustomConfig, GeminiConfig } from '../shared/api/services/all/types/config'
import type { Language, Theme } from '../shared/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '../shared/api/services/all/providers/chinisik/config'
import { TranslationProvider } from '../shared/types'

interface ProviderField {
  key: keyof ChinisikConfig | keyof GeminiConfig | keyof CustomConfig
  label: string
  type: 'text' | 'password' | 'url'
  placeholder?: string
  isOptional?: boolean
}

interface ProviderUIDefinition {
  id: TranslationProvider
  name: string
  fields: ProviderField[]
  helpText?: string
}

const { t, tm, locale } = useI18n()

const computedProviderDefinitions = computed<ProviderUIDefinition[]>(() => [
  {
    id: TranslationProvider.Default,
    name: t('popup.providers.chinisik.name'),
    fields: [
      { key: 'apiKey', label: t('popup.providers.chinisik.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.chinisik.apiKeyPlaceholder') },
      { key: 'apiUrl', label: t('popup.providers.chinisik.apiUrlLabel'), type: 'url', placeholder: CHINISIK_DEFAULT_API_URL, isOptional: true },
    ],
    helpText: t('popup.providers.chinisik.helpText'),
  },
  {
    id: TranslationProvider.Gemini,
    name: t('popup.providers.gemini.name'),
    fields: [
      { key: 'apiKey', label: t('popup.providers.gemini.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.gemini.apiKeyPlaceholder') },
      { key: 'model', label: t('popup.providers.gemini.modelLabel'), type: 'text', placeholder: 'e.g., gemini-pro-vision', isOptional: true },
    ],
    helpText: t('popup.providers.gemini.helpText'),
  },
  {
    id: TranslationProvider.Custom,
    name: t('popup.providers.custom.name'),
    fields: [
      { key: 'apiUrl', label: t('popup.providers.custom.apiUrlLabel'), type: 'url', placeholder: t('popup.providers.custom.apiUrlPlaceholder') },
      { key: 'model', label: t('popup.providers.custom.modelLabel'), type: 'text', placeholder: t('popup.providers.custom.modelPlaceholder') },
      { key: 'ttsModel', label: t('popup.providers.custom.ttsModelLabel'), type: 'text', placeholder: t('popup.providers.custom.ttsModelPlaceholder') },
      { key: 'apiKey', label: t('popup.providers.custom.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.custom.apiKeyPlaceholder') },
    ],
    helpText: t('popup.providers.custom.helpText'),
  },
])

const providersInDevelopment = [TranslationProvider.Gemini]

const selectedProvider = ref<TranslationProvider>(TranslationProvider.Default)
const providerSettingsForm = reactive<AllProviderConfigs>({
  [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
  [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
  [TranslationProvider.Custom]: { apiKey: '', apiUrl: '', model: '', ttsModel: '' },
})
const selectedLanguage = ref<Language>('ru')
const selectedTheme = ref<Theme>('light')
const showKey = ref(false)
const extensionVersion = ref(browser.runtime.getManifest().version)
const isLoading = ref(true)

const themes: Theme[] = ['light', 'dark', 'rainy']
const languages: { code: Language, name: string }[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
]

// --- Загрузка и сохранение настроек ---
let debounceTimer: number

function saveSettingsDebounced() {
  clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(saveSettings, 700)
}

async function saveSettings() {
  try {
    await browser.storage.sync.set({
      selectedProvider: selectedProvider.value,
      providerSettings: JSON.parse(JSON.stringify(providerSettingsForm)),
      appTheme: selectedTheme.value,
      targetLanguage: selectedLanguage.value,
    })
  }
  catch (error) {
    console.error('Error saving settings:', error)
  }
}

async function loadSettings() {
  isLoading.value = true
  try {
    const result = await browser.storage.sync.get([
      'selectedProvider',
      'providerSettings',
      'appTheme',
      'targetLanguage',
    ]) as {
      selectedProvider?: TranslationProvider
      providerSettings?: AllProviderConfigs
      appTheme?: Theme
      targetLanguage?: string
    }

    const defaultSelectedProvider = TranslationProvider.Default
    const defaultProviderSettings: AllProviderConfigs = {
      [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
      [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
      [TranslationProvider.Custom]: { apiKey: '', apiUrl: '', model: '', ttsModel: '' },
    }
    const defaultTheme: Theme = 'light'

    selectedProvider.value = result.selectedProvider || defaultSelectedProvider

    const loadedProviderSettings = result.providerSettings || {}
    for (const providerIdStr in defaultProviderSettings) {
      const pId = providerIdStr as TranslationProvider

      if (!providerSettingsForm[pId]) {
        providerSettingsForm[pId] = {} as any
      }
      providerSettingsForm[pId] = {
        ...defaultProviderSettings[pId],
        ...(loadedProviderSettings[pId] || {}),
      }
    }

    selectedLanguage.value = (result.targetLanguage || 'ru') as Language
    locale.value = selectedLanguage.value
    selectedTheme.value = themes.includes(result.appTheme!) ? result.appTheme! : defaultTheme
    applyTheme(selectedTheme.value)
  }
  catch (error) {
    console.error('Error loading settings:', error)
  }
  finally {
    isLoading.value = false
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

function toggleTheme() {
  const currentIndex = themes.indexOf(selectedTheme.value)
  const nextIndex = (currentIndex + 1) % themes.length
  selectedTheme.value = themes[nextIndex]
}

function highlightHotkey(text: string): string {
  return text.replace(/Ctrl\+Shift\+S/g, '<kbd>Ctrl+Shift+S</kbd>')
}

const currentProviderUI = computed(() => {
  return computedProviderDefinitions.value.find(p => p.id === selectedProvider.value)
})

const currentFormData = computed(() => {
  if (selectedProvider.value in providerSettingsForm) {
    return providerSettingsForm[selectedProvider.value]
  }
  return undefined
})

const currentThemeIcon = computed(() => {
  switch (selectedTheme.value) {
    case 'light': return 'ph:sun-bold'
    case 'dark': return 'ph:moon-bold'
    case 'rainy': return 'ph:cloud-rain-bold'
    default: return 'ph:sun-bold'
  }
})

const currentThemeName = computed(() => {
  switch (selectedTheme.value) {
    case 'light': return t('popup.tooltips.themeLight')
    case 'dark': return t('popup.tooltips.themeDark')
    case 'rainy': return t('popup.tooltips.themeRainy')
    default: return t('popup.tooltips.themeLight')
  }
})

watch(selectedLanguage, (newLang) => {
  locale.value = newLang
  saveSettings()
})

watch(selectedProvider, () => {
  saveSettings()
})

watch(selectedTheme, (newTheme) => {
  applyTheme(newTheme)
  saveSettings()
})

browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.appTheme) {
    const newTheme = changes.appTheme.newValue as Theme
    if (newTheme && newTheme !== selectedTheme.value) {
      selectedTheme.value = newTheme
    }
  }
})

onMounted(async () => {
  await loadSettings()
})
</script>

<template>
  <div class="popup">
    <div class="header">
      <div class="title-block">
        <h2>{{ t('popup.title') }}</h2>
        <button
          class="theme-toggle-btn"
          :title="t('popup.tooltips.changeTheme', { theme: currentThemeName })"
          @click="toggleTheme"
        >
          <Icon :icon="currentThemeIcon" />
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="content loading-state">
      <p>{{ t('popup.loadingText') }}</p>
    </div>

    <div v-else class="content">
      <div class="settings-block">
        <label for="language-select">{{ t('popup.languageLabel') }}</label>
        <select id="language-select" v-model="selectedLanguage">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">
            {{ lang.name }}
          </option>
        </select>
      </div>

      <div class="tabs">
        <button
          v-for="providerDef in computedProviderDefinitions"
          :key="providerDef.id"
          class="tab-button"
          :class="{ active: selectedProvider === providerDef.id }"
          @click="selectedProvider = providerDef.id"
        >
          {{ providerDef.name }}
        </button>
      </div>

      <!-- Блок для отображения "В разработке" -->
      <div
        v-if="providersInDevelopment.includes(selectedProvider)"
        class="in-development-notice"
      >
        <p>{{ t('popup.inDevelopment') }}</p>
      </div>

      <!-- Форма настроек (отображается, если провайдер не в разработке) -->
      <div
        v-else-if="currentProviderUI && currentFormData"
        class="settings-form"
      >
        <h4>{{ currentProviderUI.name }}</h4>
        <div
          v-for="field in currentProviderUI.fields"
          :key="field.key"
          class="form-group"
        >
          <label :for="`${currentProviderUI.id}-${field.key}`">
            {{ field.label }}{{ field.isOptional ? ` ${t('popup.optionalLabel')}` : '' }}:
          </label>
          <div v-if="field.type === 'password'" class="input-group">
            <input
              :id="`${currentProviderUI.id}-${field.key}`"
              v-model="(currentFormData as any)[field.key]"
              :type="showKey ? 'text' : 'password'"
              :placeholder="field.placeholder"
              @input="saveSettingsDebounced"
            >
            <button class="toggle-btn" :title="showKey ? t('popup.tooltips.hideKey') : t('popup.tooltips.showKey')" @click="showKey = !showKey">
              {{ showKey ? '👁️' : '🔒' }}
            </button>
          </div>
          <input
            v-else
            :id="`${currentProviderUI.id}-${field.key}`"
            v-model="(currentFormData as any)[field.key]"
            :type="field.type"
            :placeholder="field.placeholder"
            @input="saveSettingsDebounced"
          >
        </div>
        <p v-if="currentProviderUI.helpText" class="help-text provider-help">
          {{ currentProviderUI.helpText }}
        </p>
      </div>

      <div class="instructions">
        <h3>{{ t('popup.instructionsTitle') }}</h3>
        <ol>
          <li v-for="(item, index) in tm('popup.instructions')" :key="index">
            <span v-html="highlightHotkey(item)" />
          </li>
        </ol>
      </div>
    </div>

    <div class="footer">
      <small>{{ t('popup.version', { version: extensionVersion }) }}</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 380px;
  font-family: var(--chinisik-base-font-family);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color, #333);
}
.header {
  background: linear-gradient(135deg, var(--fg-accent-color), var(--bg-accent-overlay-color));
  color: var(--bg-primary-color);
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid var(--border-primary-color, #22263b);
}
.header h2 {
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
}

.title-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.1em;
    font-weight: 600;
    flex-grow: 1;
  }
}

.theme-toggle-btn {
  background: none;
  border: none;
  color: var(--chinisik-text-primary);
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  margin-left: 12px;

  &:hover {
    background-color: var(--chinisik-bg-hover);
  }

  &:focus,
  &:active {
    outline: none;
  }

  svg {
    width: 1em;
    height: 1em;
  }
}

.content {
  padding: 16px;
  flex-grow: 1;
}
.loading-state {
  text-align: center;
  padding: 30px;
  color: var(--fg-secondary-color, #495057);
}

.tabs {
  display: flex;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--border-secondary-color);
}
.tab-button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 0.9em;
  color: var(--fg-secondary-color, #495057);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.tab-button:hover {
  color: var(--fg-action-color);
}
.tab-button.active {
  color: var(--fg-action-color);
  border-bottom-color: var(--fg-action-color);
  font-weight: 500;
}

/* Стили для плашки "В разработке" */
.in-development-notice {
  background-color: var(--bg-secondary-color, #f0f0f0);
  padding: 25px 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--bg-overlay-primary-color);
  margin-bottom: 20px;
  text-align: center;
  border: 1px dashed var(--border-secondary-color, #ccc);
  color: var(--fg-secondary-color, #555);
  p {
    margin: 0;
    font-size: 1em;
    font-weight: 500;
  }
}

.settings-form {
  background-color: var(--bg-secondary-color, #f7f7f7);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--bg-overlay-primary-color);
  margin-bottom: 20px;
}
.settings-form h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1em;
  color: var(--fg-primary-color, #333);
}

.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.85em;
  color: var(--fg-primary-color, #333);
}
.input-group {
  display: flex;
  gap: 6px;
}
.input-group input,
.settings-form input[type='text'],
.settings-form input[type='password'],
.settings-form input[type='url'] {
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 11px;
  border: 1px solid var(--border-primary-color, #22263b);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color, #333);
  border-radius: 5px;
  font-size: 0.9em;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}
.input-group input::placeholder,
.settings-form input[type='text']::placeholder,
.settings-form input[type='password']::placeholder,
.settings-form input[type='url']::placeholder {
  color: var(--fg-tertiary-color);
}

.input-group input:focus,
.settings-form input:focus {
  outline: none;
  border-color: var(--border-secondary-color, #22263b1a);
  box-shadow: 0 0 0 2px var(--bg-accent-color);
}
.toggle-btn {
  padding: 9px 11px;
  border: 1px solid var(--border-primary-color, #22263b);
  background: var(--bg-tertiary-color, #f3f3f3);
  color: var(--fg-primary-color, #333);
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}
.toggle-btn:hover {
  background: var(--bg-secondary-color, #f7f7f7);
}
.help-text {
  font-size: 0.8em;
  color: var(--fg-secondary-color, #495057);
  margin-top: 6px;
}
.provider-help {
  background-color: var(--bg-accent-color);
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 3px solid var(--fg-accent-color);
  color: var(--fg-primary-color, #333);
  margin-top: 10px;
}

.instructions {
  background-color: var(--bg-secondary-color, #f7f7f7);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--bg-overlay-primary-color);
  margin-bottom: 20px;
}
.instructions h3,
.stats h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1em;
  color: var(--fg-primary-color, #333);
  border-bottom: 1px solid var(--border-secondary-color);
  padding-bottom: 5px;
}
.instructions ol {
  margin: 0;
  padding-left: 18px;
  font-size: 0.85em;
  line-height: 1.5;
}
.instructions li {
  margin-bottom: 7px;
  color: var(--fg-secondary-color, #495057);
}
kbd {
  background: var(--bg-tertiary-color, #f3f3f3);
  border: 1px solid var(--border-primary-color, #22263b);
  border-radius: 3px;
  padding: 2px 5px;
  font-size: 0.85em;
  font-family: var(--chinisik-base-font-family);
  color: var(--fg-primary-color, #333);
}
.stats {
  border-top: 1px solid var(--border-secondary-color);
  padding-top: 18px;
  margin-top: 22px;
}
.stats p {
  margin: 6px 0;
  font-size: 0.85em;
  color: var(--fg-secondary-color, #495057);
}
.footer {
  padding: 12px 16px;
  text-align: right;
  font-size: 0.75em;
  color: var(--fg-tertiary-color);
  border-top: 1px solid var(--border-primary-color, #22263b);
  background-color: var(--bg-tertiary-color, #f3f3f3);
}

.settings-block {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background-color: var(--bg-secondary-color);
  border-radius: 6px;
}

.settings-block label {
  font-weight: 500;
  font-size: 0.9em;
}

.settings-block select {
  flex-grow: 1;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid var(--border-primary-color);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color);
  font-size: 0.9em;
}
</style>
