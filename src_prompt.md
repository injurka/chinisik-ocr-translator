== Project Prompt ==
Generated: 2025-06-02T07:41:51.485Z
Source Directory: /home/evai/my/chinisik-root/chinisik-ocr-translator
Included Files: 59
Total Size: 94.06 KB
Format: structured
====================

=== Project File Structure ===
├── src
│ ├── background
│ │ └── index.ts
│ ├── content-script
│ │ ├── components
│ │ │ ├── modules
│ │ │ │ ├── selection
│ │ │ │ │ ├── composables
│ │ │ │ │ │ ├── index.ts
│ │ │ │ │ │ └── use-selection.ts
│ │ │ │ │ ├── ui
│ │ │ │ │ │ ├── sections
│ │ │ │ │ │ │ ├── selection-box.vue
│ │ │ │ │ │ │ └── tooltip.vue
│ │ │ │ │ │ ├── index.ts
│ │ │ │ │ │ └── selection.vue
│ │ │ │ │ └── index.ts
│ │ │ │ ├── translate-loading
│ │ │ │ │ ├── ui
│ │ │ │ │ │ ├── index.ts
│ │ │ │ │ │ └── translate-loading.vue
│ │ │ │ │ └── index.ts
│ │ │ │ └── translate-result
│ │ │ │ ├── ui
│ │ │ │ │ ├── sections
│ │ │ │ │ │ ├── control-menu.vue
│ │ │ │ │ │ └── lexical-analysis-modal.vue
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── translate-result.vue
│ │ │ │ └── index.ts
│ │ │ └── shared
│ │ │ ├── hieroglyph-word
│ │ │ │ ├── store
│ │ │ │ │ └── index.ts
│ │ │ │ ├── types
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── props.ts
│ │ │ │ ├── ui
│ │ │ │ │ └── index.scss
│ │ │ │ └── index.ts
│ │ │ ├── markdown-content
│ │ │ │ ├── lib
│ │ │ │ │ ├── create-markdown-renderer.ts
│ │ │ │ │ └── index.ts
│ │ │ │ ├── ui
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── markdown-content.vue
│ │ │ │ └── index.ts
│ │ │ └── pinyin-text
│ │ │ ├── lib
│ │ │ │ ├── index.ts
│ │ │ │ └── parse-pinyin.ts
│ │ │ ├── store
│ │ │ │ └── index.ts
│ │ │ ├── types
│ │ │ │ ├── index.ts
│ │ │ │ └── props.ts
│ │ │ ├── ui
│ │ │ │ └── index.vue
│ │ │ └── index.ts
│ │ ├── main.ts
│ │ └── overlay.vue
│ ├── popup
│ │ ├── main.ts
│ │ └── popup.vue
│ ├── shared
│ │ ├── api
│ │ │ ├── services
│ │ │ │ ├── all
│ │ │ │ │ ├── providers
│ │ │ │ │ │ └── chinisik
│ │ │ │ │ │ ├── config.ts
│ │ │ │ │ │ └── provider.ts
│ │ │ │ │ ├── config.ts
│ │ │ │ │ ├── index.ts
│ │ │ │ │ ├── provider-factory.ts
│ │ │ │ │ ├── translate-service.ts
│ │ │ │ │ └── types.ts
│ │ │ │ └── index.ts
│ │ │ └── index.ts
│ │ ├── composables
│ │ │ ├── index.ts
│ │ │ └── render.ts
│ │ ├── types
│ │ │ ├── common.ts
│ │ │ ├── index.ts
│ │ │ └── messaging.ts
│ │ └── utils
│ │ ├── helpers.ts
│ │ └── initialize-storage-defaults.ts
│ ├── manifest.json
│ └── shims-vue.d.ts
├── eslint.config.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
============================

=== File List ===

- eslint.config.ts (0.19 KB)
- package.json (1.68 KB)
- src/background/index.ts (3.83 KB)
- src/content-script/components/modules/selection/composables/index.ts (0.03 KB)
- src/content-script/components/modules/selection/composables/use-selection.ts (3.53 KB)
- src/content-script/components/modules/selection/index.ts (0.02 KB)
- src/content-script/components/modules/selection/ui/index.ts (0.06 KB)
- src/content-script/components/modules/selection/ui/sections/selection-box.vue (0.23 KB)
- src/content-script/components/modules/selection/ui/sections/tooltip.vue (0.57 KB)
- src/content-script/components/modules/selection/ui/selection.vue (1.39 KB)
- src/content-script/components/modules/translate-loading/index.ts (0.02 KB)
- src/content-script/components/modules/translate-loading/ui/index.ts (0.08 KB)
- src/content-script/components/modules/translate-loading/ui/translate-loading.vue (3.21 KB)
- src/content-script/components/modules/translate-result/index.ts (0.02 KB)
- src/content-script/components/modules/translate-result/ui/index.ts (0.08 KB)
- src/content-script/components/modules/translate-result/ui/sections/control-menu.vue (4.10 KB)
- src/content-script/components/modules/translate-result/ui/sections/lexical-analysis-modal.vue (4.35 KB)
- src/content-script/components/modules/translate-result/ui/translate-result.vue (8.72 KB)
- src/content-script/components/shared/hieroglyph-word/index.ts (0.12 KB)
- src/content-script/components/shared/hieroglyph-word/store/index.ts (0.67 KB)
- src/content-script/components/shared/hieroglyph-word/types/index.ts (0.18 KB)
- src/content-script/components/shared/hieroglyph-word/types/props.ts (0.33 KB)
- src/content-script/components/shared/hieroglyph-word/ui/index.scss (2.22 KB)
- src/content-script/components/shared/markdown-content/index.ts (0.02 KB)
- src/content-script/components/shared/markdown-content/lib/create-markdown-renderer.ts (0.36 KB)
- src/content-script/components/shared/markdown-content/lib/index.ts (0.04 KB)
- src/content-script/components/shared/markdown-content/ui/index.ts (0.08 KB)
- src/content-script/components/shared/markdown-content/ui/markdown-content.vue (5.22 KB)
- src/content-script/components/shared/pinyin-text/index.ts (0.19 KB)
- src/content-script/components/shared/pinyin-text/lib/index.ts (0.03 KB)
- src/content-script/components/shared/pinyin-text/lib/parse-pinyin.ts (1.11 KB)
- src/content-script/components/shared/pinyin-text/store/index.ts (0.55 KB)
- src/content-script/components/shared/pinyin-text/types/index.ts (0.02 KB)
- src/content-script/components/shared/pinyin-text/types/props.ts (0.27 KB)
- src/content-script/components/shared/pinyin-text/ui/index.vue (1.81 KB)
- src/content-script/main.ts (0.56 KB)
- src/content-script/overlay.vue (8.21 KB)
- src/manifest.json (1.11 KB)
- src/popup/main.ts (0.13 KB)
- src/popup/popup.vue (14.42 KB)
- src/shared/api/index.ts (0.03 KB)
- src/shared/api/services/all/config.ts (1.49 KB)
- src/shared/api/services/all/index.ts (0.04 KB)
- src/shared/api/services/all/provider-factory.ts (1.01 KB)
- src/shared/api/services/all/providers/chinisik/config.ts (0.07 KB)
- src/shared/api/services/all/providers/chinisik/provider.ts (4.89 KB)
- src/shared/api/services/all/translate-service.ts (3.87 KB)
- src/shared/api/services/all/types.ts (0.91 KB)
- src/shared/api/services/index.ts (0.02 KB)
- src/shared/composables/index.ts (0.02 KB)
- src/shared/composables/render.ts (0.42 KB)
- src/shared/types/common.ts (0.48 KB)
- src/shared/types/index.ts (0.05 KB)
- src/shared/types/messaging.ts (1.04 KB)
- src/shared/utils/helpers.ts (4.95 KB)
- src/shared/utils/initialize-storage-defaults.ts (2.31 KB)
- src/shims-vue.d.ts (0.15 KB)
- tsconfig.json (0.45 KB)
- # vite.config.ts (2.06 KB)

=== File Contents ===

--- File: eslint.config.ts ---

import antfu from '@antfu/eslint-config'

export default antfu({
formatters: true,
ignores: [
'**/.dist/**',
'**/.vitestcache/**',
'**/e2e-**/**',
'**/bun.lock',
],
})

--- File: package.json ---

