<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'

const extensionVersion = ref(browser.runtime.getManifest().version)

const { t } = useI18n()
</script>

<template>
  <div class="footer">
    <small>{{ t('popup.version', { extensionVersion }) }}</small>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 12px 16px;
  text-align: right;
  font-size: 0.75em;
  color: var(--fg-tertiary-color);
  border-top: 1px solid var(--border-secondary-color);
  background-color: var(--bg-secondary-color);
  // Прижимаем футер к низу
  margin-top: auto;
}
</style>
