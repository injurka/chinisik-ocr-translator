<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  style: Record<string, string>
  dimensions: { width: number, height: number }
}>()
</script>

<template>
  <div class="chinisik-tooltip" :style="style">
    {{ Math.round(dimensions.width) }} x {{ Math.round(dimensions.height) }}
  </div>
</template>

<style scoped>
.chinisik-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 3px 7px;
  border-radius: 3px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 2147483647;
}
</style>
