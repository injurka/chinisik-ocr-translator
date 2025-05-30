<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, GeminiConfig } from '../shared/api/services/translation/config' // Импортируйте все нужные конфиги
import { computed, onMounted, reactive, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '../shared/api/services/translation/providers/chinisik/config'
import { TranslationProvider } from '../shared/types'

interface ProviderField {
  key: keyof ChinisikConfig | keyof GeminiConfig
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

const providerDefinitions: ProviderUIDefinition[] = [
  {
    id: TranslationProvider.Default,
    name: 'Chinisik',
    fields: [
      { key: 'apiKey', label: 'API Key', type: 'password', placeholder: 'Enter Chinisik API Key' },
      { key: 'apiUrl', label: 'API URL', type: 'url', placeholder: CHINISIK_DEFAULT_API_URL, isOptional: true },
    ],
    helpText: 'Default translation service. Requires an API key.',
  },
  {
    id: TranslationProvider.Gemini,
    name: 'Google Gemini',
    fields: [
      { key: 'apiKey', label: 'API Key', type: 'password', placeholder: 'Enter Gemini API Key' },
      { key: 'model', label: 'Model', type: 'text', placeholder: 'e.g., gemini-pro-vision', isOptional: true },
    ],
    helpText: 'Uses Google\'s Gemini AI. Requires an API key.',
  },
  // {
  //   id: TranslationProvider.OLLAMA, // Когда будет Ollama
  //   name: 'Ollama',
  //   fields: [
  //     { key: 'apiUrl', label: 'API URL', type: 'url', placeholder: 'http://localhost:11434' },
  //     { key: 'model', label: 'Model', type: 'text', placeholder: 'e.g., llava' },
  //     { key: 'keepAlive', label: 'Keep Alive', type: 'text', placeholder: '5m', isOptional: true },
  //   ],
  //   helpText: 'Uses a local Ollama instance. Configure API URL and model.'
  // },
]

// --- Реактивное состояние ---
const selectedProvider = ref<TranslationProvider>(TranslationProvider.Default)
const providerSettingsForm = reactive<AllProviderConfigs>({
  [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
  [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
  // [TranslationProvider.OLLAMA]: { apiUrl: 'http://localhost:11434/api/generate', model: 'llava', keepAlive: '5m' },
})
const showKey = ref(false)
const stats = reactive<{ today: number, total: number }>({ today: 0, total: 0 })
const extensionVersion = ref(browser.runtime.getManifest().version)
const isLoading = ref(true)

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
    })
    console.log('Settings saved:', {
      selectedProvider: selectedProvider.value,
      providerSettings: providerSettingsForm,
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
    ]) as {
      selectedProvider: TranslationProvider
      providerSettings: BaseProviderConfig
    }

    const defaultSelected = TranslationProvider.Default
    const defaultSettings: AllProviderConfigs = {
      [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
      [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
      // [TranslationProvider.OLLAMA]: { apiUrl: 'http://localhost:11434/api/generate', model: 'llava', keepAlive: '5m' },
    }

    selectedProvider.value = result.selectedProvider || defaultSelected

    const storedProviderSettings = result.providerSettings || {}
    const mergedSettings = {} as AllProviderConfigs

    for (const providerId in defaultSettings) {
      const pId = providerId as TranslationProvider
      const defaultsForProvider = defaultSettings[pId]

      // @ts-expect-error pId is a valid key for storedProviderSettings
      const storedForProvider = storedProviderSettings[pId] || {}
      mergedSettings[pId] = { ...defaultsForProvider, ...storedForProvider }
    }
    Object.assign(providerSettingsForm, mergedSettings)

    console.log('Settings loaded:', {
      selectedProvider: selectedProvider.value,
      providerSettings: providerSettingsForm,
    })
  }
  catch (error) {
    console.error('Error loading settings:', error)
  }
  finally {
    isLoading.value = false
  }
}

// Вычисляемое свойство для текущего выбранного UI определения провайдера
const currentProviderUI = computed(() => {
  return providerDefinitions.find(p => p.id === selectedProvider.value)
})

const currentFormData = computed(() => {
  return providerSettingsForm[selectedProvider.value]
})

watch(selectedProvider, () => {
  saveSettings()
})

onMounted(async () => {
  await loadSettings()
})
</script>

<template>
  <div class="popup">
    <div class="header">
      <h2>🔍 Chinisik OCR Переводчик</h2>
    </div>

    <div v-if="isLoading" class="content loading-state">
      <p>Загрузка настроек...</p>
    </div>

    <div v-else class="content">
      <div class="tabs">
        <button
          v-for="providerDef in providerDefinitions"
          :key="providerDef.id"
          class="tab-button"
          :class="{ active: selectedProvider === providerDef.id }"
          @click="selectedProvider = providerDef.id"
        >
          {{ providerDef.name }}
        </button>
      </div>

      <div v-if="currentProviderUI && currentFormData" class="settings-form">
        <h4>{{ currentProviderUI.name }}</h4>
        <div
          v-for="field in currentProviderUI.fields"
          :key="field.key"
          class="form-group"
        >
          <label :for="`${currentProviderUI.id}-${field.key}`">
            {{ field.label }}{{ field.isOptional ? ' (Необязательно)' : '' }}:
          </label>
          <div v-if="field.type === 'password'" class="input-group">
            <input
              :id="`${currentProviderUI.id}-${field.key}`"
              v-model="(currentFormData as any)[field.key]"
              :type="showKey ? 'text' : 'password'"
              :placeholder="field.placeholder"
              @input="saveSettingsDebounced"
            >
            <button class="toggle-btn" :title="showKey ? 'Скрыть ключ' : 'Показать ключ'" @click="showKey = !showKey">
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
        <h3>Как использовать:</h3>
        <ol>
          <li>Нажмите <kbd>Ctrl+Shift+S</kbd> (или вашу комбинацию клавиш) для начала захвата области.</li>
          <li>Кликните и перетащите, чтобы выделить область на экране.</li>
          <li>Выбранное изображение будет автоматически отправлено на перевод с использованием выбранного провайдера.</li>
          <li>Результат перевода отобразится на странице.</li>
        </ol>
      </div>

      <div v-if="stats.total > 0" class="stats">
        <h3>Статистика:</h3>
        <p>Переводов сегодня: {{ stats.today }}</p>
        <p>Всего переводов: {{ stats.total }}</p>
      </div>
    </div>

    <div class="footer">
      <small>Версия: {{ extensionVersion }}</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  width: 380px;
  font-family: var(--font-family-base-default, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color);
}
.header {
  background: linear-gradient(135deg, var(--fg-accent-color), var(--bg-accent-overlay-color));
  color: var(--bg-primary-color);
  padding: 16px;
  text-align: center;
}
.header h2 {
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
}
.content {
  padding: 16px;
}
.loading-state {
  text-align: center;
  padding: 30px;
  color: var(--fg-secondary-color);
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
  color: var(--fg-secondary-color);
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

.settings-form {
  background-color: var(--bg-secondary-color);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--bg-overlay-primary-color);
  margin-bottom: 20px;
}
.settings-form h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1em;
  color: var(--fg-primary-color);
}

