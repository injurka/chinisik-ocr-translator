<script setup lang="ts">
import type { Language } from '~/shared/types'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProviderSettings } from '../composables/provider-settings'
import { getProviderDefinitions } from '../lib/provider-definitions'
import Instructions from './instructions.vue'
import SettingsForm from './settings-form.vue'

const { t } = useI18n()
const {
  isLoading,
  selectedProvider,
  providerSettingsForm,
  selectedLanguage,
} = useProviderSettings()

const providerDefinitions = computed(() => getProviderDefinitions(t))

const currentProviderUI = computed(() => providerDefinitions.value.find(p => p.id === selectedProvider.value))
const currentFormData = computed(() => providerSettingsForm[selectedProvider.value])

const languages: { code: Language, name: string }[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
]
</script>

<template>
  <div class="provider-settings">
    <div v-if="isLoading" class="content loading-state">
      <p>{{ t('popup.loadingText') }}</p>
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

      <div class="settings-block">
        <label for="language-select">{{ t('popup.languageLabel') }}</label>
        <select id="language-select" v-model="selectedLanguage">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">
            {{ lang.name }}
          </option>
        </select>
      </div>

      <div v-if="currentProviderUI?.inDevelopment" class="in-development-notice">
        <p>{{ t('popup.inDevelopment') }}</p>
      </div>

      <div v-else-if="currentProviderUI && currentFormData">
        <h4>{{ currentProviderUI.name }}</h4>
        <SettingsForm
          v-model="providerSettingsForm[currentProviderUI.id]"
          :provider-id="currentProviderUI.id"
          :fields="currentProviderUI.fields"
        />
        <p v-if="currentProviderUI.helpText" class="help-text provider-help">
          {{ currentProviderUI.helpText }}
        </p>
      </div>

      <Instructions />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 16px;
  flex-grow: 1;

  .loading-state {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    color: var(--fg-secondary-color, #495057);
  }
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

div > h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1em;
  color: var(--fg-primary-color, #333);
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
