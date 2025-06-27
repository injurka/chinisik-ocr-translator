<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '~/app/components/ui/button'
import { useTheme } from '~/shared/composables'

const { selectedTheme: theme, themes, applyTheme } = useTheme()

function toggleTheme() {
  const currentIndex = themes.indexOf(theme.value)
  const nextIndex = (currentIndex + 1) % themes.length
  const nextTheme = themes[nextIndex]
  applyTheme(nextTheme)
}
</script>

<template>
  <Button variant="ghost" class="w-9 h-9 p-0" @click="toggleTheme">
    <Icon icon="ph:sun-bold" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 rainy:-rotate-90 rainy:scale-0" />
    <Icon icon="ph:moon-bold" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 rainy:scale-0" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
