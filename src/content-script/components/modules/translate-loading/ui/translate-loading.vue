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
  font-family: var(--font-family-base);
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
