<script setup lang="ts">
import { ThemeSwitcher } from '../../theme-switcher'

defineProps<{ title: string }>()
</script>

<template>
  <div class="p-4 text-center text-primary-foreground bg-nice">
    <div class="flex justify-between items-center">
      <h2 class="m-0 text-lg font-semibold flex-grow">
        {{ title }}
      </h2>

      <ThemeSwitcher />
    </div>
  </div>
</template>
