<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ProviderSettings } from './components/modules/provider-settings'
import { FlickeringGrid } from './components/shared/flickering-grid'
import { Footer } from './components/shared/footer'
import { Header } from './components/shared/header'

const { t } = useI18n()
</script>

<template>
  <div class="relative flex flex-col min-h-[600px] w-[380px] font-sans bg-background text-foreground">
    <FlickeringGrid
      class="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
      :square-size="4"
      :grid-gap="6"
      color="hsl(var(--primary))"
      :max-opacity="0.3"
      :flicker-chance="0.05"
    />

    <div class="relative z-10 flex flex-col h-full">
      <Header :title="t('popup.title')" />
      <main class="flex-grow">
        <ProviderSettings />
      </main>
      <Footer />
    </div>
  </div>
</template>
