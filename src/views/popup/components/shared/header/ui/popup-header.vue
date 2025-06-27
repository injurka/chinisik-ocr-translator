<script setup lang="ts">
import type { Theme } from '~/shared/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'

defineProps<{ title: string }>()

const THEMES: Theme[] = ['light', 'dark', 'rainy']

const { t } = useI18n()

const selectedTheme = ref<Theme>('light')
const isLoading = ref(true)

async function saveSettings() {
  try {
    await browser.storage.sync.set({
      appTheme: selectedTheme.value,
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
      'appTheme',
    ]) as any

    const defaults = {
      theme: 'light',
    }

    selectedTheme.value = THEMES.includes(result.appTheme) ? result.appTheme : defaults.theme

    applyTheme(selectedTheme.value)
  }
  catch (error) {
    console.error('Error loading settings:', error)
  }
  finally {
    isLoading.value = false
  }
}

// --- Логика тем ---
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}
function toggleTheme() {
  const currentIndex = THEMES.indexOf(selectedTheme.value)
  selectedTheme.value = THEMES[(currentIndex + 1) % THEMES.length]
}

// --- Watchers ---
watch(selectedTheme, (newTheme) => {
  applyTheme(newTheme)
  saveSettings()
})

// --- Lifecycle & Listeners ---
onMounted(loadSettings)
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.appTheme) {
    const newTheme = changes.appTheme.newValue as Theme
    if (newTheme && newTheme !== selectedTheme.value) {
      selectedTheme.value = newTheme
    }
  }
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
</script>

<template>
  <div class="header">
    <div class="title-block">
      <h2>{{ title }}</h2>
      <button
        class="theme-toggle-btn"
        :title="t('popup.tooltips.changeTheme', { theme: currentThemeName })"
        @click="toggleTheme()"
      >
        <Icon :icon="currentThemeIcon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: linear-gradient(135deg, var(--fg-accent-color), var(--bg-accent-overlay-color));
  color: var(--bg-primary-color);
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid var(--border-primary-color, #22263b);
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
  color: white;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  margin-left: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
</style>
