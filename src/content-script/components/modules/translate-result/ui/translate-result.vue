<script lang="ts" setup>
import type { QuestionForAnswerMessage, TranslationResult as TranslationDataType } from '../../../../../shared/types'
import type { ControlValues } from './sections/control-menu.vue'
import type { LexicalAnalysisResult } from '~/shared/api/services/all/types/provider'
import { Icon } from '@iconify/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'
import { dataURLtoBlob } from '~/shared/utils/helpers'
import { questionPrompt } from '~/shared/utils/prompt'
import { HieroglyphWord } from '../../../shared/hieroglyph-word'
import ControlMenu from './sections/control-menu.vue'
import LexicalAnalysisModal from './sections/lexical-analysis-modal.vue'
import QuestionAnswerModal from './sections/question-answer-modal.vue'

const props = defineProps<Props>()

const emit = defineEmits<{ close: [void], sound: [source: string] }>()

const { t } = useI18n()

interface Props {
  data: TranslationDataType
  capturedImagePreview?: string | null
}
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
    const message: QuestionForAnswerMessage = {
      action: 'questionForAnswer',
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
    questionAnswerError.value = error.message || t('content.qaRequestError')
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
        soundError.value = t('content.audioPlaybackError')
        URL.revokeObjectURL(objectUrl)
      }
    }
    else if (response && typeof response === 'object' && 'error' in response) {
      console.error('Text-to-speech API error:', response.error)
      soundError.value = response.error || t('content.speechSynthesisError')
    }
    else {
      console.error('Failed to retrieve audio or invalid format received.')
      soundError.value = t('content.audioFetchError')
    }
  }
  catch (error: any) {
    console.error('Error fetching or playing sound:', error)
    soundError.value = error.message || t('content.qaRequestError')
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
    lexicalAnalysisError.value = error.message || t('content.lexicalAnalysisError')
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
        :title="t('content.actions.askQuestion')"
        class="icon-button question-btn"
        :disabled="!props.data?.source || !props.data?.translate || isQuestionAnswerLoading"
        @click="openQuestionAnswerModal"
      >
        <Icon v-if="isQuestionAnswerLoading && !questionAnswerData" icon="mdi:loading" class="animate-spin" />
        <Icon v-else icon="mdi:lightbulb-question-outline" />
      </button>

      <button
        :title="t('content.actions.lexicalAnalysis')"
        class="icon-button lexical-analysis-btn"
        :disabled="!props.data?.source || isLexicalAnalysisLoading"
        @click="handleLexicalAnalysis"
      >
        <Icon v-if="isLexicalAnalysisLoading" icon="mdi:loading" class="animate-spin" />
        <Icon v-else icon="mdi:text-box-search-outline" />
      </button>
      <button
        :title="t('content.actions.textToSpeech')"
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
          :title="t('content.actions.displaySettings')"
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
        :title="t('content.close')"
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
            <span v-else>{{ t('content.unrecognizedText') }}</span>
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
