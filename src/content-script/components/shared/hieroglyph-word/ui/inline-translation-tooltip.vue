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
