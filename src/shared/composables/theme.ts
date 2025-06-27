import type { Theme } from '~/shared/types'
import { onMounted, ref, watch } from 'vue'
import browser from 'webextension-polyfill'

const THEMES: Theme[] = ['light', 'dark']
const STORAGE_KEY = 'appTheme'

export function useTheme() {
  const selectedTheme = ref<Theme>('light')
  const isLoading = ref(true)

  function applyTheme(theme: Theme) {
    const root = document.documentElement

    root.classList.remove(...THEMES.filter(t => t !== 'light'))

    if (theme !== 'light') {
      root.classList.add(theme)
    }

    selectedTheme.value = theme
  }

  async function saveTheme() {
    try {
      await browser.storage.sync.set({ [STORAGE_KEY]: selectedTheme.value })
    }
    catch (error) {
      console.error('Error saving theme:', error)
    }
  }

  async function loadTheme() {
    isLoading.value = true
    try {
      const result = await browser.storage.sync.get(STORAGE_KEY)
      const themeToApply = (result[STORAGE_KEY] as Theme) || 'light'
      applyTheme(themeToApply)
    }
    catch (error) {
      console.error('Error loading theme:', error)
      applyTheme('light')
    }
    finally {
      isLoading.value = false
    }
  }

  watch(selectedTheme, saveTheme)

  onMounted(loadTheme)

  browser.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'sync' && changes[STORAGE_KEY]) {
      const newTheme = changes[STORAGE_KEY].newValue as Theme
      if (newTheme && newTheme !== selectedTheme.value) {
        applyTheme(newTheme)
      }
    }
  })

  return {
    selectedTheme,
    themes: THEMES,
    applyTheme,
    isLoading,
  }
}
