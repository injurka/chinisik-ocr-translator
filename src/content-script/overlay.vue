<script lang="ts" setup>
import type { AreaToCapture, RuntimeMessage, TranslationResult } from '../shared/types'
import type { ControlValues } from './components/modules/translate-result/ui/sections/control-menu.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { Selection } from './components/modules/selection'
import { TranslateLoading } from './components/modules/translate-loading'
import { TranslateResult } from './components/modules/translate-result'

type OverlayState = 'IDLE' | 'SELECTING' | 'LOADING' | 'RESULT' | 'ERROR'
type Theme = 'light' | 'dark' | 'rainy'

const STORAGE_KEY_CONTROLS = 'chinisikOcrTranslatorControls'

const appTheme = ref<Theme>('light')
const currentState = ref<OverlayState>('IDLE')
const isSelectionOverlayVisible = ref<boolean>(false)
const translationData = ref<TranslationResult | null>(null)
const errorMessage = ref<string | null>(null)
const capturedImagePreview = ref<string | null>(null)

const sharedControls = ref<ControlValues>({
  displayStyle: 'standard',
  displayPosition: 'center',
})

async function loadControls() {
  try {
    const result = await browser.storage.sync.get(STORAGE_KEY_CONTROLS)
    if (result[STORAGE_KEY_CONTROLS]) {
      const loadedControls = result[STORAGE_KEY_CONTROLS] as ControlValues
      sharedControls.value = {
        ...sharedControls.value, // Default values
        ...loadedControls, // Loaded values override defaults
      }
    }
  }
  catch (e) {
    console.error('Error loading controls:', e)
  }
}

async function saveControls(newControls: ControlValues) {
  try {
    await browser.storage.sync.set({ [STORAGE_KEY_CONTROLS]: newControls })
  }
  catch (e) {
    console.error('Error saving controls:', e)
  }
}

watch(currentState, (newState) => {
  isSelectionOverlayVisible.value = newState === 'SELECTING'
  if (newState !== 'RESULT')
    translationData.value = null
  if (newState !== 'ERROR')
    errorMessage.value = null
  if (newState !== 'RESULT' && newState !== 'SELECTING')
    capturedImagePreview.value = null
})

watch(sharedControls, (newValues) => {
  saveControls(newValues)
}, { deep: true })

function messageListener(message: RuntimeMessage) {
  if (message.action === 'startSelection') {
    currentState.value = 'SELECTING'
    capturedImagePreview.value = null
  }
  else if (message.action === 'showTranslation') {
    const { croppedImage, ...rest } = message.data

    translationData.value = rest
    capturedImagePreview.value = croppedImage
    currentState.value = 'RESULT'
  }
  else if (message.action === 'showError') {
    errorMessage.value = message.error
    currentState.value = 'ERROR'
  }
}

async function handleSelection(area: AreaToCapture) {
  currentState.value = 'LOADING'
  try {
    await browser.runtime.sendMessage({
      action: 'captureAndTranslate',
      area,
    })
  }
  catch (error) {
    console.error('Overlay: Error sending captureAndTranslate message to background:', error)
    errorMessage.value = `Ошибка отправки запроса: ${error instanceof Error ? error.message : String(error)}`
    currentState.value = 'ERROR'
  }
}

function closeComponentAndResetState() {
  currentState.value = 'IDLE'
  capturedImagePreview.value = null
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    if (currentState.value === 'LOADING' || currentState.value === 'RESULT' || currentState.value === 'ERROR') {
      closeComponentAndResetState()
    }
  }
}

async function loadTheme() {
  try {
    const result = await browser.storage.sync.get('appTheme')
    if (result.appTheme) {
      appTheme.value = result.appTheme as Theme
    }
  }
  catch (e) {
    console.error('Error loading theme:', e)
  }
}

async function initTheme() {
  await loadTheme()

  document.documentElement.classList.remove('light-mode', 'dark-mode', 'rainy-mode')
  document.documentElement.classList.add(`${appTheme.value}-mode`)
  document.documentElement.dataset.theme = appTheme.value
}

onMounted(async () => {
  await initTheme()
  browser.runtime.onMessage.addListener(messageListener as any)
  await loadControls()
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  browser.runtime.onMessage.removeListener(messageListener as any)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div>
    <Selection v-model="isSelectionOverlayVisible" @handle-selection="handleSelection" />

    <Transition name="slide-up" appear>
      <TranslateLoading
        v-if="currentState === 'LOADING'"
        key="loading"
        :display-position="sharedControls.displayPosition"
        @close="closeComponentAndResetState"
      />
      <TranslateResult
        v-else-if="currentState === 'RESULT' && translationData"
        key="result"
        v-model:controls="sharedControls"
        :data="translationData"
        :captured-image-preview="capturedImagePreview"
        @close="closeComponentAndResetState"
      />
      <div v-else-if="currentState === 'ERROR' && errorMessage" key="error" class="chinisik-popup-wrapper">
        <div class="chinisik-popup chinisik-error-popup">
          <div class="chinisik-popup-header">
            <span>Ошибка перевода</span>
            <button title="Закрыть (Esc)" class="close-btn-header" @click="closeComponentAndResetState">
              ×
            </button>
          </div>
          <div class="chinisik-popup-content">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.chinisik-popup-wrapper {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  box-sizing: border-box;
  z-index: 2147483646;
  pointer-events: none;

  .chinisik-popup {
    pointer-events: auto;
    max-width: 90vw;
    background-color: var(--bg-primary-color, #ffffff);
    border: 1px solid var(--border-secondary-color, #e0e0e0);
    border-radius: 12px 12px 0 0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: var(--fg-primary-color, #333);
    overflow: hidden;
  }
}

.chinisik-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--bg-secondary-color, #f7f7f7);
  border-bottom: 1px solid var(--border-primary-color, #e7e7e7);

  span {
    font-weight: 600;
    font-size: 14px;
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #888);
    padding: 0 5px;
    &:hover {
      color: var(--fg-primary-color, #333);
    }
  }
}

.chinisik-popup-content {
  padding: 15px;
  font-size: 14px;
  line-height: 1.5;
  flex-grow: 1;
}

.chinisik-error-popup {
  width: 350px;
  background-color: var(--bg-error-color, #fff1f0);
  border-color: var(--border-error-color, #ffccc7);
  color: var(--fg-error-color, #a8071a);

  .chinisik-popup-header {
    background-color: var(--bg-error-secondary-color, #ffccc7);
    border-bottom-color: var(--border-error-strong-color, #ffa39e);
    span {
      color: var(--fg-error-color, #a8071a);
    }
    .close-btn-header {
      color: var(--fg-error-secondary-color, #d4380d);
      &:hover {
        color: var(--fg-error-color, #a8071a);
      }
    }
  }
  .chinisik-popup-content {
    color: var(--fg-error-color, #a8071a);
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(80%);
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