{
"name": "chinisik-ocr-translator",
"type": "module",
"version": "0.0.2",
"scripts": {
"dev": "vite",
"dev:firefox": "TARGET=firefox vite",
"build": "vite build",
"build:firefox": "tsc && TARGET=firefox vite build",
"zip": "bun run build/zip.ts",
"--------------------------------------------------------------------------------": "",
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"typecheck": "vue-tsc --noEmit",
"----------------------------------------------------------------------------------": "",
"postinstall": "simple-git-hooks"
},
"dependencies": {
"@google/generative-ai": "^0.11.3",
"markdown-it": "^14.1.0",
"markdown-it-attrs": "^4.3.1",
"markdown-it-container": "^4.0.0",
"ofetch": "^1.4.1",
"vue": "^3.4.21",
"webextension-polyfill": "^0.12.0"
},
"devDependencies": {
"@antfu/eslint-config": "4.13.2",
"@iconify/vue": "^5.0.0",
"@types/markdown-it": "^14.1.2",
"@types/markdown-it-attrs": "^4.1.3",
"@types/markdown-it-container": "^2.0.10",
"@types/webextension-polyfill": "^0.12.3",
"@vitejs/plugin-vue": "^5.2.4",
"@vitejs/plugin-vue-jsx": "^4.2.0",
"@vue/compiler-sfc": "^3.5",
"eslint": "9.28.0",
"eslint-plugin-format": "1.0.1",
"jiti": "^2.4.2",
"sass": "1.80.6",
"simple-git-hooks": "2.13.0",
"typescript": "^5.3.2",
"vite": "^5.2.8",
"vite-plugin-web-extension": "^4.4.3",
"vue-tsc": "^2.2.10",
"zip-a-folder": "^3.1.9"
},
"simple-git-hooks": {
"pre-commit": "bun x lint-staged && bun run typecheck",
"post-commit": "git status",
"post-merge": "bun i"
},
"lint-staged": {
"\*": "eslint --fix"
}
}

--- File: src/background/index.ts ---

import type { GetLexicalAnalysisMessage, MessageSender, RuntimeMessage, ShowErrorMessage, ShowTranslationMessage } from '../shared/types/messaging'
import browser from 'webextension-polyfill'
import { performLexicalAnalysisService, performTranslate } from '../shared/api'
import { cropImage, isCaptureAreaMessage } from '../shared/utils/helpers'
import { initializeStorageDefaults } from '../shared/utils/initialize-storage-defaults'

initializeStorageDefaults()

browser.commands.onCommand.addListener(async (command) => {
if (command === 'capture-area') {
const tabs = await browser.tabs.query({ active: true, currentWindow: true })
if (tabs[0] && tabs[0].id) {
try {
await browser.tabs.sendMessage(tabs[0].id, { action: 'startSelection' })
}
catch (error) {
console.error('Failed to send \'startSelection\' message. Content script might not be ready or on a restricted page.', error)
browser.notifications.create({
type: 'basic',
iconUrl: browser.runtime.getURL('icon/128.png'),
title: 'Capture Error',
message: 'Could not start capture on this page. Please reload the page or try a different one.',
})
}
}
else {
console.error('No active tab found to start selection.')
}
}
})

browser.runtime.onMessage.addListener(
async (message: unknown, sender: MessageSender) => {
if (typeof message !== 'object' || message === null || !('action' in message) || typeof (message as any).action !== 'string') {
console.warn('Received malformed message:', message)
return
}

    const request = message as RuntimeMessage

    if (isCaptureAreaMessage(request)) {
      if (!sender.tab || !sender.tab.id) {
        console.error('Request did not come from a valid tab.')
        return { error: 'Invalid request source.' }
      }
      const tabId = sender.tab.id

      try {
        const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
        if (!imageDataUrl) {
          throw new Error('Failed to capture tab visible content.')
        }
        const area = request.area
        const croppedImageDataUrl = await cropImage(
          imageDataUrl,
          area.x,
          area.y,
          area.width,
          area.height,
        )

        const translation = await performTranslate(croppedImageDataUrl)
        const translationMsg: ShowTranslationMessage = {
          action: 'showTranslation',
          data: {
            ...translation,
            croppedImage: croppedImageDataUrl,
          },
        }
        browser.tabs.sendMessage(tabId, translationMsg)

        return { success: true, translation }
      }
      catch (error: any) {
        console.error('Error during capture and translate process:', error)
        const errorMsg: ShowErrorMessage = {
          action: 'showError',
          error: error.message || 'An unknown error occurred during translation.',
        }
        browser.tabs.sendMessage(tabId, errorMsg)
        return { error: error.message || 'Unknown error' }
      }
    }
    else if (request.action === 'getLexicalAnalysis') {
      const getLexicalAnalysisMessage = request as GetLexicalAnalysisMessage

      if (!getLexicalAnalysisMessage.sentence) {
        console.error('Sentence is missing for lexical analysis.')
        return { error: 'Sentence is missing for lexical analysis.' }
      }
      try {
        const analysisResult = await performLexicalAnalysisService(getLexicalAnalysisMessage.sentence)

        return { data: analysisResult }
      }
      catch (error: any) {
        console.error('Error in background performing lexical analysis:', error)

        return { error: error.message || 'Unknown error during lexical analysis.' }
      }
    }
    else {
      console.warn('Received message with unhandled action:', request.action)
    }

    return true

},
)

--- File: src/content-script/components/modules/selection/composables/index.ts ---

export \* from './use-selection'

--- File: src/content-script/components/modules/selection/composables/use-selection.ts ---

import type { ModelRef } from 'vue'
import type { AreaToCapture } from '../../../../../shared/types'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

export function useSelection(
isOverlayVisible: ModelRef<boolean, string, boolean, boolean>,
handleSelection: (area: AreaToCapture) => void,
) {
const isSelecting = ref(false)
const startPos = reactive({ x: 0, y: 0 })
const currentPos = reactive({ x: 0, y: 0 })

const selectionBox = reactive({
x: 0,
y: 0,
width: 0,
height: 0,
})

const overlayCursor = computed(() => (isOverlayVisible.value ? 'crosshair' : 'default'))

const selectionBoxStyle = computed(() => ({
left: `${selectionBox.x}px`,
top: `${selectionBox.y}px`,
width: `${selectionBox.width}px`,
height: `${selectionBox.height}px`,
}))

const tooltipStyle = computed(() => ({
left: `${currentPos.x + 15}px`,
top: `${currentPos.y + 15}px`,
}))

function resetSelectionState() {
isSelecting.value = false
selectionBox.x = 0
selectionBox.y = 0
selectionBox.width = 0
selectionBox.height = 0
startPos.x = 0
startPos.y = 0
currentPos.x = 0
currentPos.y = 0
}

function handleMouseDown(event: MouseEvent) {
if (!isOverlayVisible.value)
return
isSelecting.value = true
startPos.x = event.clientX
startPos.y = event.clientY
currentPos.x = event.clientX
currentPos.y = event.clientY
selectionBox.x = event.clientX
selectionBox.y = event.clientY
selectionBox.width = 0
selectionBox.height = 0
}

function handleMouseMove(event: MouseEvent) {
if (!isSelecting.value)
return
currentPos.x = event.clientX
currentPos.y = event.clientY
selectionBox.x = Math.min(startPos.x, currentPos.x)
selectionBox.y = Math.min(startPos.y, currentPos.y)
selectionBox.width = Math.abs(startPos.x - currentPos.x)
selectionBox.height = Math.abs(startPos.y - currentPos.y)
}

function handleMouseUp() {
if (!isSelecting.value)
return
isSelecting.value = false
isOverlayVisible.value = false

    document.body.style.userSelect = 'auto'
    if (selectionBox.width < 5 || selectionBox.height < 5) {
      resetSelectionState()
      return
    }

    const dpr = window.devicePixelRatio || 1
    const areaToCapture: AreaToCapture = {
      x: selectionBox.x * dpr,
      y: selectionBox.y * dpr,
      width: selectionBox.width * dpr,
      height: selectionBox.height * dpr,
    }

    handleSelection(areaToCapture)
    resetSelectionState()

}

function cancelSelectionOnLeave(event: MouseEvent) {
if (isSelecting.value
&& (event.clientX <= 0 || event.clientY <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)
) {
isSelecting.value = false
isOverlayVisible.value = false
}
}

function handleKeyDown(event: KeyboardEvent) {
if (event.key === 'Escape') {
if (isOverlayVisible.value) {
isOverlayVisible.value = false
resetSelectionState()
document.body.style.userSelect = 'auto'
}
}
}

// watch(
// isOverlayVisible,
// value => !!value && resetSelectionState(),
// )

onMounted(() => {
document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
document.removeEventListener('keydown', handleKeyDown)
})

return {
isOverlayVisible,
isSelecting,
overlayCursor,
handleMouseDown,
handleMouseMove,
handleMouseUp,
cancelSelectionOnLeave,
selectionBox,
selectionBoxStyle,
tooltipStyle,
currentPos,
}
}

--- File: src/content-script/components/modules/selection/index.ts ---

export \* from './ui'

--- File: src/content-script/components/modules/selection/ui/index.ts ---

import Selection from './selection.vue'

export { Selection }

--- File: src/content-script/components/modules/selection/ui/sections/selection-box.vue ---

<template>
  <div class="chinisik-selection-box" />
</template>

<style scoped>
.chinisik-selection-box {
  position: absolute;
  border: 1px dashed #007bff;
  background-color: rgba(0, 123, 255, 0.1);
  box-sizing: border-box;
}
</style>

--- File: src/content-script/components/modules/selection/ui/sections/tooltip.vue ---

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  style: Record<string, string>
  dimensions: { width: number, height: number }
}>()
</script>

<template>
  <div class="chinisik-tooltip" :style="style">
    {{ Math.round(dimensions.width) }} x {{ Math.round(dimensions.height) }}
  </div>
</template>

<style scoped>
.chinisik-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 3px 7px;
  border-radius: 3px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 2147483647;
}
</style>

--- File: src/content-script/components/modules/selection/ui/selection.vue ---

