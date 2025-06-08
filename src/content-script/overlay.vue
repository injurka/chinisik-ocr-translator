<script lang="ts" setup>
import type { AreaToCapture, RuntimeMessage, TranslationResult as SingleTranslationResult, Theme } from '../shared/types'
import type { ControlValues } from './components/modules/translate-result/ui/sections/control-menu.vue'
import type { FullscreenTranslateResult } from '~/shared/api/services/all/types'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { STORAGE_KEY_CONTROLS, STORAGE_KEY_THEME } from '~/shared/constant'
import { fullscreenTranslate as utilFullscreenTranslate } from '~/shared/utils/fullscreen-translate'
import { Selection } from './components/modules/selection'
import { TranslateLoading } from './components/modules/translate-loading'
import { TranslateResult } from './components/modules/translate-result'

type OverlayState = 'IDLE' | 'SELECTING' | 'LOADING' | 'RESULT' | 'ERROR' | 'FULL_SCREEN_TRANSLATE_PROCESSING' | 'FULL_SCREEN_TRANSLATE_DISPLAYING'

const currentTheme = ref<Theme>('light')
const currentState = ref<OverlayState>('IDLE')
const isSelectionOverlayVisible = ref<boolean>(false)
const translationData = ref<SingleTranslationResult | null>(null)
const errorMessage = ref<string | null>(null)
const capturedImagePreview = ref<string | null>(null)
const fullScreenOverlays = ref<FullscreenTranslateResult>([])

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
        ...sharedControls.value,
        ...loadedControls,
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
  if (newState !== 'FULL_SCREEN_TRANSLATE_DISPLAYING')
    fullScreenOverlays.value = []
})

