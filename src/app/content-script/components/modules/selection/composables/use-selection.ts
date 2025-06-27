import type { ModelRef } from 'vue'
import type { AreaToCapture } from '../../../../../shared/types'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

export function useSelection(
  isOverlayVisible: ModelRef<boolean, string, boolean, boolean>,
  handleSelection: (area: AreaToCapture) => void,
) {
  const isSelecting = ref(false)
  const startPos = reactive({ x: 0, y: 0 })
  const currentPos = reactive({ x: 0, y: 0 })

  const selectionBox = reactive({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const overlayCursor = computed(() => (isOverlayVisible.value ? 'crosshair' : 'default'))

  const selectionBoxStyle = computed(() => ({
    left: `${selectionBox.x}px`,
    top: `${selectionBox.y}px`,
    width: `${selectionBox.width}px`,
    height: `${selectionBox.height}px`,
  }))

  const tooltipStyle = computed(() => ({
    left: `${currentPos.x + 15}px`,
    top: `${currentPos.y + 15}px`,
  }))

  function resetSelectionState() {
    isSelecting.value = false
    selectionBox.x = 0
    selectionBox.y = 0
    selectionBox.width = 0
    selectionBox.height = 0
    startPos.x = 0
    startPos.y = 0
    currentPos.x = 0
    currentPos.y = 0
  }

  function handleMouseDown(event: MouseEvent) {
    if (!isOverlayVisible.value)
      return
    isSelecting.value = true
    startPos.x = event.clientX
    startPos.y = event.clientY
    currentPos.x = event.clientX
    currentPos.y = event.clientY
    selectionBox.x = event.clientX
    selectionBox.y = event.clientY
    selectionBox.width = 0
    selectionBox.height = 0
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isSelecting.value)
      return
    currentPos.x = event.clientX
    currentPos.y = event.clientY
    selectionBox.x = Math.min(startPos.x, currentPos.x)
    selectionBox.y = Math.min(startPos.y, currentPos.y)
    selectionBox.width = Math.abs(startPos.x - currentPos.x)
    selectionBox.height = Math.abs(startPos.y - currentPos.y)
  }

  function handleMouseUp() {
    if (!isSelecting.value)
      return
    isSelecting.value = false
    isOverlayVisible.value = false

    document.body.style.userSelect = 'auto'
    if (selectionBox.width < 5 || selectionBox.height < 5) {
      resetSelectionState()
      return
    }

    const dpr = window.devicePixelRatio || 1
    const areaToCapture: AreaToCapture = {
      x: selectionBox.x * dpr,
      y: selectionBox.y * dpr,
      width: selectionBox.width * dpr,
      height: selectionBox.height * dpr,
    }

    handleSelection(areaToCapture)
    resetSelectionState()
  }

  function cancelSelectionOnLeave(event: MouseEvent) {
    if (isSelecting.value
      && (event.clientX <= 0 || event.clientY <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)
    ) {
      isSelecting.value = false
      isOverlayVisible.value = false
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (isOverlayVisible.value) {
        isOverlayVisible.value = false
        resetSelectionState()
        document.body.style.userSelect = 'auto'
      }
    }
  }

  // watch(
  //   isOverlayVisible,
  //   value => !!value && resetSelectionState(),
  // )

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })

  return {
    isOverlayVisible,
    isSelecting,
    overlayCursor,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cancelSelectionOnLeave,
    selectionBox,
    selectionBoxStyle,
    tooltipStyle,
    currentPos,
  }
}
