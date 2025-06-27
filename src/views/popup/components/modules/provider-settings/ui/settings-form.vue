<script setup lang="ts">
import type { ProviderField } from '../lib/provider-definitions'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  providerId: string
  fields: ProviderField[]
}>()

const model = defineModel<any>({ required: true })
const { t } = useI18n()
const showKey = ref(false)
</script>

<template>
  <div class="settings-form">
    <div v-for="field in fields" :key="field.key" class="form-group">
      <label :for="`${providerId}-${field.key}`">
        {{ field.label }}{{ field.isOptional ? ` ${t('popup.optionalLabel')}` : '' }}:
      </label>
      <div v-if="field.type === 'password'" class="input-group">
        <input
          :id="`${providerId}-${field.key}`"
          v-model="model[field.key]"
          :type="showKey ? 'text' : 'password'"
          :placeholder="field.placeholder"
        >
        <button class="toggle-btn" :title="showKey ? t('popup.tooltips.hideKey') : t('popup.tooltips.showKey')" @click="showKey = !showKey">
          {{ showKey ? '👁️' : '🔒' }}
        </button>
      </div>

      <input
        v-else
        :id="`${providerId}-${field.key}`"
        v-model="model[field.key]"
        :type="field.type"
        :placeholder="field.placeholder"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
input[type='text'],
input[type='password'],
input[type='url'] {
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
input[type='text']::placeholder,
input[type='password']::placeholder,
input[type='url']::placeholder {
  color: var(--fg-tertiary-color);
}

.input-group input:focus,
input:focus {
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
</style>