<script lang="ts" setup>
import type { AreaToCapture } from '../../../../../shared/types'
import { useSelection } from '../composables'
import SelectionBox from './sections/selection-box.vue'
import Tooltip from './sections/tooltip.vue'

const emits = defineEmits<{ handleSelection: [area: AreaToCapture] }>()
const isOverlayVisible = defineModel<boolean>({ required: true })

const {
  isSelecting,
  overlayCursor,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  cancelSelectionOnLeave,
  selectionBox,
  selectionBoxStyle,
  tooltipStyle,
} = useSelection(isOverlayVisible, (area: AreaToCapture) => emits('handleSelection', area))
</script>

<template>
  <div
    v-show="isOverlayVisible"
    class="chinisik-selection-overlay"
    :style="{ cursor: overlayCursor }"
    @mousedown.left.prevent="handleMouseDown"
    @mousemove.prevent="handleMouseMove"
    @mouseup.left.prevent="handleMouseUp"
    @mouseleave="cancelSelectionOnLeave"
  >
    <SelectionBox v-if="selectionBox.width > 0 && selectionBox.height > 0" :style="selectionBoxStyle" />
    <Tooltip v-if="isSelecting" :style="tooltipStyle" :dimensions="{ width: selectionBox.width, height: selectionBox.height }" />
  </div>
</template>

<style scoped>
.chinisik-selection-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2147483646;
  user-select: none;
}
</style>

--- File: src/content-script/components/modules/translate-loading/index.ts ---

export \* from './ui'

--- File: src/content-script/components/modules/translate-loading/ui/index.ts ---

import TranslateLoading from './translate-loading.vue'

export { TranslateLoading }

--- File: src/content-script/components/modules/translate-loading/ui/translate-loading.vue ---

<script lang="ts" setup>
import type { DisplayPositionValue } from '../../translate-result/ui/sections/control-menu.vue'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<{
  displayPosition: DisplayPositionValue
}>()
const emit = defineEmits(['close'])
function close() {
  emit('close')
}

const positionClasses = computed(() => {
  const base = 'chinisik-popup-wrapper'
  switch (props.displayPosition) {
    case 'bottom-left':
      return `${base} position-bottom-left`
    case 'bottom-right':
      return `${base} position-bottom-right`
    case 'center':
    default:
      return `${base} position-center`
  }
})
</script>

