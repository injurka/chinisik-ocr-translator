<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ProviderSettings } from './components/modules/provider-settings'
import { Footer } from './components/shared/footer'
import { Header } from './components/shared/header'

const { t } = useI18n()
</script>

<template>
  <div class="popup">
    <Header :title="t('popup.title')" />

    <ProviderSettings />

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.popup {
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 380px;
  font-family: var(--ocr-chinisik-base-font-family);
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color, #333);
}
</style>
