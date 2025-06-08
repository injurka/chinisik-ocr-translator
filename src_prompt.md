== Project Prompt ==
Generated: 2025-06-08T13:30:13.016Z
Source Directory: /home/evai/my/chinisik-root/chinisik-ocr-translator
Included Files: 64
Total Size: 141.53 KB
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
│ │ │ │ │ │ ├── lexical-analysis-modal.vue
│ │ │ │ │ │ └── question-answer-modal.vue
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── translate-result.vue
│ │ │ │ └── index.ts
│ │ │ └── shared
│ │ │ ├── hieroglyph-word
│ │ │ │ ├── composables
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── use-inline-translation.ts
│ │ │ │ ├── store
│ │ │ │ │ └── index.ts
│ │ │ │ ├── types
│ │ │ │ │ ├── index.ts
│ │ │ │ │ └── props.ts
│ │ │ │ ├── ui
│ │ │ │ │ ├── index.scss
│ │ │ │ │ └── inline-translation-tooltip.vue
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
│ │ ├── fullscreen-translate.ts
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
- package.json (2.14 KB)
- src/background/index.ts (7.28 KB)
- src/content-script/components/modules/selection/composables/index.ts (0.03 KB)
- src/content-script/components/modules/selection/composables/use-selection.ts (3.53 KB)
- src/content-script/components/modules/selection/index.ts (0.02 KB)
- src/content-script/components/modules/selection/ui/index.ts (0.06 KB)
- src/content-script/components/modules/selection/ui/sections/selection-box.vue (0.23 KB)
- src/content-script/components/modules/selection/ui/sections/tooltip.vue (0.57 KB)
- src/content-script/components/modules/selection/ui/selection.vue (1.39 KB)
- src/content-script/components/modules/translate-loading/index.ts (0.02 KB)
- src/content-script/components/modules/translate-loading/ui/index.ts (0.08 KB)
- src/content-script/components/modules/translate-loading/ui/translate-loading.vue (3.12 KB)
- src/content-script/components/modules/translate-result/index.ts (0.02 KB)
- src/content-script/components/modules/translate-result/ui/index.ts (0.08 KB)
- src/content-script/components/modules/translate-result/ui/sections/control-menu.vue (4.10 KB)
- src/content-script/components/modules/translate-result/ui/sections/lexical-analysis-modal.vue (4.36 KB)
- src/content-script/components/modules/translate-result/ui/sections/question-answer-modal.vue (7.45 KB)
- src/content-script/components/modules/translate-result/ui/translate-result.vue (13.50 KB)
- src/content-script/components/shared/hieroglyph-word/composables/index.ts (0.04 KB)
- src/content-script/components/shared/hieroglyph-word/composables/use-inline-translation.ts (5.70 KB)
- src/content-script/components/shared/hieroglyph-word/index.ts (0.12 KB)
- src/content-script/components/shared/hieroglyph-word/store/index.ts (0.67 KB)
- src/content-script/components/shared/hieroglyph-word/types/index.ts (0.18 KB)
- src/content-script/components/shared/hieroglyph-word/types/props.ts (0.33 KB)
- src/content-script/components/shared/hieroglyph-word/ui/index.scss (3.14 KB)
- src/content-script/components/shared/hieroglyph-word/ui/inline-translation-tooltip.vue (2.37 KB)
- src/content-script/components/shared/markdown-content/index.ts (0.02 KB)
- src/content-script/components/shared/markdown-content/lib/create-markdown-renderer.ts (0.36 KB)
- src/content-script/components/shared/markdown-content/lib/index.ts (0.04 KB)
- src/content-script/components/shared/markdown-content/ui/index.ts (0.08 KB)
- src/content-script/components/shared/markdown-content/ui/markdown-content.vue (5.27 KB)
- src/content-script/components/shared/pinyin-text/index.ts (0.19 KB)
- src/content-script/components/shared/pinyin-text/lib/index.ts (0.03 KB)
- src/content-script/components/shared/pinyin-text/lib/parse-pinyin.ts (1.11 KB)
- src/content-script/components/shared/pinyin-text/store/index.ts (0.55 KB)
- src/content-script/components/shared/pinyin-text/types/index.ts (0.02 KB)
- src/content-script/components/shared/pinyin-text/types/props.ts (0.27 KB)
- src/content-script/components/shared/pinyin-text/ui/index.vue (1.82 KB)
- src/content-script/main.ts (0.56 KB)
- src/content-script/overlay.vue (12.66 KB)
- src/manifest.json (1.76 KB)
- src/popup/main.ts (0.13 KB)
- src/popup/popup.vue (16.55 KB)
- src/shared/api/index.ts (0.03 KB)
- src/shared/api/services/all/config.ts (1.49 KB)
- src/shared/api/services/all/index.ts (0.04 KB)
- src/shared/api/services/all/provider-factory.ts (1.01 KB)
- src/shared/api/services/all/providers/chinisik/config.ts (0.07 KB)
- src/shared/api/services/all/providers/chinisik/provider.ts (11.65 KB)
- src/shared/api/services/all/translate-service.ts (7.47 KB)
- src/shared/api/services/all/types.ts (2.10 KB)
- src/shared/api/services/index.ts (0.02 KB)
- src/shared/composables/index.ts (0.02 KB)
- src/shared/composables/render.ts (0.42 KB)
- src/shared/types/common.ts (0.66 KB)
- src/shared/types/index.ts (0.05 KB)
- src/shared/types/messaging.ts (1.66 KB)
- src/shared/utils/fullscreen-translate.ts (2.53 KB)
- src/shared/utils/helpers.ts (4.95 KB)
- src/shared/utils/initialize-storage-defaults.ts (2.31 KB)
- src/shims-vue.d.ts (0.15 KB)
- tsconfig.json (0.59 KB)
- # vite.config.ts (2.13 KB)

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
"version": "0.0.5",
"description": "Browser extension for OCR chinese translation ",
"scripts": {
"dev": "vite",
"dev:firefox": "TARGET=firefox vite",
"clean": "rm -rf dist chrome-_.zip firefox-_.zip",
"build": "run-s clean build:_",
"build:chrome": "TARGET=chrome vite build",
"build:firefox": "TARGET=firefox vite build",
"zip": "run-s zip:_",
"zip:chrome": "bun run build/zip.ts chrome",
"zip:firefox": "bun run build/zip.ts firefox",
"package": "run-s build zip",
"package:chrome": "run-s build:chrome zip:chrome",
"package:firefox": "run-s build:firefox zip:firefox",
"--------------------------------------------------------------------------------": "",
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"typecheck": "vue-tsc --noEmit",
"----------------------------------------------------------------------------------": "",
"postinstall": "simple-git-hooks"
},
"dependencies": {
"@google/generative-ai": "^0.24.1",
"markdown-it": "^14.1.0",
"markdown-it-attrs": "^4.3.1",
"markdown-it-container": "^4.0.0",
"ofetch": "^1.4.1",
"vue": "^3.5.16",
"webextension-polyfill": "^0.12.0"
},
"devDependencies": {
"@antfu/eslint-config": "4.13.3",
"@iconify/vue": "^5.0.0",
"@types/markdown-it": "^14.1.2",
"@types/markdown-it-attrs": "^4.1.3",
"@types/markdown-it-container": "^2.0.10",
"@types/node": "^22.15.29",
"@types/webextension-polyfill": "^0.12.3",
"@vitejs/plugin-vue": "^5.2.4",
"@vitejs/plugin-vue-jsx": "^4.2.0",
"@vue/compiler-sfc": "^3.5",
"eslint": "9.28.0",
"eslint-plugin-format": "1.0.1",
"jiti": "^2.4.2",
"npm-run-all2": "^8.0.4",
"sass": "1.80.6",
"simple-git-hooks": "2.13.0",
"typescript": "^5.8.3",
"vite": "^6.3.5",
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

import type { GenericLlmRawQueryMessage, GetLexicalAnalysisMessage, MessageSender, RuntimeMessage, ShowErrorMessage, ShowTranslationMessage, TextToSpeechMessage, TranslateFullScreenMessage, TranslateInlineTextMessage } from '../shared/types/messaging'
import browser from 'webextension-polyfill'
import { translateMinimalPrompt } from '~/shared/constant'
import { performAnalyzeLexically, performLexicalAnalysisService, performTextToSpeechService, performTranslate } from '../shared/api'
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
else if (command === 'translate-fullscreen') {
const tabs = await browser.tabs.query({ active: true, currentWindow: true })
if (tabs[0] && tabs[0].id) {
try {
const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
if (!imageDataUrl) {
throw new Error('Failed to capture visible tab for full screen OCR.')
}
const message: TranslateFullScreenMessage = { action: 'translateFullScreen', imageDataUrl }
await browser.tabs.sendMessage(tabs[0].id, message)
}
catch (error) {
console.error('Failed to send \'ocrAndTranslateFullScreen\' message or capture screen.', error)
}
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
    else if (request.action === 'textToSpeech') {
      const ttsMessage = request as TextToSpeechMessage
      if (!ttsMessage.text) {
        console.error('Text is missing for text-to-speech.')
        return { error: 'Text is missing for text-to-speech.' }
      }
      try {
        const audioBlob = await performTextToSpeechService(ttsMessage.text)

        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            if (typeof reader.result === 'string') {
              resolve(reader.result)
            }
            else {
              reject(new Error('Failed to read blob as Data URL in background.'))
            }
          }
          reader.onerror = (error) => {
            console.error('FileReader error in background:', error)
            reject(new Error('FileReader failed to read blob in background.'))
          }
          reader.readAsDataURL(audioBlob)
        })

        return { audioDataUrl: dataUrl }
      }
      catch (error: any) {
        console.error('Error in background performing text-to-speech:', error)
        return { error: error.message || 'Unknown error during text-to-speech.' }
      }
    }
    else if (request.action === 'genericLlmRawQuery') {
      const llmQueryMessage = request as GenericLlmRawQueryMessage
      if (!llmQueryMessage.userPrompt || !llmQueryMessage.systemPrompt) {
        console.error('User prompt or system prompt is missing for generic LLM query.')
        return { error: 'User prompt or system prompt is missing.' }
      }
      try {
        const result = await performAnalyzeLexically(llmQueryMessage.userPrompt, llmQueryMessage.systemPrompt)
        return { data: result }
      }
      catch (error: any) {
        console.error('Error in background performing generic LLM query:', error)
        return { error: error.message || 'Unknown error during generic LLM query.' }
      }
    }
    else if (request.action === 'translateInlineText') {
      const msg = request as TranslateInlineTextMessage

      if (!msg.text) {
        console.error('Text is missing for inline translation.')

        return { error: 'Text is missing for inline translation.' }
      }
      try {
        const result = await performAnalyzeLexically(msg.text, translateMinimalPrompt())

        return { data: result }
      }
      catch (error: any) {
        console.error('Error in background performing inline translation:', error)

        return { error: error.message || 'Unknown error during inline translation.' }
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
  font-size: 0.75em;
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
  border-bottom: 1px solid var(--border-secondary-color, #e7e7e7);

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
  font-size: 0.85em;
  font-weight: 500;
  color: var(--fg-secondary-color, #495057);
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
    font-size: 1.125em;

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
  font-size: 0.9em;

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
    font-size: 1em;
    font-weight: 400;
    color: var(--fg-primary-color, #212529);
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 1.375em;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #495057);
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
  font-size: 0.95em;

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

--- File: src/content-script/components/modules/translate-result/ui/sections/question-answer-modal.vue ---

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { MarkdownContent } from '../../../../shared/markdown-content'

interface Props {
  answerData: string | null
  isLoading: boolean
  error?: string | null
}
const props = defineProps<Props>()
const emit = defineEmits(['close', 'submitQuestion'])

const questionText = ref('')

function closeModal() {
  emit('close')
}

function submit() {
  if (questionText.value.trim()) {
    emit('submitQuestion', questionText.value.trim())
  }
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
        <div class="chinisik-modal-content question-answer-modal">
          <div class="chinisik-modal-header">
            <h3>Задать вопрос по тексту</h3>
            <button title="Закрыть (Esc)" class="close-btn-header" @click="closeModal">
              <Icon icon="mdi:close" />
            </button>
          </div>
          <div class="chinisik-modal-body">
            <div class="question-input-area">
              <textarea
                v-model="questionText"
                placeholder="Введите ваш вопрос здесь..."
                rows="3"
                :disabled="props.isLoading"
              />
              <button
                class="submit-question-btn"
                :disabled="props.isLoading || !questionText.trim()"
                @click="submit"
              >
                <Icon v-if="props.isLoading && !props.answerData && !props.error" icon="mdi:loading" class="animate-spin" />
                <Icon v-else icon="mdi:send" />
                Спросить
              </button>
            </div>

            <div v-if="props.isLoading && !props.answerData && !props.error" class="loader-container">
              <div class="loader" />
              <p>Получение ответа...</p>
            </div>
            <div v-else-if="props.error" class="error-message">
              <p><strong>Ошибка:</strong> {{ props.error }}</p>
            </div>
            <div v-else-if="props.answerData" class="answer-display">
              <MarkdownContent :content="props.answerData" />
            </div>
            <div v-else-if="!props.isLoading && !questionText.trim() && !props.answerData && !props.error" class="placeholder-text">
              <p>Ответ на ваш вопрос появится здесь.</p>
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
    font-size: 1em;
    font-weight: 500;
    color: var(--fg-primary-color, #212529);
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 1.375em;
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #495057);
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
  font-size: 0.95em;

  .question-input-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    textarea {
      width: 100%;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid var(--border-secondary-color, #ced4da);
      font-family: inherit;
      font-size: 0.95em;
      resize: vertical;
      min-height: 70px;
      background-color: var(--bg-primary-color, #fff);
      color: var(--fg-primary-color, #333);

      &:focus {
        outline: none;
        border-color: var(--border-accent-color, #80bdff);
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
      &:disabled {
        background-color: var(--bg-disabled-color, #e9ecef);
        cursor: not-allowed;
      }
    }

    .submit-question-btn {
      align-self: flex-end;
      padding: 8px 15px;
      background-color: var(--fg-accent-color, #007bff);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9em;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.2s;

      &:hover:not(:disabled) {
        background-color: var(--fg-action-hover-color, #0056b3);
      }

      &:disabled {
        background-color: var(--bg-disabled-color, #adb5bd);
        cursor: not-allowed;
      }
      .animate-spin {
        animation: chinisik-spin 0.8s linear infinite;
      }
      svg {
        width: 1.1em;
        height: 1.1em;
      }
    }
  }

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

  .error-message {
    padding: 10px;
    background-color: var(--bg-error-secondary-color, #f8d7da);
    color: var(--fg-error-color, #721c24);
    border: 1px solid var(--border-error-color, #f5c6cb);
    border-radius: 6px;
    p {
      margin: 0;
    }
  }

  .answer-display {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--border-secondary-color, #e9ecef);
  }

  .placeholder-text {
    text-align: center;
    color: var(--fg-tertiary-color, #6c757d);
    padding: 20px 0;
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
import type { GenericLlmRawQueryMessage, TranslationResult as TranslationDataType } from '../../../../../shared/types'
import type { ControlValues } from './sections/control-menu.vue'
import type { LexicalAnalysisResult } from '~/shared/api/services/all/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import browser from 'webextension-polyfill'
import { questionPrompt } from '~/shared/constant'
import { dataURLtoBlob } from '~/shared/utils/helpers'
import { HieroglyphWord } from '../../../shared/hieroglyph-word'
import ControlMenu from './sections/control-menu.vue'
import LexicalAnalysisModal from './sections/lexical-analysis-modal.vue'
import QuestionAnswerModal from './sections/question-answer-modal.vue'

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

// --- Состояние для аудио ---
const audioPlayer = ref<HTMLAudioElement | null>(null)
const isSoundLoading = ref(false)
const soundError = ref<string | null>(null)
// -----------------------------------------

// --- Состояние для вопросов и ответов ---
const isQuestionAnswerModalVisible = ref(false)
const questionAnswerData = ref<string | null>(null)
const isQuestionAnswerLoading = ref(false)
const questionAnswerError = ref<string | null>(null)
// -----------------------------------------

function closeComponent() {
  emit('close')
}

// --- Функции для модального окна вопросов и ответов ---
function openQuestionAnswerModal() {
  questionAnswerData.value = null
  questionAnswerError.value = null
  isQuestionAnswerModalVisible.value = true
}

async function handleSubmitQuestion(question: string) {
  if (!props.data?.source || !props.data?.translate || isQuestionAnswerLoading.value)
    return

  isQuestionAnswerLoading.value = true
  questionAnswerData.value = null
  questionAnswerError.value = null

  try {
    const message: GenericLlmRawQueryMessage = {
      action: 'genericLlmRawQuery',
      userPrompt: question,
      systemPrompt: questionPrompt(props.data.source, props.data.translate),
    }
    const response: { data?: string, error?: string } = await browser.runtime.sendMessage(message)

    if (response.error) {
      throw new Error(response.error)
    }
    questionAnswerData.value = response.data || null
  }
  catch (error: any) {
    console.error('Ошибка при запросе ответа на вопрос:', error)
    questionAnswerError.value = error.message || 'Произошла неизвестная ошибка при обработке вопроса.'
    questionAnswerData.value = null
  }
  finally {
    isQuestionAnswerLoading.value = false
  }
}
// ----------------------------------------------------

async function soundSource() {
  if (!props.data?.source || isSoundLoading.value) {
    return
  }
  isSoundLoading.value = true
  soundError.value = null
  try {
    const response: { audioDataUrl?: string, error?: string } | undefined = await browser.runtime.sendMessage({
      action: 'textToSpeech',
      text: props.data.source,
    })

    if (response && response.audioDataUrl) {
      const audioDataUrl = response.audioDataUrl
      const audioBlob = dataURLtoBlob(audioDataUrl)

      if (audioPlayer.value) {
        URL.revokeObjectURL(audioPlayer.value.src)
      }
      else {
        audioPlayer.value = new Audio()
      }
      const objectUrl = URL.createObjectURL(audioBlob)

      audioPlayer.value.src = objectUrl
      audioPlayer.value.play()
      audioPlayer.value.onended = () => {
        URL.revokeObjectURL(objectUrl)
      }
      audioPlayer.value.onerror = (e) => {
        console.error('Error playing audio:', e)
        soundError.value = 'Ошибка воспроизведения аудио.'
        URL.revokeObjectURL(objectUrl)
      }
    }
    else if (response && typeof response === 'object' && 'error' in response) {
      console.error('Text-to-speech API error:', response.error)
      soundError.value = response.error || 'Ошибка синтеза речи.'
    }
    else {
      console.error('Failed to retrieve audio or invalid format received.')
      soundError.value = 'Не удалось получить аудиофайл.'
    }
  }
  catch (error: any) {
    console.error('Error fetching or playing sound:', error)
    soundError.value = error.message || 'Произошла ошибка при запросе озвучивания.'
  }
  finally {
    isSoundLoading.value = false
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

  if (audioPlayer.value) {
    audioPlayer.value.pause()
    if (audioPlayer.value.src && audioPlayer.value.src.startsWith('blob:')) {
      URL.revokeObjectURL(audioPlayer.value.src)
    }
    audioPlayer.value = null
  }
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
        title="Задать вопрос по тексту"
        class="icon-button question-btn"
        :disabled="!props.data?.source || !props.data?.translate || isQuestionAnswerLoading"
        @click="openQuestionAnswerModal"
      >
        <Icon v-if="isQuestionAnswerLoading && !questionAnswerData" icon="mdi:loading" class="animate-spin" />
        <Icon v-else icon="mdi:lightbulb-question-outline" />
      </button>

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
        :disabled="!props.data?.source || isSoundLoading"
        @click="soundSource"
      >
        <Icon v-if="isSoundLoading" icon="mdi:loading" class="animate-spin" />
        <Icon v-else icon="mdi:volume-high" />
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
<QuestionAnswerModal
v-if="isQuestionAnswerModalVisible"
:answer-data="questionAnswerData"
:is-loading="isQuestionAnswerLoading"
:error="questionAnswerError"
@close="isQuestionAnswerModalVisible = false; questionAnswerError = null; questionAnswerData = null;"
@submit-question="handleSubmitQuestion"
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
    font-size: 1.125em;
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

--- File: src/content-script/components/shared/hieroglyph-word/composables/index.ts ---

export \* from './use-inline-translation'

--- File: src/content-script/components/shared/hieroglyph-word/composables/use-inline-translation.ts ---

import type { Ref } from 'vue'
import type { TranslateInlineTextMessage } from '~/shared/types/messaging'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import browser from 'webextension-polyfill'

const TOOLTIP_OFFSET_Y = 8

interface UseInlineTranslationOptions {
targetSelector: string
rootElementRef?: Ref<HTMLElement | null>
tooltipElementRef?: Ref<HTMLElement | null | undefined>
}

export function useInlineTranslation(options: UseInlineTranslationOptions) {
const { targetSelector, rootElementRef, tooltipElementRef } = options

const isTooltipVisible = ref(false)
const tooltipPosition = reactive({ top: 0, left: 0, display: 'none' })
const isLoading = ref(false)
const translatedText = ref<string | null>(null)
const currentSelectedText = ref<string | null>(null)
let hasValidSelection = false

function hideTooltip() {
isTooltipVisible.value = false
translatedText.value = null
isLoading.value = false
tooltipPosition.display = 'none'
hasValidSelection = false
}

async function handleTranslateRequest() {
if (!currentSelectedText.value || isLoading.value)
return

    isLoading.value = true
    translatedText.value = null

    try {
      const message: TranslateInlineTextMessage = {
        action: 'translateInlineText',
        text: currentSelectedText.value,
      }
      const response: { data?: string, error?: string } = await browser.runtime.sendMessage(message)

      if (response.error) {
        translatedText.value = `Error: ${response.error}`
        console.error('Inline translation error:', response.error)
      }
      else if (response.data) {
        translatedText.value = response.data
      }
      else {
        translatedText.value = 'No translation received.'
      }
    }
    catch (error) {
      console.error('Failed to send inline translation request:', error)
      translatedText.value = 'Translation request failed.'
    }
    finally {
      isLoading.value = false
    }

}

const handleMouseUp = () => {
setTimeout(() => {
const selection = document.getSelection()
if (!selection || selection.isCollapsed || selection.rangeCount === 0 || selection.toString().trim() === '') {
if (isTooltipVisible.value && !hasValidSelection) {
// hideTooltip()
}
return
}

      const range = selection.getRangeAt(0)
      let selectedNode = range.commonAncestorContainer
      if (selectedNode.nodeType === Node.TEXT_NODE) {
        selectedNode = selectedNode.parentNode!
      }

      const targetElement = (selectedNode as HTMLElement).closest(targetSelector)

      if (targetElement && (!rootElementRef || !rootElementRef.value || rootElementRef.value.contains(targetElement))) {
        const newSelectedText = selection.toString().trim()

        if (newSelectedText === currentSelectedText.value && isTooltipVisible.value) {
          const rect = range.getBoundingClientRect()
          tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
          tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
          tooltipPosition.display = 'block'
          hasValidSelection = true
          return
        }

        currentSelectedText.value = newSelectedText
        translatedText.value = null
        isLoading.value = false

        const rect = range.getBoundingClientRect()
        tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
        tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
        tooltipPosition.display = 'block'

        isTooltipVisible.value = true
        hasValidSelection = true
      }
    }, 0)

}

const handleSelectionChange = () => {
const selection = document.getSelection()
if (!selection || selection.isCollapsed || selection.rangeCount === 0 || selection.toString().trim() === '') {
if (isTooltipVisible.value && !hasValidSelection) {
// hideTooltip(); // Отложим это до handleDocumentClick
}
hasValidSelection = false
}
}

const handleDocumentClick = (event: MouseEvent) => {
if (!isTooltipVisible.value)
return

    const target = event.target as Node

    if (tooltipElementRef?.value?.contains(target)) {
      return
    }

    setTimeout(() => {
      const selection = document.getSelection()
      if (selection && !selection.isCollapsed && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        let selectedNode = range.commonAncestorContainer
        if (selectedNode.nodeType === Node.TEXT_NODE) {
          selectedNode = selectedNode.parentNode!
        }
        const targetGlyphElement = (selectedNode as HTMLElement).closest(targetSelector)

        if (targetGlyphElement
          && (!rootElementRef || !rootElementRef.value || rootElementRef.value.contains(targetGlyphElement))
          && selection.toString().trim() === currentSelectedText.value
        ) {
          const rect = range.getBoundingClientRect()
          tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
          tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
          return
        }
      }
      hideTooltip()
    }, 0)

}

onMounted(() => {
document.addEventListener('selectionchange', handleSelectionChange)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('click', handleDocumentClick, true)
})

onUnmounted(() => {
document.removeEventListener('selectionchange', handleSelectionChange)
document.removeEventListener('mouseup', handleMouseUp)
document.removeEventListener('click', handleDocumentClick, true)
})

return {
isTooltipVisible,
tooltipPosition,
isLoading,
translatedText,
currentSelectedText,
handleTranslateRequest,
}
}

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
font-size: 1.3em;
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
font-size: 1em;
}

.hw-glyph {
font-size: 1.3em;
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
font-size: 0.95em;
}
}
.variant-standard {
display: inline-flex;
padding: 12px;

.hw-glyph {
font-size: 2.1em;
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
position: relative;
font-size: 1em;
margin: 4px 0;
margin-right: 8px;
display: inline-flex;
}
.hw-pinyin {
color: var(--fg-secondary-color, #495057);
font-weight: 400;
font-size: 1em;
letter-spacing: 0.2px;
font-family: var(--chinisik-font-family-cn);
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
font-family: var(--chinisik-font-family-cn);
}
.hw-translate {
color: var(--fg-primary-color, #333);
font-weight: 400;
font-size: 1em;
letter-spacing: 0.2px;
}
.hw-glyph-selectable {
user-select: text;
cursor: text;
}

.chinisik-translated-word-wrapper {
position: relative;
display: inline-block;
// background-color: var(--bg-accent-subtle-color, #e0e8ff);
border-radius: 2px;
}

.chinisik-translation-popup {
position: absolute;
bottom: 110%;
left: 50%;
transform: translateX(-50%);
background-color: var(--bg-primary-color, #ffffff);
color: var(--fg-primary-color, #333333);
border: 1px solid var(--border-secondary-color, #cccccc);
border-radius: 4px;
padding: 4px 8px;
font-size: 0.9em;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
z-index: 2147483647;
white-space: nowrap;

button {
background: none;
border: none;
padding: 0 0 0 5px;
margin: 0;
color: inherit;
cursor: pointer;
font-size: 1.2em;
line-height: 1;
opacity: 0.7;

    &:hover {
      opacity: 1;
    }

}
}

--- File: src/content-script/components/shared/hieroglyph-word/ui/inline-translation-tooltip.vue ---

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

interface Props {
  position: { top: number, left: number, display: string }
  isLoading: boolean
  translatedText: string | null
  selectedText: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{ requestTranslate: [void] }>()

const positionStyles = computed(() => ({
  top: `${props.position.top}px`,
  left: `${props.position.left}px`,
  display: props.position.display,
}))

function onRequestTranslate() {
  emit('requestTranslate')
}
</script>

<template>
  <div
    class="chinisik-inline-translation-tooltip"
    :style="positionStyles"
    @mousedown.stop
  >
    <div v-if="isLoading" class="tooltip-loader">
      <Icon icon="mdi:loading" height="20px" class="animate-spin" />
    </div>
    <div v-else-if="translatedText" class="tooltip-translation">
      {{ translatedText }}
    </div>
    <button
      v-else
      class="tooltip-translate-btn"
      title="Перевести"
      @click.stop="onRequestTranslate"
    >
      <Icon icon="mdi:translate" height="20px" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.chinisik-inline-translation-tooltip {
  position: absolute;
  background-color: var(--bg-primary-color, #fff);
  color: var(--fg-primary-color, #333);
  border: 1px solid var(--border-secondary-color, #ccc);
  border-radius: 6px;
  padding: 4px;
  font-size: 0.9em;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  z-index: 2147483647;
  transform: translateX(-50%) translateY(-100%);
  min-width: 34px;
  min-height: 34px;
  text-align: center;
  transition: opacity 0.1s ease-in-out;

  .tooltip-loader,
  .tooltip-translation,
  .tooltip-translate-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    .animate-spin {
      animation: chinisik-spin 0.8s linear infinite;
    }
  }

  .tooltip-translation {
    padding: 2px 4px;
    max-width: 250px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .tooltip-translate-btn {
    background: none;
    border: none;
    color: var(--fg-accent-color, #007bff);
    cursor: pointer;
    padding: 2px;
    font-size: 1.3em;

    &:hover {
      color: var(--fg-action-hover-color, #0056b3);
    }

    svg {
      display: block;
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
</style>

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
  font-family: var(--chinisik-base-font-family);
  line-height: 1.5;
  font-size: 0.9375em;

  h2 {
    font-size: 1.1em;
    border-bottom: 2px solid var(--border-secondary-color);
    margin-top: 0em;
    font-weight: 500;
    margin-bottom: 12px;
    padding: 0.4em;
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

  code:not(pre > code) {
    font-family: var(--chinisik-base-font-family);
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
    font-family: var(--chinisik-base-font-family);
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
      font-size: 0.9em;
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

  ul,
  ol {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    padding-left: 1.5em;

    li {
      line-height: 1.65;
      margin-bottom: 0.4em;
      position: relative;

      p {
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }

      ul,
      ol {
        margin-top: 0.4em;
        margin-bottom: 0.4em;
      }
    }
  }

  ul {
    list-style: none;

    li {
      &::before {
        content: '•';
        color: var(--fg-accent-color, #007bff);
        font-weight: bold;
        position: absolute;
        left: -1.2em;
        top: 0.05em;
        font-size: 1.1em;
      }

      ul {
        li {
          &::before {
            content: '◦';
            font-size: 1em;
          }

          ul {
            li {
              &::before {
                content: '▪';
                font-size: 0.9em;
              }
            }
          }
        }
      }
    }
  }

  ol {
    li {
      padding-left: 0.3em;

      &::marker {
        color: var(--fg-accent-color, #007bff);
        font-weight: 500;
      }

      ol {
        list-style-type: lower-alpha;
        ol {
          list-style-type: lower-roman;
        }
      }
    }
  }

  p + ul,
  p + ol {
    margin-top: 1em;
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
    font-family: var(--chinisik-font-family-cn);
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

watch(sharedControls, (newValues) => {
  saveControls(newValues)
}, { deep: true })

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
  fullScreenOverlays.value = [] // Clear previous overlays
  errorMessage.value = null // Clear previous errors

  try {
    const results = await utilFullscreenTranslate(imageDataUrl)

    if (results && results.length > 0) {
      fullScreenOverlays.value = results
      currentState.value = 'FULL_SCREEN_TRANSLATE_DISPLAYING'
    }
    else {
      // Handle case where no text was found or an empty array was returned
      errorMessage.value = 'Не удалось найти текст на экране или произошла ошибка при обработке.'
      currentState.value = 'ERROR' // Or a specific state like 'NO_TEXT_FOUND'
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
    // This sends message to background for area capture
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
  // capturedImagePreview.value = null; // This is already handled by watch(currentState)
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    // For FULL_SCREEN_TRANSLATE_DISPLAYING, Esc should also close it
    if (['LOADING', 'RESULT', 'ERROR', 'FULL_SCREEN_TRANSLATE_PROCESSING', 'FULL_SCREEN_TRANSLATE_DISPLAYING'].includes(currentState.value)) {
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
    currentTheme.value = 'light' // Fallback
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
  browser.runtime.onMessage.addListener(messageListener as any) // Cast to any to avoid complex type issues with listener

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

    <!-- Fullscreen OCR results display -->
    <div v-if="currentState === 'FULL_SCREEN_TRANSLATE_DISPLAYING' && fullScreenOverlays.length > 0" class="chinisik-full-screen-ocr-overlay-container">
      <div
        v-for="(item, index) in fullScreenOverlays"
        :key="index"
        class="chinisik-ocr-translated-chunk"
        :style="{
          position: 'fixed',
          left: `${item.bbox.x0}px`,
          top: `${item.bbox.y0}px`,
          width: `${item.bbox.x1 - item.bbox.x0}px`,
          height: `${item.bbox.y1 - item.bbox.y0}px`,
          backgroundColor: 'rgba(205, 155, 200, 0.75)',
          border: '1px solid rgba(220, 0, 0, 0.8)',
          color: 'black',
          fontSize: '12px',
          overflow: 'hidden',
          zIndex: 2147483640,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
          padding: '2px',
          lineHeight: '1.2',
          borderRadius: '3px',
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
.chinisik-full-screen-loading-indicator {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8); /* Darker for better visibility */
  color: white;
  padding: 12px 22px;
  border-radius: 8px; /* Rounded corners */
  z-index: 2147483647; /* Max z-index */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-size: 0.9em;
}

/* Styles for error popup positioning based on sharedControls */
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
    border-radius: 8px; // Consistent border-radius
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    font-family: var(--chinisik-base-font-family);
    color: var(--fg-primary-color, #333);
    overflow: hidden; // Keep overflow hidden
  }
}

.chinisik-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--bg-secondary-color, #f7f7f7);
  border-bottom: 1px solid var(--border-primary-color, #e7e7e7); // Ensure this var exists or use fallback

  span {
    font-weight: 600;
    font-size: 0.875em;
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 1.125em; // Adjusted for icon
    line-height: 1;
    cursor: pointer;
    color: var(--fg-secondary-color, #495057);
    padding: 0 5px; // Keep padding for click area
    display: flex; // For icon alignment
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--fg-primary-color, #333);
    }
    svg {
      // Style for icon
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
  min-width: 300px; // Ensure error popup has some width
  background-color: var(--bg-error-color, #fff1f0);
  border-color: var(--border-error-color, #ffccc7);
  color: var(--fg-error-color, #a8071a);

  .chinisik-popup-header {
    background-color: var(--bg-error-secondary-color, #ffccc7);
    border-bottom-color: var(--border-error-strong-color, #ffa39e); // Ensure this var exists
    span {
      color: var(--fg-error-color, #a8071a);
    }
    .close-btn-header {
      color: var(--fg-error-secondary-color, #d4380d); // Ensure this var exists
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
  transform: translateY(80%) scale(0.95); // Added scale for a bit more pop
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>

--- File: src/manifest.json ---

{
"{{chrome}}.manifest_version": 3,
"{{firefox}}.manifest_version": 2,
"name": "Chinisik OCR Translator",
"version": "0.0.5",
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
"{{chrome}}.web_accessible_resources": [
{
"resources": [
"assets/fonts/MapleMono-CN/*",
"assets/fonts/Rubik/*"
],
"matches": [
"<all_urls>"
]
}
],
"{{firefox}}.web_accessible_resources": [
"assets/fonts/MapleMono-CN/*",
"assets/fonts/Rubik/*"
],
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
"{{firefox}}.<all_urls>",
"tabs",
"storage",
"notifications",
"{{chrome}}.activeTab",
"{{firefox}}.activeTab"
],
"{{firefox}}.browser_specific_settings": {
"gecko": {
"id": "chinisik-ocr-translator@chinisik.ru",
"strict_min_version": "91.1.0"
}
},
"commands": {
"capture-area": {
"suggested_key": {
"default": "Ctrl+Shift+S"
},
"description": "Start area capture"
},
"translate-fullscreen": {
"suggested_key": {
"default": "Ctrl+Shift+F"
},
"description": "OCR and translate entire visible screen"
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
import type { AllProviderConfigs, ChinisikConfig, GeminiConfig, OllamaConfig } from '../shared/api/services/all/config' // Добавлен OllamaConfig
import type { Theme } from '../shared/types'
import { Icon } from '@iconify/vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import browser from 'webextension-polyfill'
import { CHINISIK_DEFAULT_API_URL } from '../shared/api/services/all/providers/chinisik/config'
import { TranslationProvider } from '../shared/types'

interface ProviderField {
  key: keyof ChinisikConfig | keyof GeminiConfig | keyof OllamaConfig // Добавлен keyof OllamaConfig
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
    fields: [ // Эти поля будут скрыты, пока провайдер "в разработке"
      { key: 'apiKey', label: 'API Key', type: 'password', placeholder: 'Enter Gemini API Key' },
      { key: 'model', label: 'Model', type: 'text', placeholder: 'e.g., gemini-pro-vision', isOptional: true },
    ],
    helpText: 'Uses Google\'s Gemini AI. Requires an API key.',
  },
  // { // Раскомментировано и добавлено определение для Ollama
  //   id: TranslationProvider.OLLAMA,
  //   name: 'Ollama',
  //   fields: [ // Эти поля будут скрыты, пока провайдер "в разработке"
  //     { key: 'apiUrl', label: 'API URL', type: 'url', placeholder: 'http://localhost:11434' },
  //     { key: 'model', label: 'Model', type: 'text', placeholder: 'e.g., llava' },
  //     { key: 'keepAlive', label: 'Keep Alive', type: 'text', placeholder: '5m', isOptional: true },
  //   ],
  //   helpText: 'Uses a local Ollama instance. Configure API URL and model.',
  // },
]

// Список провайдеров, которые находятся в разработке
const providersInDevelopment = [TranslationProvider.Gemini]

// --- Реактивное состояние ---
const selectedProvider = ref<TranslationProvider>(TranslationProvider.Default)
const providerSettingsForm = reactive<AllProviderConfigs>({
  [TranslationProvider.Default]: { apiKey: '', apiUrl: CHINISIK_DEFAULT_API_URL },
  [TranslationProvider.Gemini]: { apiKey: '', model: 'gemini-pro-vision' },
  // [TranslationProvider.OLLAMA]: { apiUrl: 'http://localhost:11434/api/generate', model: 'llava', keepAlive: '5m' }, // Добавлено для Ollama
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
      // [TranslationProvider.Ollama]: { apiUrl: 'http://localhost:11434/api/generate', model: 'llava', keepAlive: '5m' }, // Добавлено для Ollama
    }
    const defaultTheme: Theme = 'light'

    selectedProvider.value = result.selectedProvider || defaultSelectedProvider

    const loadedProviderSettings = result.providerSettings || {}
    for (const providerIdStr in defaultProviderSettings) {
      const pId = providerIdStr as TranslationProvider
      // Убедимся, что providerSettingsForm[pId] существует перед присвоением
      if (!providerSettingsForm[pId]) {
        providerSettingsForm[pId] = {} as any // Инициализация, если необходимо
      }
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
  // Убедимся, что selectedProvider.value является ключом в providerSettingsForm
  if (selectedProvider.value in providerSettingsForm) {
    return providerSettingsForm[selectedProvider.value]
  }
  return undefined // Или вернуть объект по умолчанию/пустой объект
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

      <!-- Блок для отображения "В разработке" -->
      <div
        v-if="providersInDevelopment.includes(selectedProvider)"
        class="in-development-notice"
      >
        <p>⚙️ В разработке</p>
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
import type { FullscreenTranslateParams, FullscreenTranslateResult, ITranslationProvider, LexicalAnalysisRequestParams, LexicalAnalysisResult, TextToSpeechRequestParams, TextToSpeechResult, TranslateRequestParams } from '../../types'
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

    try {
      const data = await $fetch<LexicalAnalysisResult>(`${apiUrl}/llvm/raw`, {
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

public async textToSpeech(
params: TextToSpeechRequestParams,
baseConfig: BaseProviderConfig,
): Promise<TextToSpeechResult> {
const chinisikSpecificConfig: ChinisikConfig = {
apiKey: baseConfig.apiKey || '',
apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
}

    const { text, model = 'gpt-4o-mini-tts', voice = 'alloy', response_format = 'mp3', speed = 1 } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    try {
      const audioBlob = await $fetch<Blob>(`${apiUrl}/llvm/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'audio/mp3',
        },
        body: {
          text: text.replace(/\s+/g, ''),
          model,
          voice,
          response_format,
          speed,
        },
      })

      if (!(audioBlob instanceof Blob)) {
        console.error('TextToSpeech API did not return a Blob. Received:', audioBlob)
        throw new Error('TextToSpeech API did not return a valid audio Blob.')
      }
      if (audioBlob.type !== 'audio/mpeg' && audioBlob.type !== 'audio/mp3') {
        console.warn(`Expected audio/mpeg or audio/mp3 but received ${audioBlob.type}`)
      }

      return audioBlob
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API text-to-speech error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          try {
            const errorJson = (typeof responseData === 'string' && (responseData.startsWith('{') || responseData.startsWith('['))) ? JSON.parse(responseData) : responseData
            if (typeof errorJson === 'object' && errorJson !== null) {
              if (errorJson.message)
                errorMessage += ` - ${errorJson.message}`
              else if (errorJson.detail)
                errorMessage += ` - ${errorJson.detail}`
              else if (errorJson.error)
                errorMessage += ` - ${errorJson.error}`
            }
            else if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
              errorMessage += ` - Response: ${responseData}`
            }
          }
          catch {
            if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
              errorMessage += ` - Response: ${responseData}`
            }
          }
          console.error('Chinisik API TextToSpeech Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw new TypeError(`ChinisikProvider textToSpeech failed: ${error.message}`)
      }
      console.error('Unknown API error in ChinisikProvider (textToSpeech):', error)
      throw new Error('Unknown error during Chinisik API text-to-speech request')
    }

}

public async fullscreenTranslate(
params: FullscreenTranslateParams,
baseConfig: BaseProviderConfig,
): Promise<FullscreenTranslateResult> {
const chinisikSpecificConfig: ChinisikConfig = {
apiKey: baseConfig.apiKey || '',
apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
}

    const { imageDataUrl, systemPrompt } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    if (!systemPrompt) {
      throw new Error('System prompt is required for fullscreen translation.')
    }

    try {
      const response = await $fetch<string>(`${apiUrl}/llvm/raw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: {
          user: [{
            type: 'image_url',
            image_url: {
              url: imageDataUrl,
              detail: 'high',
            },
          }],
          system: systemPrompt,
          responseType: 'json_object',
        },
      })

      const formatedRawData = response.startsWith('{') ? `[${response}]` : response
      const parsedData = JSON.parse(formatedRawData)

      if (!Array.isArray(parsedData)) {
        console.error('Chinisik API fullscreenTranslate: Response is not an array.', response)
        throw new Error('Chinisik API (fullscreenTranslate) did not return a valid JSON array.')
      }

      const results: FullscreenTranslateResult = parsedData.map((item: any) => {
        if (
          typeof item.source !== 'string'
          || typeof item.translate !== 'string'
          || typeof item.transcription !== 'string'
          || typeof item.bbox !== 'object'
          || item.bbox === null
          || typeof item.bbox.x0 !== 'number'
          || typeof item.bbox.y0 !== 'number'
          || typeof item.bbox.x1 !== 'number'
          || typeof item.bbox.y1 !== 'number'
        ) {
          console.warn('Chinisik API fullscreenTranslate: Invalid item structure in response array:', item)
          return null
        }
        return {
          result: {
            source: item.source,
            translate: item.translate,
            transcription: item.transcription,
          },
          bbox: {
            x0: item.bbox.x0,
            y0: item.bbox.y0,
            x1: item.bbox.x1,
            y1: item.bbox.y1,
          },
        }
      }).filter(item => item !== null) as FullscreenTranslateResult

      return results
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API fullscreen translation error: ${status} ${statusText}`
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
          console.error('Chinisik API FullscreenTranslate Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (fullscreenTranslate):', error)
      throw new Error('Unknown error during Chinisik API fullscreen translation request')
    }

}
}

--- File: src/shared/api/services/all/translate-service.ts ---

import type { LlmResponseType, TranslationResult } from '../../../types'
import type { AllProviderConfigs, BaseProviderConfig, ChinisikConfig, GeminiConfig } from './config'
import type { FullscreenTranslateParams, FullscreenTranslateResult, LexicalAnalysisRequestParams, LexicalAnalysisResult, TextToSpeechRequestParams, TranslateRequestParams } from './types'
import browser from 'webextension-polyfill'
import { fullscreenTranslatePrompt, lexicalAnalysisPrompt } from '~/shared/constant'
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

export async function performTextToSpeechService(text: string): Promise<Blob> {
const { selectedProvider } = await browser.storage.sync.get({
selectedProvider: TranslationProvider.Default,
})
const currentProviderId = selectedProvider as TranslationProvider
const providerConfig = await getProviderSettings(currentProviderId)
const providerInstance = getTranslationProvider(currentProviderId)

if (!providerInstance.textToSpeech) {
throw new Error(`Text-to-speech is not supported by the current provider: ${currentProviderId}.`)
}

const requestParams: TextToSpeechRequestParams = { text }

try {
const result = await providerInstance.textToSpeech(requestParams, providerConfig)
return result
}
catch (error) {
console.error(`Error during text-to-speech with ${currentProviderId}:`, error)
if (error instanceof Error) {
throw new TypeError(`Text-to-speech failed with ${currentProviderId}: ${error.message}`)
}
throw new Error(`An unknown error occurred during text-to-speech with ${currentProviderId}.`)
}
}

export async function performAnalyzeLexically(userPrompt: string, systemPrompt: string): Promise<LexicalAnalysisResult> {
const { selectedProvider } = await browser.storage.sync.get({
selectedProvider: TranslationProvider.Default,
})
const currentProviderId = selectedProvider as TranslationProvider
const providerConfig = await getProviderSettings(currentProviderId)
const providerInstance = getTranslationProvider(currentProviderId)

if (!providerInstance.analyzeLexically) {
throw new Error(`Generic LLM raw query (/llvm/raw) is not supported by the current provider's registered 'analyzeLexically' method: ${currentProviderId}.`)
}

const requestParams: LexicalAnalysisRequestParams = {
user: userPrompt,
system: systemPrompt,
}

try {
const result = await providerInstance.analyzeLexically(requestParams, providerConfig)
return result
}
catch (error) {
console.error(`Error during generic LLM raw query with ${currentProviderId}:`, error)
if (error instanceof Error) {
throw new TypeError(`Generic LLM raw query failed with ${currentProviderId}: ${error.message}`)
}
throw new Error(`An unknown error occurred during generic LLM raw query with ${currentProviderId}.`)
}
}

export async function performFullscreenTranslate(
imageDataUrl: string,
): Promise<FullscreenTranslateResult> {
const { selectedProvider } = await browser.storage.sync.get({
selectedProvider: TranslationProvider.Default,
})
const currentProviderId = selectedProvider as TranslationProvider
const providerConfig = await getProviderSettings(currentProviderId)
const providerInstance = getTranslationProvider(currentProviderId)

if (!providerInstance.fullscreenTranslate) {
throw new Error(`Fullscreen translate is not supported by the current provider: ${currentProviderId}.`)
}

const systemPrompt = fullscreenTranslatePrompt()

const requestParams: FullscreenTranslateParams = {
imageDataUrl,
systemPrompt,
}

try {
const result = await providerInstance.fullscreenTranslate(requestParams, providerConfig)
return result
}
catch (error) {
console.error(`Error during fullscreen translation with ${currentProviderId}:`, error)
if (error instanceof Error) {
throw new TypeError(`Fullscreen translation failed with ${currentProviderId}: ${error.message}`)
}
throw new Error(`An unknown error occurred during fullscreen translation with ${currentProviderId}.`)
}
}

--- File: src/shared/api/services/all/types.ts ---

import type { BaseProviderConfig } from './config'
import type { BoundingBox, TranslationResult } from '~/shared/types'

export interface LexicalAnalysisRequestParams {
user: string
system: string
}
export type LexicalAnalysisResult = string

export interface TranslateRequestParams {
imageDataUrl: string
targetLanguage?: string
}

export type TextToSpeechResult = Blob
export interface TextToSpeechRequestParams {
text: string
model?: string
voice?: string
response_format?: 'mp3' | 'opus' | 'aac' | 'flac'
speed?: number
}

export type FullscreenTranslateResult = {
result: TranslationResult
bbox: BoundingBox
}[]
export interface FullscreenTranslateParams {
imageDataUrl: string
systemPrompt?: string
}

export interface ITranslationProvider {
/\*\*

- Переводит изображение.
- @param params Параметры запроса, включая imageDataUrl.
- @param config Конфигурация для данного провайдера (API ключ, URL и т.д.).
- @returns Promise с результатом перевода.
  \*/
  translate: (params: TranslateRequestParams, config: BaseProviderConfig) => Promise<TranslationResult>

/\*\*

- New: Converts text to speech.
- @param params Parameters for the text-to-speech request, including the text.
- @param config Configuration for this provider.
- @returns Promise with the audio data as a Blob.
  \*/
  textToSpeech?: (params: TextToSpeechRequestParams, config: BaseProviderConfig) => Promise<TextToSpeechResult>

analyzeLexically: (params: LexicalAnalysisRequestParams, config: BaseProviderConfig) => Promise<LexicalAnalysisResult>

/\*\*

- Optional: Performs OCR and translation for the entire image, returning multiple text blocks.
- @param params Parameters for the fullscreen translation request, including imageDataUrl.
- @param config Configuration for this provider.
- @returns Promise with an array of translated blocks, each with text and bounding box.
  \*/
  fullscreenTranslate?: (params: FullscreenTranslateParams, config: BaseProviderConfig) => Promise<FullscreenTranslateResult>
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
// Ollama = 'ollama',
}

interface TranslationResult {
source: string
translate: string
transcription: string
}

interface TranslationResultData extends TranslationResult {
croppedImage: string
}

interface BoundingBox {
x0: number
y0: number
x1: number
y1: number
}

type LlmResponseType = 'text' | 'json_object'

export {
AreaToCapture,
BoundingBox,
LlmResponseType,
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
import type { AreaToCapture, BoundingBox, TranslationResultData } from './common'

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

export interface TextToSpeechMessage extends BaseMessage {
action: 'textToSpeech'
text: string
}

export interface GenericLlmRawQueryMessage extends BaseMessage {
action: 'genericLlmRawQuery'
userPrompt: string
systemPrompt: string
}

export interface TranslateInlineTextMessage extends BaseMessage {
action: 'translateInlineText'
text: string
systemPrompt?: string
}

export interface TranslateFullScreenMessage extends BaseMessage {
action: 'translateFullScreen'
imageDataUrl: string
}

export type RuntimeMessage =
| CaptureAreaMessage
| StartSelectionMessage
| ShowTranslationMessage
| ShowErrorMessage
| GetLexicalAnalysisMessage
| TextToSpeechMessage
| GenericLlmRawQueryMessage
| TranslateInlineTextMessage
| TranslateFullScreenMessage

export type MessageSender = browser.Runtime.MessageSender

export interface CaptureAndTranslateResponse {
success?: boolean
translation?: string
error?: string
}

--- File: src/shared/utils/fullscreen-translate.ts ---

import type { FullscreenTranslateResult } from '../api/services/all/types'
import { performFullscreenTranslate } from '../api'

async function preprocessImageForLlm(imageDataUrl: string): Promise<string> {
return new Promise((resolve, reject) => {
const img = new Image()
img.onload = () => {
const canvas = document.createElement('canvas')
canvas.width = img.width
canvas.height = img.height
const ctx = canvas.getContext('2d')
if (!ctx) {
return reject(new Error('Could not get 2D context for preprocessing'))
}

      // Draw the original image
      ctx.drawImage(img, 0, 0)

      // Overlay a grid
      const numGridLines = 20 // Number of lines for the grid (e.g., 20x20 grid)
      const stepX = img.width / numGridLines
      const stepY = img.height / numGridLines

      ctx.strokeStyle = 'rgba(255, 0, 0, 0.25)' // Light red, semi-transparent
      ctx.lineWidth = 1

      // Draw vertical grid lines
      for (let i = 1; i < numGridLines; i++) {
        const x = i * stepX
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, img.height)
        ctx.stroke()
      }

      // Draw horizontal grid lines
      for (let i = 1; i < numGridLines; i++) {
        const y = i * stepY
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(img.width, y)
        ctx.stroke()
      }

      // Optional: Add border to make image boundaries clear for LLM
      // ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; // Green border
      // ctx.strokeRect(0, 0, img.width, img.height);

      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = (e) => {
      console.error('Error loading image for preprocessing:', e)
      // Resolve with original if preprocessing fails to avoid breaking the chain
      // or reject if preprocessing is critical. For now, let's resolve with original.
      // reject(new Error('Failed to load image for preprocessing.'));
      console.warn('Preprocessing image failed. Using original image data URL.')
      resolve(imageDataUrl)
    }
    img.src = imageDataUrl

})
}

async function fullscreenTranslate(originalImageDataUrl: string): Promise<FullscreenTranslateResult> {
let processedImageDataUrl = originalImageDataUrl
try {
processedImageDataUrl = await preprocessImageForLlm(originalImageDataUrl)
}
catch (e) {
console.warn('Image preprocessing step resulted in an error, proceeding with original image:', e)
}

return await performFullscreenTranslate(processedImageDataUrl)
}

export { fullscreenTranslate, preprocessImageForLlm }

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
"$schema": "https://json.schemastore.org/tsconfig.json",
"compilerOptions": {
"target": "ESNext",
"jsx": "preserve",
"jsxImportSource": "vue",
"lib": [
"ESNext",
"DOM"
],
"module": "ESNext",
"moduleResolution": "bundler",
"paths": {
"~/_": [
"./src/_"
]
},
"resolveJsonModule": true,
"types": [
"vite/client",
"node"
],
"strict": true,
"noEmit": true,
"sourceMap": true,
"esModuleInterop": true,
"skipLibCheck": true
},
"include": [
"src/**/*.ts",
"build/**/*.ts"
]
}

--- File: vite.config.ts ---

import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import browserExtension from 'vite-plugin-web-extension'

function root(...paths: string[]): string {
return path.resolve(\_\_dirname, ...paths)
}

const targetBrowser = process.env.TARGET || 'chrome'

export default defineConfig({
build: {
outDir: root(`dist/${targetBrowser}`),
emptyOutDir: true,
},
plugins: [
vue(),
vueJsx({
optimize: true,
enableObjectSlots: true,
}),
// @ts-expect-error dts
browserExtension({
manifest: 'src/manifest.json',
browser: targetBrowser,
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
additionalData: `           @import '~/assets/scss/_setup.scss';
        `,
logger: {
warn(message: any, options: any) {
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