<template>
  <div :class="positionClasses">
    <div class="chinisik-popup translate-loading-popup">
      <div class="chinisik-popup-header">
        <span>Перевод...</span>
        <button title="Отменить (Esc)" class="close-btn-header" @click="close">
          <Icon icon="mdi:close" />
        </button>
      </div>
      <div class="chinisik-popup-content loader-container">
        <div class="loader" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chinisik-popup-wrapper {
  position: fixed;
  bottom: 20px;
  width: auto;
  box-sizing: border-box;
  z-index: 2147483646;
  pointer-events: none;

  &.position-center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.position-bottom-left {
    left: 20px;
    right: auto;
    transform: none;
  }

  &.position-bottom-right {
    right: 20px;
    left: auto;
    transform: none;
  }

  .chinisik-popup {
    pointer-events: auto;
    width: 300px;
    max-width: 90vw;
    background-color: var(--bg-primary-color, #ffffff);
    border: 1px solid var(--border-secondary-color, #e0e0e0);
    border-radius: 8px;
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
  border-bottom: 1px solid var(--border-secondary-color, #e7e7e7);

  span {
    font-weight: 600;
    font-size: 14px;
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #888);
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
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.loader {
  border: 4px solid var(--bg-tertiary-color, #f3f3f3);
  border-top: 4px solid var(--fg-accent-color, #007bff);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: chinisik-spin 1s linear infinite;
}

@keyframes chinisik-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

--- File: src/content-script/components/modules/translate-result/index.ts ---

export \* from './ui'

--- File: src/content-script/components/modules/translate-result/ui/index.ts ---

import TranslateResult from './translate-result.vue'

export { TranslateResult }

--- File: src/content-script/components/modules/translate-result/ui/sections/control-menu.vue ---

<script lang="ts" setup>
import type { HieroglyphWordVariant } from '~/content-script/components/shared/hieroglyph-word'
import { Icon } from '@iconify/vue'

export type DisplayPositionValue = 'center' | 'bottom-left' | 'bottom-right'
export type DisplayStyleValue = HieroglyphWordVariant

export interface ControlValues {
  displayStyle: DisplayStyleValue
  displayPosition: DisplayPositionValue
}

interface Props {
  modelValue: ControlValues
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: ControlValues): void
}>()

function updateDisplayPosition(position: DisplayPositionValue) {
  emit('update:modelValue', { ...props.modelValue, displayPosition: position })
}

function updateDisplayStyle(style: DisplayStyleValue) {
  emit('update:modelValue', { ...props.modelValue, displayStyle: style })
}
</script>

<template>
  <div class="control-menu-content">
    <div class="control-group">
      <label class="control-label">Стиль отображения:</label>
      <div class="button-group">
        <button
          :class="{ active: modelValue.displayStyle === 'compact' }"
          title="Компактный"
          @click="updateDisplayStyle('compact')"
        >
          <Icon icon="mdi:view-compact-outline" />
        </button>
        <button
          :class="{ active: modelValue.displayStyle === 'standard' }"
          title="Стандартный"
          @click="updateDisplayStyle('standard')"
        >
          <Icon icon="mdi:view-dashboard-outline" />
        </button>
        <button
          :class="{ active: modelValue.displayStyle === 'expanded' }"
          title="Расширенный"
          @click="updateDisplayStyle('expanded')"
        >
          <Icon icon="mdi:view-sequential-outline" />
        </button>
      </div>
    </div>

    <div class="control-group">
      <label class="control-label">Позиция на экране:</label>
      <div class="button-group">
        <button
          :class="{ active: modelValue.displayPosition === 'bottom-left' }"
          title="Влево снизу"
          @click="updateDisplayPosition('bottom-left')"
        >
          <Icon icon="mdi:dock-left" />
        </button>
        <button
          :class="{ active: modelValue.displayPosition === 'center' }"
          title="По центру снизу"
          @click="updateDisplayPosition('center')"
        >
          <Icon icon="mdi:dock-bottom" />
        </button>
        <button
          :class="{ active: modelValue.displayPosition === 'bottom-right' }"
          title="Вправо снизу"
          @click="updateDisplayPosition('bottom-right')"
        >
          <Icon icon="mdi:dock-right" />
        </button>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.control-menu-content {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 220px;
  background-color: var(--bg-secondary-color, #f7f7f7);
  border: 1px solid var(--border-secondary-color, #22263b1a);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--fg-secondary-color, #555);
}

.button-group {
  display: flex;
  gap: 6px;

  button {
    flex-grow: 1;
    padding: 6px 8px;
    background-color: var(--bg-tertiary-color, #f3f3f3);
    border: 1px solid var(--border-secondary-color, #ccc);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fg-primary-color, #333);
    font-size: 18px;

    &:hover {
      background-color: var(--bg-action-hover-color, #828dca);
    }

    &.active {
      background-color: var(--border-accent-color, #bbcef8);
      color: var(--bg-primary-color, #fff);
      border-color: var(--border-accent-color, #bbcef8);
    }

    svg {
      width: 1em;
      height: 1em;
    }
  }
}

.control-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  label {
    color: var(--fg-primary-color, #333);
    cursor: pointer;
    padding-right: 8px;
  }
}
</style>

--- File: src/content-script/components/modules/translate-result/ui/sections/lexical-analysis-modal.vue ---

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { onMounted, onUnmounted } from 'vue'
import { MarkdownContent } from '../../../../shared/markdown-content'

interface Props {
  source: string
  data: string | null
  isLoading: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}

function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<template>
  <Transition name="modal-fade" appear>
    <div class="chinisik-modal-overlay" @click.self="closeModal">
      <Transition name="modal-content-appear" appear>
        <div class="chinisik-modal-content lexical-analysis-modal">
          <div class="chinisik-modal-header">
            <h3>{{ source }}</h3>
            <button title="Закрыть (Esc)" class="close-btn-header" @click="closeModal">
              <Icon icon="mdi:close" />
            </button>
          </div>
          <div class="chinisik-modal-body">
            <div v-if="props.isLoading" class="loader-container">
              <div class="loader" />
              <p>Загрузка анализа...</p>
            </div>

            <div v-else-if="props.data">
              <MarkdownContent :content="props.data" />
            </div>
            <div v-else>
              <p>Нет данных для отображения или произошла ошибка.</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>

  </Transition>
</template>

<style lang="scss" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-content-appear-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal-content-appear-leave-active {
  transition: all 0.25s ease-out;
}
.modal-content-appear-enter-from,
.modal-content-appear-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.modal-content-appear-enter-to,
.modal-content-appear-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.chinisik-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  backdrop-filter: blur(4px);
}

.chinisik-modal-content {
  background-color: var(--bg-primary-color, #fff);
  color: var(--fg-primary-color, #333);
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: center center;
}

.chinisik-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;
  border-bottom: 1px solid var(--border-secondary-color, #e9ecef);
  background-color: var(--bg-secondary-color, #f8f9fa);

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: var(--fg-primary-color, #212529);
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #6c757d);
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;

    &:hover {
      color: var(--fg-primary-color, #343a40);
    }
    svg {
      width: 1em;
      height: 1em;
    }
  }
}

.chinisik-modal-body {
  overflow-y: auto;
  flex-grow: 1;
  font-size: 0.95rem;

  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: var(--fg-secondary-color, #495057);

    .loader {
      border: 4px solid var(--bg-tertiary-color, #f3f3f3);
      border-top: 4px solid var(--fg-accent-color, #007bff);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: chinisik-spin 1s linear infinite;
      margin-bottom: 10px;
    }
  }

  :deep(.markdown-body) {
    & > *:not(h2) {
      margin-inline: 18px;
    }
  }
}

@keyframes chinisik-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

--- File: src/content-script/components/modules/translate-result/ui/translate-result.vue ---

<script lang="ts" setup>
import type { TranslationResult as TranslationDataType } from '../../../../../shared/types'
import type { ControlValues } from './sections/control-menu.vue'
import type { LexicalAnalysisResult } from '~/shared/api/services/all/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import browser from 'webextension-polyfill'
import { HieroglyphWord } from '../../../shared/hieroglyph-word'
import ControlMenu from './sections/control-menu.vue'
import LexicalAnalysisModal from './sections/lexical-analysis-modal.vue'

interface Props {
  data: TranslationDataType
  capturedImagePreview?: string | null
}
const props = defineProps<Props>()
const emit = defineEmits<{ close: [void], sound: [source: string] }>()

const controls = defineModel<ControlValues>('controls', {
  required: true,
})
const isControlMenuOpen = ref(false)
const controlMenuRef = ref<HTMLElement | null>(null)
const menuButtonRef = ref<HTMLElement | null>(null)

// --- Состояние для лексического анализа ---
const isLexicalAnalysisModalVisible = ref(false)
const lexicalAnalysisData = ref<string | null>(null)
const isLexicalAnalysisLoading = ref(false)
const lexicalAnalysisError = ref<string | null>(null)
// -----------------------------------------

function closeComponent() {
  emit('close')
}

function soundSource() {
  if (props.data?.source) {
    emit('sound', props.data.source)
  }
}

function toggleControlMenu() {
  isControlMenuOpen.value = !isControlMenuOpen.value
}

async function handleLexicalAnalysis() {
  if (!props.data?.source || isLexicalAnalysisLoading.value)
    return

  isLexicalAnalysisLoading.value = true
  lexicalAnalysisData.value = null
  lexicalAnalysisError.value = null

  try {
    const response: { data: LexicalAnalysisResult } = await browser.runtime.sendMessage({
      action: 'getLexicalAnalysis',
      sentence: props.data.source,
    })
    lexicalAnalysisData.value = response?.data || null
    isLexicalAnalysisModalVisible.value = true
  }
  catch (error: any) {
    console.error('Ошибка при запросе лексического анализа:', error)
    lexicalAnalysisError.value = error.message || 'Произошла неизвестная ошибка.'
    isLexicalAnalysisModalVisible.value = true
  }
  finally {
    isLexicalAnalysisLoading.value = false
  }
}

function handleClickOutside(event: MouseEvent) {
  if (
    isControlMenuOpen.value
    && controlMenuRef.value
    && !controlMenuRef.value.contains(event.target as Node)
    && menuButtonRef.value
    && !menuButtonRef.value.contains(event.target as Node)
  ) {
    isControlMenuOpen.value = false
  }
}

function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    if (isControlMenuOpen.value) {
      isControlMenuOpen.value = false
    }
    else {
      closeComponent()
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})

const positionClasses = computed(() => {
  const base = 'translation-results'
  switch (controls.value.displayPosition) {
    case 'bottom-left':
      return `${base} position-bottom-left`
    case 'bottom-right':
      return `${base} position-bottom-right`
    case 'center':
    default:
      return `${base} position-center`
  }
})
</script>

<template>
  <div :class="positionClasses">
    <div class="actions-bar">
      <button
        title="Лексический анализ"
        class="icon-button lexical-analysis-btn"
        :disabled="!props.data?.source || isLexicalAnalysisLoading"
        @click="handleLexicalAnalysis"
      >
        <Icon v-if="isLexicalAnalysisLoading" icon="mdi:loading" class="animate-spin" />
        <Icon v-else icon="mdi:text-box-search-outline" />
      </button>
      <button
        title="Озвучить распознанный текст"
        class="icon-button sound-btn"
        :disabled="!props.data?.source"
        @click="soundSource"
      >
        <Icon icon="mdi:volume-high" />
      </button>
      <div class="menu-container">
        <button
          ref="menuButtonRef"
          title="Настройки отображения"
          class="icon-button menu-btn"
          :class="{ active: isControlMenuOpen }"
          @click.stop="toggleControlMenu"
        >
          <Icon icon="mdi:cog-outline" />
        </button>
        <div
          v-if="isControlMenuOpen"
          ref="controlMenuRef"
          class="control-menu-popover"
        >
          <ControlMenu v-model="controls" />
        </div>
      </div>
      <button
        class="icon-button close-btn-action"
        title="Закрыть (Esc)"
        @click="closeComponent()"
      >
        <Icon icon="mdi:close" />
      </button>
    </div>

    <div class="results-content">
      <div class="translation-section">
        <div class="text-block">
          <div class="text-content container">
            <HieroglyphWord
              v-if="props.data?.source"
              :variant="controls.displayStyle"
              :glyph="props.data.source"
              :pinyin="props.data.transcription"
              :translate="props.data.translate"
            />
            <span v-else>Не удалось распознать текст</span>
          </div>
        </div>
      </div>
    </div>

  </div>
  <LexicalAnalysisModal
    v-if="isLexicalAnalysisModalVisible"
    :source="data.source"
    :data="lexicalAnalysisData"
    :is-loading="isLexicalAnalysisLoading"
    @close="isLexicalAnalysisModalVisible = false; lexicalAnalysisError = null;"
  />
</template>

<style lang="scss" scoped>
.translation-results {
  position: fixed;
  bottom: 20px;
  min-width: 400px;
  width: auto;
  display: inline-flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--bg-header-color), 0.85);
  border: 1px solid var(--border-secondary-color);
  border-radius: 8px;
  z-index: 9999;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
  max-width: calc(100vw - 40px);

  @media (max-width: 1200px) {
    width: 100%;
  }

  &.position-center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.position-bottom-left {
    left: 20px;
    right: auto;
    transform: none;
  }

  &.position-bottom-right {
    right: 20px;
    left: auto;
    transform: none;
  }
}

.actions-bar {
  position: absolute;
  top: -42px;
  right: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 101;

  .icon-button {
    width: 32px;
    height: 32px;
    background-color: var(--bg-tertiary-color, #f3f3f3);
    border: 1px solid var(--border-secondary-color, #ccc);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    color: var(--fg-primary-color, #333);
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;

    &:hover {
      background-color: var(--bg-action-hover-color, #828dca);
      border-color: var(--border-accent-color, #bbcef8);
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
      background-color: var(--bg-tertiary-color, #f3f3f3);
      color: var(--fg-disabled-color, #999);
    }

    &.menu-btn.active {
      background-color: var(--border-accent-color, #007bff);
      color: var(--bg-primary-color, #fff);
      border-color: var(--border-accent-color, #007bff);
    }

    .animate-spin {
      animation: chinisik-spin 0.8s linear infinite;
    }

    svg {
      width: 1em;
      height: 1em;
    }
  }
}

@keyframes chinisik-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.menu-container {
  position: relative;
}

.control-menu-popover {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  z-index: 120;
  background-color: rgba(var(--bg-header-rgb, 245, 245, 245), 0.95);
  border-color: var(--border-primary-color, #22263b);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.results-content {
  display: flex;
  gap: 16px;
  width: 100%;
  overflow-y: auto;
  max-height: calc(100vh - 80px - 40px);
}

.translation-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  min-width: 0;
}

.text-block {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .text-content {
    border-radius: 6px;
    line-height: 1.6;
    min-height: 60px;
    white-space: pre-wrap;
    word-wrap: break-word;
    flex-grow: 1;
    color: var(--fg-secondary-color, #495057);

    &.container {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>

--- File: src/content-script/components/shared/hieroglyph-word/index.ts ---

// Public API

// Import
import { HieroglyphWord } from './ui'

// Export
export \* from './types'
export { HieroglyphWord }

--- File: src/content-script/components/shared/hieroglyph-word/store/index.ts ---

// import type {
// HieroglyphWordVariant,
// IHieroglyphWordState,
// } from '~/components/domain/hieroglyph-word/types'

//_ --- Store ----------------------------------------------- _//
// export const useHieroglyphWordStore = defineStore('hieroglyphWord', {
// state: (): IHieroglyphWordState => ({
// variant: Number(useCookie(HIEROGLYPH_WORD_VARIANT).value || '0') as HieroglyphWordVariant,
// }),

// actions: {
// setVariant(value: HieroglyphWordVariant) {
// useCookie(HIEROGLYPH_WORD_VARIANT, { sameSite: true }).value = `${value}`
// this.variant = value
// },
// },
// })

//_ --- Utils ----------------------------------------------- _//

--- File: src/content-script/components/shared/hieroglyph-word/types/index.ts ---

import type { HieroglyphWordVariant } from './props'

interface IHieroglyphWordState {
variant: HieroglyphWordVariant
}

export \* from './props'
export type {
IHieroglyphWordState,
}

--- File: src/content-script/components/shared/hieroglyph-word/types/props.ts ---

import type { PinyinTextProps } from '../../pinyin-text'

type HieroglyphWordVariant = 'compact' | 'expanded' | 'standard'

interface IHieroglyphWordVariousProps {
variant?: HieroglyphWordVariant
pinyin?: PinyinTextProps
translate?: string
glyph: string
}

export type {
HieroglyphWordVariant,
IHieroglyphWordVariousProps,
}

--- File: src/content-script/components/shared/hieroglyph-word/ui/index.scss ---

.variant-compact {
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
gap: 12px;
padding: 12px;
width: 100%;

.hw-glyph {
font-size: 1.3rem;
}
}
.variant-expanded {
display: inline-flex;
flex-direction: column;
gap: 0px;
width: 100%;
padding: 12px 0;
margin: 0 !important;

&.hw-none-pinyin,
&.hw-none-translate {
border: none;
}

.hw-pinyin {
text-align: center;
padding: 4px 12px;
font-size: 1rem;
}

.hw-glyph {
font-size: 1.3rem;
text-align: center;
border-radius: 0px;
border: none;
border-top: 1px solid var(--border-accent-color);
border-bottom: 1px solid var(--border-accent-color);
box-shadow: none;
}

.hw-translate {
text-align: center;
padding: 4px 12px;
line-height: 30px;
font-size: 0.95rem;
}
}
.variant-standard {
display: inline-flex;
padding: 12px;

.hw-glyph {
font-size: 2.1rem;
line-height: 64px;
border-radius: 10px;
min-width: 64px;
min-height: 64px;
text-align: center;
padding: 0 8px;
overflow: hidden;
display: flex;
align-items: center;
flex: 0 0 auto;
}
.hw-pinyin-translate {
padding-left: 12px;
display: flex;
flex-direction: column;
justify-content: center;
min-width: 0;

    .hw-pinyin {
      padding: 2px;
      padding-bottom: 4px;
    }
    .hw-translate {
      padding: 2px;
      border-top: 2px dashed var(--border-secondary-color);
      font-weight: 500;
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      min-width: 0;
    }

}
}

.hw-word {
font-size: 1rem;
margin: 4px 0;
margin-right: 8px;
display: inline-flex;
}
.hw-pinyin {
color: var(--fg-secondary-color, #495057);
font-weight: 400;
font-size: 1rem;
letter-spacing: 0.2px;
font-family: var(--font-family-cn);
font-weight: 500;
}
.hw-glyph {
letter-spacing: 2px;
font-weight: 500;
padding: 2px 4px;
border-radius: 5px;
background: var(--bg-accent-color);
box-shadow: inset 0 0 2px var(--border-accent-color);
color: var(--fg-primary-color, #333);
font-family: var(--font-family-cn);
}
.hw-translate {
color: var(--fg-primary-color, #333);
font-weight: 400;
font-size: 1rem;
letter-spacing: 0.2px;
}

--- File: src/content-script/components/shared/markdown-content/index.ts ---

export \* from './ui'

--- File: src/content-script/components/shared/markdown-content/lib/create-markdown-renderer.ts ---

import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItContainer from 'markdown-it-container'

export function createMarkdownRenderer() {
const md = new MarkdownIt({
html: true,
breaks: true,
linkify: true,
typographer: true,
})

md
.use(MarkdownItAttrs)
.use(MarkdownItContainer)

return md
}

--- File: src/content-script/components/shared/markdown-content/lib/index.ts ---

export \* from './create-markdown-renderer'

--- File: src/content-script/components/shared/markdown-content/ui/index.ts ---

import MarkdownContent from './markdown-content.vue'

export { MarkdownContent }

--- File: src/content-script/components/shared/markdown-content/ui/markdown-content.vue ---

<script setup lang="ts">
import { ref, watch } from 'vue'
import { createMarkdownRenderer } from '../lib'

interface Props {
  content: string
}

const props = defineProps<Props>()
const renderedContent = ref<string>('')
const md = createMarkdownRenderer()

watch(
  () => props.content,
  (newContent) => {
    renderedContent.value = md.render(newContent || '')
  },
  { immediate: true },
)
</script>

<template>
  <div class="markdown-body" v-html="renderedContent" />
</template>

<style lang="scss">
.markdown-body {
  color: var(--fg-primary-color, #333);
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
  line-height: 1.5;
  font-size: 15px;

  h2 {
    font-size: 1.1rem;
    border-bottom: 2px solid var(--border-secondary-color);
    margin-top: 0rem;
    font-weight: 500;
    margin-bottom: 12px;
    padding: 0.4rem;
    text-align: center;
    background-color: var(--bg-secondary-color, #f7f7f7);
    border-bottom: 2px solid var(--border-accent-color);
    border-top: 2px solid var(--border-accent-color);
  }

  p {
    margin-bottom: 0.8em;
  }

  a {
    color: var(--fg-accent-color);
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--fg-action-color);
    }
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ul,
  ol {
    margin-top: 0.4em;
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.3em;

    > p {
      margin-bottom: 0;
    }
  }

  ul {
    list-style-type: disc;
    ::marker {
      color: var(--fg-secondary-color, #495057);
    }
  }

  ol {
    list-style-type: disc;

    ::marker {
      color: var(--bg-overlay-secondary-color);
    }
    > li {
      color: var(--fg-secondary-color, #495057);
      position: relative;
      margin: 12px 0;

      @include mobile {
        margin: 4px 0;
      }

      ul {
        padding-right: 0;
      }

      > ul {
        &:first-of-type {
          padding-top: 0px;
          padding-bottom: 8px;
        }
      }

      > p {
        margin: 0;
      }
    }

    &::before {
      position: absolute;
      content: '';
      border-left: 1px solid var(--border-primary-color, #22263b);
      left: -12px;
      top: 0;
      margin-top: 30px;
      height: calc(100% - 35px);
      opacity: 0.5;
    }
  }

  ol {
    list-style-type: decimal;
    ::marker {
      color: var(--fg-secondary-color, #495057);
    }
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    padding-left: 1.2em;
  }

  code:not(pre > code) {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    background-color: var(--bg-secondary-color, #f7f7f7);
    color: var(--fg-primary-color, #333);
    padding: 0.15em 0.3em;
    margin: 0 0.1em;
    font-size: 0.85em;
    border-radius: 3px;
    white-space: nowrap;
  }

  pre {
    background: var(--bg-tertiary-color, #f3f3f3);
    color: var(--fg-primary-color, #333);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.875em;

    code {
      background: none;
      color: inherit;
      padding: 0;
      margin: 0;
      font-size: 1em;
      white-space: pre;
      word-wrap: normal;
    }
  }

  blockquote {
    border-left: 3px solid var(--border-accent-color);
    padding: 0.6em 1em;
    margin: 1em 0;
    color: var(--fg-secondary-color, #495057);
    background-color: var(--bg-secondary-color, #f7f7f7);

    p {
      margin-bottom: 0.4em;
      &:last-child {
        margin-bottom: 0;
      }
    }

    ol {
      color: var(--fg-secondary-color, #495057);
      font-size: 0.9rem;
    }
  }

  hr {
    border: 0;
    height: 1px;
    background-color: var(--border-secondary-color);
    margin: 1.8em 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3px;
    display: block;
    margin: 0.8em auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
    font-size: 0.9em;
  }

  th,
  td {
    border: 1px solid var(--border-secondary-color);
    padding: 0.4em 0.6em;
    text-align: left;
  }

  th {
    background-color: var(--bg-secondary-color, #f7f7f7);
    font-weight: 600;
    color: var(--fg-primary-color, #333);
  }

  details {
    margin: 1em 0;
    border: 1px solid var(--border-secondary-color);
    border-radius: 4px;
    background-color: var(--bg-secondary-color, #f7f7f7);

    summary {
      font-weight: 600;
      cursor: pointer;
      padding: 0.6em 0.8em;
      color: var(--fg-primary-color, #333);
      position: relative;

      &:focus-visible {
        outline: 2px solid var(--fg-accent-color);
        outline-offset: 1px;
      }
    }

    & > *:not(summary) {
      padding: 0 0.8em 0.8em 0.8em;
    }

    p:has(img) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 8px;
      margin-top: 0.8em;

      br {
        display: none;
      }

      img {
        object-fit: cover;
        min-height: 160px;
        height: 100%;
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        margin: 0;
      }
    }
  }
}
</style>

--- File: src/content-script/components/shared/pinyin-text/index.ts ---

/_ eslint-disable perfectionist/sort-exports _/
// Public API

// Import
import PinyinText from './ui/index.vue'

// Export
export type _ from './types'
export { PinyinText }
export _ from './lib'

--- File: src/content-script/components/shared/pinyin-text/lib/index.ts ---

export \* from './parse-pinyin'

--- File: src/content-script/components/shared/pinyin-text/lib/parse-pinyin.ts ---

import type { ToneType } from '../types'

interface PinyinSyllable {
syllable: string
tone: ToneType
position: number
}

/\*\*

- Преобразует строку пиньиня с цифровыми тонами в массив объектов
- @param pinyinString - строка пиньиня в формате "da3 dia4n hua4"
- @returns массив объектов, представляющих слоги с тоном и позицией
  \*/
  function parseStringPinyin(pinyinString: string): PinyinSyllable[] {
  const result: PinyinSyllable[] = []

const words = pinyinString.trim().split(' ')

for (const word of words) {
const toneMatch = word.match(/([1-5])/)

    if (toneMatch) {
      const tone = Number.parseInt(toneMatch[0], 10) as ToneType
      const position = word.indexOf(toneMatch[0]) - 1
      const syllable = word.replace(/[1-5]/, '')

      result.push({
        syllable,
        tone,
        position,
      })
    }
    else {
      result.push({
        syllable: word,
        tone: 5 as ToneType,
        position: 0,
      })
    }

}

return result
}

export { parseStringPinyin }

--- File: src/content-script/components/shared/pinyin-text/store/index.ts ---

// interface IPinyinTextState {
// isColored: boolean
// }

//_ --- Store ----------------------------------------------- _//
// export const usePinyinTextStore = defineStore('pinyinText', {
// state: (): IPinyinTextState => ({
// isColored: Boolean(useCookie(PINYIN_COLORED).value || 'true'),
// }),

// actions: {
// setIsColored(value: boolean) {
// useCookie(PINYIN_COLORED, { sameSite: true }).value = `${value}`
// this.isColored = value
// },
// },
// })

//_ --- Utils ----------------------------------------------- _//

--- File: src/content-script/components/shared/pinyin-text/types/index.ts ---

export \* from './props'

--- File: src/content-script/components/shared/pinyin-text/types/props.ts ---

type ToneType = 0 | 1 | 2 | 3 | 4

interface PinyinTextTone {
index: number
type: ToneType
}

interface PinyinTextProps {
pinyin: string
tone: PinyinTextTone[] | PinyinTextTone
colored?: boolean | null
}

export type {
PinyinTextProps,
PinyinTextTone,
ToneType,
}

--- File: src/content-script/components/shared/pinyin-text/ui/index.vue ---

<script lang="ts" setup>
import type { PinyinTextProps, ToneType } from '../types'
import { computed } from 'vue'
import { pinyinTone } from '../constant'

const props = withDefaults(defineProps<PinyinTextProps>(), {
  colored: null,
})

const isColored = computed(() => props.colored ?? true)
const tones = computed(() => Array.isArray(props.tone) ? props.tone : [props.tone])
const splitPinyin = computed(() => {
  const pinyin = props.pinyin.replaceAll(' ', '⠀')
  const parts: string[] = []
  let lastIndex = 0

  tones.value.forEach((tone) => {
    parts.push(
      pinyin.slice(lastIndex, tone.index),
      pinyin[tone.index],
    )
    lastIndex = tone.index + 1
  })

  parts.push(pinyin.slice(lastIndex))

  return parts
})

function color(toneType: ToneType) {
  return isColored.value
    ? `var(--fg-tone-${toneType}-color)`
    : ''
}
function isTone(index: number) {
  return index % 2
}
function getTone(index: number) {
  return tones.value[Math.floor(index / 2)]
}
</script>

<template>
  <span :key="`${isColored}`" class="pinyin">
    <span
      v-for="(part, index) in splitPinyin"
      :key="index"
      class="pinyin-part"
      :class="{ tone: isTone(index) }"
      :style="{ color: isTone(index) ? color(getTone(index).type) : '' }"
    >
      {{ part }}
      <span
        v-if="isTone(index)"
        class="pinyin-tone"
      >
        {{ pinyinTone[getTone(index).type] }}
      </span>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.pinyin {
  display: inline-flex;
  justify-content: center;

  &-part {
    &.tone {
      position: relative;
    }
  }
  &-tone {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 100%;
    width: 100%;
    font-weight: 600;
    font-family: var(--font-family-cn);
    font-size: inherit;
  }
}
</style>

--- File: src/content-script/main.ts ---

import { createApp, h } from 'vue'
import Overlay from './overlay.vue'

const MOUNT_EL_ID = 'chinisik-ocr-translator-overlay-root'

function init() {
const existingEl = document.getElementById(MOUNT_EL_ID)
if (existingEl) {
return
}

const mountEl = document.createElement('div')
mountEl.setAttribute('id', MOUNT_EL_ID)
document.body.appendChild(mountEl)

const app = createApp({
render: () => h(Overlay),
})
app.mount(mountEl)
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init)
}
else {
init()
}

--- File: src/content-script/overlay.vue ---

<script lang="ts" setup>
import type { AreaToCapture, RuntimeMessage, Theme, TranslationResult } from '../shared/types'
import type { ControlValues } from './components/modules/translate-result/ui/sections/control-menu.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { STORAGE_KEY_CONTROLS, STORAGE_KEY_THEME } from '~/shared/constant'
import { Selection } from './components/modules/selection'
import { TranslateLoading } from './components/modules/translate-loading'
import { TranslateResult } from './components/modules/translate-result'

type OverlayState = 'IDLE' | 'SELECTING' | 'LOADING' | 'RESULT' | 'ERROR'

const currentTheme = ref<Theme>('light')
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

onMounted(async () => {
  await loadAndApplyTheme()
  await loadControls()

  browser.storage.onChanged.addListener(storageChangeListener)
  browser.runtime.onMessage.addListener(messageListener as any)

  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  browser.storage.onChanged.removeListener(storageChangeListener)
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

--- File: src/manifest.json ---

{
"{{chrome}}.manifest_version": 3,
"{{firefox}}.manifest_version": 2,
"name": "Chinisik OCR Translator",
"version": "0.0.2",
"description": "Capture screen area and translate with AI",
"icons": {
"16": "icon/16.png",
"48": "icon/48.png",
"128": "icon/128.png"
},
"{{chrome}}.action": {
"default_popup": "src/popup/index.html"
},
"{{firefox}}.browser_action": {
"default_popup": "src/popup/index.html"
},
"background": {
"{{chrome}}.service_worker": "src/background/index.ts",
"{{firefox}}.scripts": [
"src/background/index.ts"
],
"{{firefox}}.persistent": false
},
"content_scripts": [
{
"matches": [
"*://*/*"
],
"js": [
"src/content-script/main.ts"
],
"css": [
"src/content-script/styles.css"
]
}
],
"permissions": [
"tabs",
"storage",
"{{firefox}}.<all_urls>",
"{{chrome}}.activeTab",
"{{firefox}}.activeTab"
],
"commands": {
"capture-area": {
"suggested_key": {
"default": "Ctrl+Shift+S"
},
"description": "Start area capture"
}
}
}

--- File: src/popup/main.ts ---

import { createApp } from 'vue'
import Popup from './popup.vue'
import '../assets/scss/main.scss'

createApp(Popup).mount('#app')

--- File: src/popup/popup.vue ---

<script setup lang="ts">
import type { AllProviderConfigs, ChinisikConfig, GeminiConfig } from '../shared/api/services/all/config'
import type { Theme } from '../shared/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '../shared/api/services/all/providers/chinisik/config'
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
    helpText: '',
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
const selectedTheme = ref<Theme>('light')
const showKey = ref(false)
const stats = reactive<{ today: number, total: number }>({ today: 0, total: 0 })
const extensionVersion = ref(browser.runtime.getManifest().version)
const isLoading = ref(true)

const themes: Theme[] = ['light', 'dark', 'rainy']

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
    ]) as {
      selectedProvider?: TranslationProvider
      providerSettings?: AllProviderConfigs
      appTheme?: Theme
    }

    const defaultSelectedProvider = TranslationProvider.Default
    const defaultProviderSettings: AllProviderConfigs = {
      [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
      [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
    }
    const defaultTheme: Theme = 'light'

    selectedProvider.value = result.selectedProvider || defaultSelectedProvider

    const loadedProviderSettings = result.providerSettings || {}
    for (const providerIdStr in defaultProviderSettings) {
      const pId = providerIdStr as TranslationProvider
      providerSettingsForm[pId] = {
        ...defaultProviderSettings[pId],
        ...(loadedProviderSettings[pId] || {}),
      }
    }

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

const currentProviderUI = computed(() => {
  return providerDefinitions.find(p => p.id === selectedProvider.value)
})

const currentFormData = computed(() => {
  return providerSettingsForm[selectedProvider.value]
})

const currentThemeIcon = computed(() => {
  switch (selectedTheme.value) {
    case 'light': return 'ph:sun-bold'
    case 'dark': return 'ph:moon-bold'
    case 'rainy': return 'ph:cloud-rain-bold'
    default: return 'ph:sun-bold'
  }
})

const currentThemeTitle = computed(() => {
  switch (selectedTheme.value) {
    case 'light': return 'Светлая тема'
    case 'dark': return 'Темная тема'
    case 'rainy': return 'Тема "Дождь"'
    default: return 'Светлая тема'
  }
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
        <h2>🔍 Chinisik OCR Переводчик</h2>
        <button
          class="theme-toggle-btn"
          :title="`Сменить тему (текущая: ${currentThemeTitle})`"
          @click="toggleTheme"
        >
          <Icon :icon="currentThemeIcon" />
        </button>
      </div>
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
  font-family: var(
    --font-family-base-default,
    'SFMono-Regular',
    Consolas,
    'Liberation Mono',
    Menlo,
    Courier,
    monospace
  );
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
</style>

--- File: src/shared/api/index.ts ---

export \* from './services'

--- File: src/shared/api/services/all/config.ts ---

import type { TranslationProvider } from '../../../types'

// Базовая конфигурация, общая для всех
export interface BaseProviderConfig {
apiKey?: string
apiUrl?: string
// другие общие опциональные параметры
}

// Специфичные конфигурации для каждого провайдера
export interface ChinisikConfig extends BaseProviderConfig {
apiKey: string // У Chinisik ключ обязателен
apiUrl: string // У Chinisik URL тоже важен, может иметь дефолт
}

export interface GeminiConfig extends BaseProviderConfig {
apiKey: string
model?: string // Например, 'gemini-pro-vision'
}

export interface OllamaConfig extends BaseProviderConfig {
apiUrl: string // У Ollama обычно только URL и модель
model?: string
keepAlive?: string // Специфичный параметр Ollama
}

// Тип для хранения всех конфигураций в browser.storage.sync
export interface AllProviderConfigs {
[TranslationProvider.Default]?: Partial<ChinisikConfig>
[TranslationProvider.Gemini]?: Partial<GeminiConfig>
// [TranslationProvider.OLLAMA]?: Partial<OllamaConfig>
}

// Пример структуры в storage:
// {
// selectedProvider: 'chinisik',
// providerSettings: {
// chinisik: { apiKey: 'xxx', apiUrl: 'https://...' },
// gemini: { apiKey: 'yyy' },
// ollama: { apiUrl: 'http://localhost:11434' }
// }
// }

--- File: src/shared/api/services/all/index.ts ---

export \* from './translate-service'

--- File: src/shared/api/services/all/provider-factory.ts ---

import type { ITranslationProvider } from './types'
import { TranslationProvider } from '../../../types'
import { ChinisikProvider } from './providers/chinisik/provider'
// import { GeminiProvider } from './providers/gemini/GeminiProvider'; // Когда будет готово
// import { OllamaProvider } from './providers/ollama/OllamaProvider'; // Когда будет готово

// Реестр конструкторов провайдеров
const providerMap: Record<TranslationProvider, (new () => ITranslationProvider) | undefined> = {
[TranslationProvider.Default]: ChinisikProvider,
[TranslationProvider.Gemini]: undefined,
// [TranslationProvider.OLLAMA]: OllamaProvider,
}

export function getTranslationProvider(providerId: TranslationProvider): ITranslationProvider {
const ProviderClass = providerMap[providerId]

if (!ProviderClass) {
console.warn(`Unsupported translation provider: ${providerId}. Falling back to Chinisik.`)
return new ChinisikProvider()
}
return new ProviderClass()
}

--- File: src/shared/api/services/all/providers/chinisik/config.ts ---

export const CHINISIK_DEFAULT_API_URL = 'https://api.kvakushnik.ru/api/v1'

--- File: src/shared/api/services/all/providers/chinisik/provider.ts ---

import type { BaseProviderConfig, ChinisikConfig } from '../../config'
import type { ITranslationProvider, LexicalAnalysisRequestParams, LexicalAnalysisResult, TranslateRequestParams } from '../../types'
import type { TranslationResult } from '~/shared/types'
import { $fetch, FetchError } from 'ofetch'
import { dataURLtoBlob } from '../../../../../utils/helpers'
import { CHINISIK_DEFAULT_API_URL } from './config'

export class ChinisikProvider implements ITranslationProvider {
public async translate(
params: TranslateRequestParams,
baseConfig: BaseProviderConfig,
): Promise<TranslationResult> {
const chinisikSpecificConfig: ChinisikConfig = {
apiKey: baseConfig.apiKey || '',
apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
}

    const { imageDataUrl } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    const blob = dataURLtoBlob(imageDataUrl)
    const formData = new FormData()
    formData.append('image', blob, 'screenshot.png')

    try {
      const data = await $fetch<TranslationResult>(`${apiUrl}/llvm/image-to-text-translate`, {
        method: 'POST',
        headers: { Authorization: apiKey },
        body: formData,
      })

      if (data === undefined) {
        throw new Error('Could not extract translation from Chinisik API response.')
      }

      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API translation error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API Translation Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (translate):', error)
      throw new Error('Unknown error during Chinisik API translation request')
    }

}

// Новый метод для лексического анализа
public async analyzeLexically(
params: LexicalAnalysisRequestParams,
baseConfig: BaseProviderConfig,
): Promise<LexicalAnalysisResult> {
const chinisikSpecificConfig: ChinisikConfig = {
apiKey: baseConfig.apiKey || '',
apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
}

    const { system, user } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    const lexicalAnalysisEndpoint = `${apiUrl}/llvm/raw`

    try {
      const data = await $fetch<LexicalAnalysisResult>(lexicalAnalysisEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: {
          system,
          user,
        },
      })

      if (data === undefined) {
        throw new Error('Could not extract lexical analysis from Chinisik API response.')
      }
      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API lexical analysis error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API Lexical Analysis Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (analyzeLexically):', error)
      throw new Error('Unknown error during Chinisik API lexical analysis request')
    }

}
}

--- File: src/shared/api/services/all/translate-service.ts ---

import type { TranslationResult } from '../../../types'
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, GeminiConfig } from './config'
import type { LexicalAnalysisRequestParams, LexicalAnalysisResult, TranslateRequestParams } from './types'
import browser from 'webextension-polyfill'
import { lexicalAnalysisPrompt } from '~/shared/constant'
import { TranslationProvider } from '../../../types'
import { getTranslationProvider } from './provider-factory'
import { CHINISIK_DEFAULT_API_URL } from './providers/chinisik/config'

export async function getProviderSettings(providerId: TranslationProvider): Promise<BaseProviderConfig> {
const storage = await browser.storage.sync.get('providerSettings')
const allSettings = (storage.providerSettings || {}) as AllProviderConfigs

switch (providerId) {
case TranslationProvider.Default: // Chinisik
return {
apiKey: allSettings.chinisik?.apiKey || '', // Убедитесь, что ключ по умолчанию или обработка его отсутствия корректна
apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
} as ChinisikConfig
case TranslationProvider.Gemini:
return {
apiKey: allSettings.gemini?.apiKey || '',
model: allSettings.gemini?.model || 'gemini-pro-vision',
} as GeminiConfig
// ... другие провайдеры
default:
console.warn(`Configuration not defined for provider: ${providerId}, falling back to Chinisik defaults for settings.`)
return { // Фолбэк на случай неизвестного провайдера, хотя фабрика должна вернуть ChinisikProvider
apiKey: allSettings.chinisik?.apiKey || '',
apiUrl: allSettings.chinisik?.apiUrl || CHINISIK_DEFAULT_API_URL,
} as ChinisikConfig
}
}

export async function performTranslate(imageDataUrl: string): Promise<TranslationResult> {
const { selectedProvider } = await browser.storage.sync.get({
selectedProvider: TranslationProvider.Default,
})
const currentProviderId = selectedProvider as TranslationProvider
const providerConfig = await getProviderSettings(currentProviderId)
const translator = getTranslationProvider(currentProviderId)

const requestParams: TranslateRequestParams = { imageDataUrl }

try {
const result = await translator.translate(requestParams, providerConfig)
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

export async function performLexicalAnalysisService(sentence: string): Promise<LexicalAnalysisResult> {
const { selectedProvider } = await browser.storage.sync.get({
selectedProvider: TranslationProvider.Default,
})
const currentProviderId = selectedProvider as TranslationProvider
const providerConfig = await getProviderSettings(currentProviderId)
const providerInstance = getTranslationProvider(currentProviderId)

if (!providerInstance.analyzeLexically) {
throw new Error(`Lexical analysis is not supported by the current provider: ${currentProviderId}.`)
}

const requestParams: LexicalAnalysisRequestParams = {
user: sentence,
system: lexicalAnalysisPrompt,
}

try {
const result = await providerInstance.analyzeLexically(requestParams, providerConfig)
return result
}
catch (error) {
console.error(`Error during lexical analysis with ${currentProviderId}:`, error)
if (error instanceof Error) {
throw new TypeError(`Lexical analysis failed with ${currentProviderId}: ${error.message}`)
}
throw new Error(`An unknown error occurred during lexical analysis with ${currentProviderId}.`)
}
}

--- File: src/shared/api/services/all/types.ts ---

import type { BaseProviderConfig } from './config'
import type { TranslationResult } from '~/shared/types'

export interface LexicalAnalysisRequestParams {
user: string
system: string
}

export type LexicalAnalysisResult = string

export interface TranslateRequestParams {
imageDataUrl: string
targetLanguage?: string
}

export interface ITranslationProvider {
/\*\*

- Переводит изображение.
- @param params Параметры запроса, включая imageDataUrl.
- @param config Конфигурация для данного провайдера (API ключ, URL и т.д.).
- @returns Promise с результатом перевода.
  \*/
  translate: (params: TranslateRequestParams, config: BaseProviderConfig) => Promise<TranslationResult>

  analyzeLexically: (params: LexicalAnalysisRequestParams, config: BaseProviderConfig) => Promise<LexicalAnalysisResult>
  }

--- File: src/shared/api/services/index.ts ---

export \* from './all'

--- File: src/shared/composables/index.ts ---

export \* from './render'

--- File: src/shared/composables/render.ts ---

import type { VNode } from 'vue'
import { getCurrentInstance } from 'vue'

export function getCurrentInst(name: string, message?: string) {
const vm = getCurrentInstance()

if (!vm)
throw new Error(`[Lib] ${name} ${message || 'must be called from inside a setup function'}`)

return vm
}

export function useRender(render: () => VNode): void {
const vm = getCurrentInst('useRender') as any
vm.render = render
}

--- File: src/shared/types/common.ts ---

type Theme = 'light' | 'dark' | 'rainy'

interface AreaToCapture {
x: number
y: number
width: number
height: number
}

enum TranslationProvider {
Default = 'chinisik',
Gemini = 'gemini',
}

interface TranslationResult {
source: string
translate: string
transcription: string
}

interface TranslationResultData extends TranslationResult {
croppedImage: string
}

export {
AreaToCapture,
Theme,
TranslationProvider,
TranslationResult,
TranslationResultData,
}

--- File: src/shared/types/index.ts ---

export _ from './common'
export _ from './messaging'

--- File: src/shared/types/messaging.ts ---

import type browser from 'webextension-polyfill'
import type { AreaToCapture, TranslationResultData } from './common'

export interface BaseMessage {
action: string
}

export interface CaptureAreaMessage extends BaseMessage {
action: 'captureAndTranslate'
area: AreaToCapture
targetLanguage?: string
}

export interface StartSelectionMessage extends BaseMessage {
action: 'startSelection'
}

export interface ShowTranslationMessage extends BaseMessage {
action: 'showTranslation'
data: TranslationResultData
}

export interface ShowErrorMessage extends BaseMessage {
action: 'showError'
error: string
}

export interface GetLexicalAnalysisMessage extends BaseMessage {
action: 'getLexicalAnalysis'
sentence: string
}

export type RuntimeMessage =
| CaptureAreaMessage
| StartSelectionMessage
| ShowTranslationMessage
| ShowErrorMessage
| GetLexicalAnalysisMessage

export type MessageSender = browser.Runtime.MessageSender

export interface CaptureAndTranslateResponse {
success?: boolean
translation?: string
error?: string
}

--- File: src/shared/utils/helpers.ts ---

import type { CaptureAreaMessage } from '../types'

async function cropImage(
imageDataUrl: string,
cropX: number,
cropY: number,
cropWidth: number,
cropHeight: number,
): Promise<string> {
try {
// 1. Получаем Blob из Data URL
// Data URL имеет формат "data:[<mediatype>][;base64],<data>"
// Нам нужно отделить сам base64-контент
const base64Response = await fetch(imageDataUrl)
const imageBlob = await base64Response.blob()

    // 2. Создаем ImageBitmap из Blob
    // createImageBitmap доступен в global scope воркеров и фоновых скриптах расширений.
    const imageBitmap = await createImageBitmap(imageBlob)

    // 3. Создаем OffscreenCanvas
    // Проверка на существование OffscreenCanvas, хотя в современных Firefox он должен быть
    if (typeof OffscreenCanvas === 'undefined') {
      console.error('OffscreenCanvas is not supported in this environment. Attempting fallback or erroring.')
      // Здесь можно было бы реализовать передачу на content_script, но это усложнит код.
      // Для простоты пока выбросим ошибку.
      throw new Error('OffscreenCanvas is not supported.')
    }
    const canvas = new OffscreenCanvas(cropWidth, cropHeight)
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('Could not get 2D context from OffscreenCanvas')
    }

    // 4. Рисуем обрезанную часть ImageBitmap на OffscreenCanvas
    // sX, sY, sWidth, sHeight - область источника (исходное изображение imageBitmap)
    // dX, dY, dWidth, dHeight - область назначения (на canvas)
    ctx.drawImage(
      imageBitmap,
      cropX, // Координата X начала вырезаемой области на исходном изображении
      cropY, // Координата Y начала вырезаемой области на исходном изображении
      cropWidth, // Ширина вырезаемой области на исходном изображении
      cropHeight, // Высота вырезаемой области на исходном изображении
      0, // Координата X для отрисовки на целевом canvas (начинаем с 0,0)
      0, // Координата Y для отрисовки на целевом canvas
      cropWidth, // Ширина отрисовки на целевом canvas
      cropHeight, // Высота отрисовки на целевом canvas
    )

    // 5. Получаем Blob из OffscreenCanvas, затем конвертируем в Data URL
    // OffscreenCanvas.convertToBlob() является предпочтительным асинхронным методом.
    const resultBlob = await canvas.convertToBlob({ type: 'image/png' })
    if (!resultBlob) {
      throw new Error('Failed to convert OffscreenCanvas to Blob.')
    }

    // Конвертируем Blob обратно в Data URL
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader() // FileReader доступен в фоновых скриптах
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        }
        else {
          reject(new Error('Failed to read blob as Data URL.'))
        }
      }
      reader.onerror = (error) => {
        console.error('FileReader error:', error)
        reject(new Error('FileReader failed to read blob.'))
      }
      reader.readAsDataURL(resultBlob)
    })

}
catch (error) {
console.error('Error in cropImage with OffscreenCanvas:', error)
// Пробрасываем ошибку дальше, чтобы она была обработана в вызывающем коде onMessage
throw error
}
}

function dataURLtoBlob(dataurl: string): Blob {
const arr = dataurl.split(',')
if (arr.length < 2) {
throw new Error('Invalid data URL format for blob conversion')
}
const mimeMatch = arr[0].match(/:(.\*?);/)
if (!mimeMatch || mimeMatch.length < 2) {
throw new Error('Could not parse MIME type from data URL')
}
const mime = mimeMatch[1]
const bstr = atob(arr[1])
let n = bstr.length
const u8arr = new Uint8Array(n)
while (n--) {
u8arr[n] = bstr.charCodeAt(n)
}
return new Blob([u8arr], { type: mime })
}

function isCaptureAreaMessage(message: any): message is CaptureAreaMessage {
return message
&& typeof message === 'object'
&& message.action === 'captureAndTranslate'
&& typeof message.area === 'object'
&& typeof message.area.x === 'number'
&& typeof message.area.y === 'number'
&& typeof message.area.width === 'number'
&& typeof message.area.height === 'number'
}

export { cropImage, dataURLtoBlob, isCaptureAreaMessage }

--- File: src/shared/utils/initialize-storage-defaults.ts ---

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
// [TranslationProvider.OLLAMA]: {
// apiUrl: 'http://localhost:11434/api/generate', // Дефолтный локальный URL
// model: 'llava',
// keepAlive: '5m',
// },
},
appTheme: 'light',
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

--- File: src/shims-vue.d.ts ---

declare module '\*.vue' {
import type { defineComponent } from 'vue'

const Component: ReturnType<typeof defineComponent>
export default Component
}

--- File: tsconfig.json ---

{
"compilerOptions": {
"target": "ESNext",
"jsx": "preserve",
"jsxImportSource": "vue",
"lib": [
"ESNext",
"DOM"
],
"module": "ESNext",
"moduleResolution": "Node",
"paths": {
"~/_": [
"./src/_"
]
},
"resolveJsonModule": true,
"types": [
"vite/client"
],
"strict": true,
"noEmit": true,
"sourceMap": true,
"esModuleInterop": true,
"skipLibCheck": true
}
}

--- File: vite.config.ts ---

import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import browserExtension from 'vite-plugin-web-extension'

function root(...paths: string[]): string {
return path.resolve(\_\_dirname, ...paths)
}

export default defineConfig({
build: {
outDir: root('dist'),
emptyOutDir: true,
},
plugins: [
vue(),
vueJsx({
optimize: true,
enableObjectSlots: true,
}),
browserExtension({
manifest: 'src/manifest.json',
browser: 'chrome',
watchFilePaths: ['src/**/*'],
}),
],
resolve: {
alias: {
'~': path.resolve(\_\_dirname, 'src'),
},
},
css: {
preprocessorOptions: {
scss: {
additionalData: `             @import '~/assets/scss/_setup.scss';
        `,
logger: {
warn(message: any, options: any) {
// eslint-disable-next-line node/prefer-global/process
const { stderr } = process
const span = options.span ?? undefined
const stack = (options.stack === 'null' ? undefined : options.stack) ?? undefined

            const isExludedError = JSON.stringify(span.text).includes('assets/scss/_setup.scss')
            if (isExludedError)
              return

            if (options.deprecation) {
              if (message?.startsWith('Using / for division outside of calc() is deprecated')) {
                // silences above deprecation warning
                return
              }
              stderr.write('DEPRECATION ')
            }
            stderr.write(`WARNING: ${message}\n`)

            if (span !== undefined) {
              // output the snippet that is causing this warning
              stderr.write(`\n"${span.text}"\n`)
            }

            if (stack !== undefined) {
              // indent each line of the stack
              stderr.write(`    ${stack.toString().trimEnd().replace(/\n/g, '\n    ')}\n`)
            }

            stderr.write('\n')
          },
        },
        api: 'modern-compiler',
      },
    },

},
})

=====================
