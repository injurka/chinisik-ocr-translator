<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

function highlightHotkey(text: string): string {
  return text.replace(/Ctrl\+Shift\+S/g, '<kbd>Ctrl+Shift+S</kbd>')
}
</script>

<template>
  <div class="instructions">
    <h3>{{ t('popup.instructionsTitle') }}</h3>
    <ol>
      <li v-for="(item, index) in tm('popup.instructions')" :key="index">
        <span v-html="highlightHotkey(item as string)" />
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.instructions {
  background-color: var(--bg-secondary-color, #f7f7f7);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px var(--bg-overlay-primary-color);
  margin-top: 20px;
  margin-bottom: 20px;
}

.instructions h3 {
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

:deep(kbd) {
  background: var(--bg-tertiary-color, #f3f3f3);
  border: 1px solid var(--border-secondary-color);
  border-radius: 3px;
  padding: 2px 5px;
  font-size: 0.9em;
  font-family: var(--ocr-chinisik-base-font-family);
  color: var(--fg-primary-color, #333);
}
</style>