function messageListener(message: RuntimeMessage) {
  if (message.action === 'startSelection' && currentState.value !== 'FULL_SCREEN_TRANSLATE_PROCESSING' && currentState.value !== 'LOADING') {
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
  else if (message.action === 'translateFullScreen') {
    closeComponentAndResetState()
    handleFullscreenTranslate(message.imageDataUrl)
  }
}

async function handleFullscreenTranslate(imageDataUrl: string) {
  currentState.value = 'FULL_SCREEN_TRANSLATE_PROCESSING'
  fullScreenOverlays.value = []
  errorMessage.value = null

  try {
    const results = await utilFullscreenTranslate(imageDataUrl)

    if (results && results.length > 0) {
      fullScreenOverlays.value = results
      currentState.value = 'FULL_SCREEN_TRANSLATE_DISPLAYING'
    }
    else {
      errorMessage.value = 'Не удалось найти текст на экране или произошла ошибка при обработке.'
      currentState.value = 'ERROR'
    }
  }
  catch (error) {
    console.error('Error during full screen OCR and translate process:', error)
    errorMessage.value = `Ошибка полноэкранного перевода: ${error instanceof Error ? error.message : String(error)}`
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
    if (['LOADING', 'RESULT', 'ERROR', 'FULL_SCREEN_TRANSLATE_PROCESSING', 'FULL_SCREEN_TRANSLATE_DISPLAYING'].includes(currentState.value)) {
      closeComponentAndResetState()
    }
  }
}

function handleScroll(_e: Event) {
  if (currentState.value === 'FULL_SCREEN_TRANSLATE_DISPLAYING') {
    capturedImagePreview.value = null
    fullScreenOverlays.value = []
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

async function loadAndApplyTheme() {
  try {
    const result = await browser.storage.sync.get(STORAGE_KEY_THEME)
    const themeToApply = (result[STORAGE_KEY_THEME] as Theme) || 'light'
    currentTheme.value = themeToApply
    applyTheme(themeToApply)
  }
  catch (e) {
    console.error('Error loading theme:', e)
    currentTheme.value = 'light'
    applyTheme('light')
  }
}

function storageChangeListener(changes: Record<string, browser.Storage.StorageChange>, areaName: string) {
  if (areaName === 'sync' && changes[STORAGE_KEY_THEME]) {
    const newTheme = changes[STORAGE_KEY_THEME].newValue as Theme
    if (newTheme && newTheme !== currentTheme.value) {
      currentTheme.value = newTheme
      applyTheme(newTheme)
    }
  }
}

watch(sharedControls, (newValues) => {
  saveControls(newValues)
}, { deep: true })

onMounted(async () => {
  await loadAndApplyTheme()
  await loadControls()

  browser.storage.onChanged.addListener(storageChangeListener)
  browser.runtime.onMessage.addListener(messageListener as any)

  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  browser.storage.onChanged.removeListener(storageChangeListener)
  browser.runtime.onMessage.removeListener(messageListener as any)
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <Selection v-model="isSelectionOverlayVisible" @handle-selection="handleSelection" />

    <!-- Fullscreen OCR results display -->
    <div v-if="currentState === 'FULL_SCREEN_TRANSLATE_DISPLAYING' && fullScreenOverlays.length > 0" class="chinisik-full-screen-ocr-overlay-container">
      <div
        v-for="(item, index) in fullScreenOverlays"
        :key="index"
        class="chinisik-ocr-translated-chunk"
        :style="{
          left: `${item.bbox.x0}px`,
          top: `${item.bbox.y0}px`,
          width: `${item.bbox.x1 - item.bbox.x0}px`,
          height: `${item.bbox.y1 - item.bbox.y0}px`,
        }"
      >
        {{ item.result.translate }}
      </div>
    </div>
    <div v-if="currentState === 'FULL_SCREEN_TRANSLATE_PROCESSING'" class="chinisik-full-screen-loading-indicator">
      <p>Полноэкранный перевод...</p>
    </div>

    <!-- Area selection results and loading/error popups -->
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
      <div v-else-if="currentState === 'ERROR' && errorMessage" key="error" class="chinisik-popup-wrapper" :class="[`position-${sharedControls.displayPosition}`]">
        <div class="chinisik-popup chinisik-error-popup">
          <div class="chinisik-popup-header">
            <span>Ошибка перевода</span>
            <button title="Закрыть (Esc)" class="close-btn-header" @click="closeComponentAndResetState">
              <Icon icon="mdi:close" />
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
.chinisik-ocr-translated-chunk {
  position: fixed;
  background-color: var(--bg-secondary-color, #f7f7f7);
  border: 1px solid var(--border-primary-color, #22263b);
  color: var(--fg-primary-color, #333);
  overflow: hidden;
  z-index: 2147483640;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  padding: 2px;
}

.chinisik-full-screen-loading-indicator {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bg-primary-color, #ffffff);
  border: 1px solid var(--border-secondary-color, #e0e0e0);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  color: var(--fg-primary-color, #333);
  padding: 12px 22px;
  border-radius: 8px;
  z-index: 2147483647;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-size: 0.9em;
}

.chinisik-popup-wrapper.position-center {
  left: 50%;
  transform: translateX(-50%);
}
.chinisik-popup-wrapper.position-bottom-left {
  left: 20px;
  right: auto;
  transform: none;
}
.chinisik-popup-wrapper.position-bottom-right {
  right: 20px;
  left: auto;
  transform: none;
}

.chinisik-popup-wrapper {
  position: fixed;
  bottom: 20px;
  width: auto;
  box-sizing: border-box;
  z-index: 2147483646;
  pointer-events: none;

  .chinisik-popup {
    pointer-events: auto;
    max-width: 90vw;
    background-color: var(--bg-primary-color, #ffffff);
    border: 1px solid var(--border-secondary-color, #e0e0e0);
    border-radius: 8px;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    font-family: var(--chinisik-base-font-family);
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
    font-size: 0.875em;
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 1.125em;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #495057);
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--fg-primary-color, #333);
    }
    svg {
      width: 1em;
      height: 1em;
    }
  }
}

.chinisik-popup-content {
  padding: 15px;
  font-size: 0.875em;
  line-height: 1.5;
  flex-grow: 1;
}

.chinisik-error-popup {
  min-width: 300px;
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
  transform: translateY(80%) scale(0.95);
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
