import type { Ref } from 'vue'
import type { TranslateInlineTextMessage } from '~/shared/types/messaging'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import browser from 'webextension-polyfill'

const TOOLTIP_OFFSET_Y = 8

interface UseInlineTranslationOptions {
  targetSelector: string
  rootElementRef?: Ref<HTMLElement | null>
  tooltipElementRef?: Ref<HTMLElement | null | undefined>
}

export function useInlineTranslation(options: UseInlineTranslationOptions) {
  const { targetSelector, rootElementRef, tooltipElementRef } = options

  const isTooltipVisible = ref(false)
  const tooltipPosition = reactive({ top: 0, left: 0, display: 'none' })
  const isLoading = ref(false)
  const translatedText = ref<string | null>(null)
  const currentSelectedText = ref<string | null>(null)
  let hasValidSelection = false

  function hideTooltip() {
    isTooltipVisible.value = false
    translatedText.value = null
    isLoading.value = false
    tooltipPosition.display = 'none'
    hasValidSelection = false
  }

  async function handleTranslateRequest() {
    if (!currentSelectedText.value || isLoading.value)
      return

    isLoading.value = true
    translatedText.value = null

    try {
      const message: TranslateInlineTextMessage = {
        action: 'translateInlineText',
        text: currentSelectedText.value,
      }
      const response: { data?: string, error?: string } = await browser.runtime.sendMessage(message)

      if (response.error) {
        translatedText.value = `Error: ${response.error}`
        console.error('Inline translation error:', response.error)
      }
      else if (response.data) {
        translatedText.value = response.data
      }
      else {
        translatedText.value = 'No translation received.'
      }
    }
    catch (error) {
      console.error('Failed to send inline translation request:', error)
      translatedText.value = 'Translation request failed.'
    }
    finally {
      isLoading.value = false
    }
  }

  const handleMouseUp = () => {
    setTimeout(() => {
      const selection = document.getSelection()
      if (!selection || selection.isCollapsed || selection.rangeCount === 0 || selection.toString().trim() === '') {
        if (isTooltipVisible.value && !hasValidSelection) {
          // hideTooltip()
        }
        return
      }

      const range = selection.getRangeAt(0)
      let selectedNode = range.commonAncestorContainer
      if (selectedNode.nodeType === Node.TEXT_NODE) {
        selectedNode = selectedNode.parentNode!
      }

      const targetElement = (selectedNode as HTMLElement).closest(targetSelector)

      if (targetElement && (!rootElementRef || !rootElementRef.value || rootElementRef.value.contains(targetElement))) {
        const newSelectedText = selection.toString().trim()

        if (newSelectedText === currentSelectedText.value && isTooltipVisible.value) {
          const rect = range.getBoundingClientRect()
          tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
          tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
          tooltipPosition.display = 'block'
          hasValidSelection = true
          return
        }

        currentSelectedText.value = newSelectedText
        translatedText.value = null
        isLoading.value = false

        const rect = range.getBoundingClientRect()
        tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
        tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
        tooltipPosition.display = 'block'

        isTooltipVisible.value = true
        hasValidSelection = true
      }
    }, 0)
  }

  const handleSelectionChange = () => {
    const selection = document.getSelection()
    if (!selection || selection.isCollapsed || selection.rangeCount === 0 || selection.toString().trim() === '') {
      if (isTooltipVisible.value && !hasValidSelection) {
        // hideTooltip(); // Отложим это до handleDocumentClick
      }
      hasValidSelection = false
    }
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (!isTooltipVisible.value)
      return

    const target = event.target as Node

    if (tooltipElementRef?.value?.contains(target)) {
      return
    }

    setTimeout(() => {
      const selection = document.getSelection()
      if (selection && !selection.isCollapsed && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        let selectedNode = range.commonAncestorContainer
        if (selectedNode.nodeType === Node.TEXT_NODE) {
          selectedNode = selectedNode.parentNode!
        }
        const targetGlyphElement = (selectedNode as HTMLElement).closest(targetSelector)

        if (targetGlyphElement
          && (!rootElementRef || !rootElementRef.value || rootElementRef.value.contains(targetGlyphElement))
          && selection.toString().trim() === currentSelectedText.value
        ) {
          const rect = range.getBoundingClientRect()
          tooltipPosition.top = rect.top + window.scrollY - TOOLTIP_OFFSET_Y
          tooltipPosition.left = rect.left + window.scrollX + rect.width / 2
          return
        }
      }
      hideTooltip()
    }, 0)
  }

  onMounted(() => {
    document.addEventListener('selectionchange', handleSelectionChange)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('click', handleDocumentClick, true)
  })

  onUnmounted(() => {
    document.removeEventListener('selectionchange', handleSelectionChange)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('click', handleDocumentClick, true)
  })

  return {
    isTooltipVisible,
    tooltipPosition,
    isLoading,
    translatedText,
    currentSelectedText,
    handleTranslateRequest,
  }
}
