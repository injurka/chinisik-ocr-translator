<script lang="ts" setup>
import type { TranslationResult as TranslationDataType } from '../../../../../shared/types'
import type { ControlValues } from './sections/control-menu.vue'
import { Icon } from '@iconify/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { HieroglyphWord } from '../../../shared/hieroglyph-word'
import ControlMenu from './sections/control-menu.vue'

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

const controlMenuRef = ref<HTMLElement | null>(null)
const menuButtonRef = ref<HTMLElement | null>(null)

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
</template>

<style lang="scss" scoped>
.translation-results {
  position: fixed;
  bottom: 20px;
  min-width: 400px;
  width: auto;
  max-width: calc(100vw - 40px);
  display: inline-flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--bg-header-color), 0.85);
  border: 1px solid var(--border-secondary-color);
  border-radius: 8px;
  z-index: 9999;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);

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
    background-color: var(--bg-tertiary-color, #f0f0f0);
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
      background-color: var(--bg-hover-color, #e0e0e0);
      border-color: var(--border-accent-hover-color, #bbb);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--bg-tertiary-color, #f0f0f0);
      color: var(--fg-disabled-color, #999);
    }

    &.menu-btn.active {
      background-color: var(--border-accent-color, #007bff);
      color: var(--bg-primary-color, #fff);
      border-color: var(--border-accent-color, #007bff);
    }

    svg {
      width: 1em;
      height: 1em;
    }
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
  border: 1px solid var(--border-secondary-color);
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
