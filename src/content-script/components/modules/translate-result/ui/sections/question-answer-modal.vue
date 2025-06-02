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
    font-size: 1rem;
    font-weight: 500;
    color: var(--fg-primary-color, #212529);
  }

  .close-btn-header {
    background: none;
    border: none;
    font-size: 22px;
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
  font-size: 0.95rem;

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
      font-size: 0.95rem;
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
      font-size: 0.9rem;
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
