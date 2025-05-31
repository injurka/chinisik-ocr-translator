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
    color: var(--fg-secondary-color);

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