.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.85em;
  color: var(--fg-primary-color);
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
  border: 1px solid var(--border-primary-color);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color);
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
  border-color: var(--fg-accent-color);
  box-shadow: 0 0 0 2px var(--bg-accent-color);
}
.toggle-btn {
  padding: 9px 11px;
  border: 1px solid var(--border-primary-color);
  background: var(--bg-tertiary-color);
  color: var(--fg-primary-color);
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}
.toggle-btn:hover {
  background: var(--bg-secondary-color);
}
.help-text {
  font-size: 0.8em;
  color: var(--fg-secondary-color);
  margin-top: 6px;
}
.provider-help {
  background-color: var(--bg-accent-color);
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 3px solid var(--fg-accent-color);
  color: var(--fg-primary-color);
  margin-top: 10px;
}

.instructions {
  background-color: var(--bg-secondary-color);
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
  color: var(--fg-primary-color);
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
  color: var(--fg-secondary-color);
}
kbd {
  background: var(--bg-tertiary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 3px;
  padding: 2px 5px;
  font-size: 0.85em;
  font-family: var(
    --font-family-base-default,
    'SFMono-Regular',
    Consolas,
    'Liberation Mono',
    Menlo,
    Courier,
    monospace
  );
  color: var(--fg-primary-color);
}
.stats {
  border-top: 1px solid var(--border-secondary-color);
  padding-top: 18px;
  margin-top: 22px;
}
.stats p {
  margin: 6px 0;
  font-size: 0.85em;
  color: var(--fg-secondary-color);
}
.footer {
  padding: 12px 16px;
  text-align: right;
  font-size: 0.75em;
  color: var(--fg-tertiary-color);
  border-top: 1px solid var(--border-primary-color);
  background-color: var(--bg-tertiary-color);
}
</style>
