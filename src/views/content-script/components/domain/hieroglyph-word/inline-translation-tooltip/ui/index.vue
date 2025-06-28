<script lang="ts" setup>
import type { WordAnalysisResult } from '../model/types'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  position: { top: number, left: number, display: string }
  isLoading: boolean
  analysisResult: WordAnalysisResult | null
  selectedText: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{ requestTranslate: [void] }>()
const { t } = useI18n()

const positionStyles = computed(() => ({
  top: `${props.position.top}px`,
  left: `${props.position.left}px`,
  display: props.position.display,
}))

// Вычисляемое свойство для удобства в шаблоне
const hasResult = computed(() => !props.isLoading && props.analysisResult)

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
    <!-- Лоадер остаётся без изменений -->
    <div v-if="isLoading" class="tooltip-loader">
      <Icon icon="mdi:loading" height="20px" class="animate-spin" />
    </div>

    <!-- Основной блок для отображения результата анализа -->
    <div v-else-if="hasResult" class="analysis-content">
      <!-- 1. Заголовок: Слово + Пиньинь -->
      <header class="analysis-header">
        <span class="word">{{ analysisResult!.word }}</span>
        <span class="pinyin">{{ analysisResult!.pinyin }}</span>
      </header>

      <!-- 2. Разбор по иероглифам -->
      <div class="breakdown">
        [<span
          v-for="(item, index) in analysisResult!.breakdown"
          :key="item.char"
          class="breakdown-item"
        >
          <span v-if="index > 0" class="separator"> + </span>
          <span class="char">{{ item.char }}</span>
          <span class="char-pinyin">{{ item.pinyin }}:</span>
          <span class="char-meaning">{{ item.meaning }}</span>
        </span>]
      </div>

      <!-- 3. Часть речи -->
      <div class="part-of-speech">
        {{ analysisResult!.partOfSpeech }}
      </div>

      <!-- 4. Список значений (нумерованный) -->
      <ol class="meanings-list">
        <li
          v-for="(meaning, index) in analysisResult!.meanings"
          :key="index"
          class="meaning-item"
        >
          <span v-if="meaning.type === 'figurative'" class="meaning-type">
            ({{ t('content.analysis.figurative_prefix') }})
          </span>
          <span class="meaning-definition">{{ meaning.definition }}</span>
        </li>
      </ol>
    </div>

    <!-- Кнопка перевода остаётся без изменений -->
    <button
      v-else
      class="tooltip-translate-btn"
      :title="t('content.actions.inlineTranslate')"
      @click.stop="onRequestTranslate"
    >
      <Icon icon="mdi:translate" height="20px" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
// Базовые стили остаются прежними
.chinisik-inline-translation-tooltip {
  position: absolute;
  background-color: var(--bg-primary-color, #fff);
  color: var(--fg-primary-color, #333);
  border: 1px solid var(--border-secondary-color, #ccc);
  border-radius: 8px; // Немного увеличим радиус для красоты
  padding: 8px 12px; // Увеличим отступы
  font-size: 14px; // Установим базовый размер шрифта
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 2147483647;
  transform: translateX(-50%) translateY(-100%);
  min-width: 200px; // Зададим минимальную ширину
  max-width: 320px;
  text-align: left; // Выравнивание по левому краю для структурированного текста
  transition: opacity 0.1s ease-in-out;
  line-height: 1.5;

  .tooltip-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    .animate-spin {
      animation: chinisik-spin 0.8s linear infinite;
    }
  }

  .tooltip-translate-btn {
    /* ... без изменений ... */
  }
}

// Новые стили для контента анализа
.analysis-content {
  display: flex;
  flex-direction: column;
  gap: 4px; // Пространство между блоками

  .analysis-header {
    display: flex;
    align-items: baseline;
    gap: 8px;

    .word {
      font-size: 1.4em;
      font-weight: 600;
      color: var(--fg-primary-color, #000);
    }
    .pinyin {
      font-size: 1em;
      color: var(--fg-secondary-color, #555);
    }
  }

  .breakdown {
    font-size: 0.9em;
    color: var(--fg-tertiary-color, #777);
    .char {
      font-weight: 500;
    }
    .char-pinyin {
      margin-left: 2px;
    }
    .char-meaning {
      margin-left: 4px;
    }
    .separator {
      margin: 0 4px;
    }
  }

  .part-of-speech {
    font-size: 0.9em;
    font-style: italic;
    color: var(--fg-tertiary-color, #777);
  }

  .meanings-list {
    margin: 4px 0 0;
    padding-left: 18px; // Отступ для номеров списка
    list-style-type: decimal; // Используем стандартную нумерацию

    .meaning-item {
      margin-bottom: 4px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .meaning-type {
      font-style: italic;
      color: var(--fg-secondary-color, #555);
      margin-right: 4px;
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
