<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

function highlightHotkey(text: string): string {
  return text.replace(/Ctrl\+Shift\+S/g, '<kbd>Ctrl+Shift+S</kbd>')
}
</script>

<template>
  <div class="my-5 bg-muted p-4 rounded-md shadow-sm">
    <h3 class="mt-0 mb-3 font-medium text-foreground border-b border-border pb-1.5">
      {{ t('popup.instructionsTitle') }}
    </h3>

    <ol class="list-decimal list-inside text-sm leading-relaxed">
      <li
        v-for="(item, index) in tm('popup.instructions')"
        :key="index"
        class="mb-2 text-muted-foreground last:mb-0"
      >
        <span v-html="highlightHotkey(item as string)" />
      </li>
    </ol>
  </div>
</template>
