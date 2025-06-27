<script lang="ts" setup>
import type { AreaToCapture } from '../../../../../shared/types'
import { useSelection } from '../composables'
import SelectionBox from './sections/selection-box.vue'
import Tooltip from './sections/tooltip.vue'

const emits = defineEmits<{ handleSelection: [area: AreaToCapture] }>()
const isOverlayVisible = defineModel<boolean>({ required: true })

const {
  isSelecting,
  overlayCursor,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  cancelSelectionOnLeave,
  selectionBox,
  selectionBoxStyle,
  tooltipStyle,
} = useSelection(isOverlayVisible, (area: AreaToCapture) => emits('handleSelection', area))
</script>

<template>
  <div
    v-show="isOverlayVisible"
    class="chinisik-selection-overlay"
    :style="{ cursor: overlayCursor }"
    @mousedown.left.prevent="handleMouseDown"
    @mousemove.prevent="handleMouseMove"
    @mouseup.left.prevent="handleMouseUp"
    @mouseleave="cancelSelectionOnLeave"
  >
    <SelectionBox v-if="selectionBox.width > 0 && selectionBox.height > 0" :style="selectionBoxStyle" />
    <Tooltip v-if="isSelecting" :style="tooltipStyle" :dimensions="{ width: selectionBox.width, height: selectionBox.height }" />
  </div>
</template>

<style scoped>
.chinisik-selection-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2147483646;
  user-select: none;
}
</style>
