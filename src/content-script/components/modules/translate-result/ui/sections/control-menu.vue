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
