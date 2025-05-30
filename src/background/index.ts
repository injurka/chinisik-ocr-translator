import type { MessageSender, RuntimeMessage, ShowErrorMessage, ShowTranslationMessage } from '../shared/types/messaging'
import browser from 'webextension-polyfill'
import { performTranslate } from '../shared/api'
import { cropImage, isCaptureAreaMessage } from '../shared/utils/helpers'
import { initializeStorageDefaults } from '../shared/utils/initialize-storage-defaults'

initializeStorageDefaults()

browser.commands.onCommand.addListener(async (command) => {
  if (command === 'capture-area') {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    if (tabs[0] && tabs[0].id) {
      try {
        await browser.tabs.sendMessage(tabs[0].id, { action: 'startSelection' })
      }
      catch (error) {
        console.error('Failed to send \'startSelection\' message. Content script might not be ready or on a restricted page.', error)
        browser.notifications.create({
          type: 'basic',
          iconUrl: browser.runtime.getURL('icon/128.png'),
          title: 'Capture Error',
          message: 'Could not start capture on this page. Please reload the page or try a different one.',
        })
      }
    }
    else {
      console.error('No active tab found to start selection.')
    }
  }
})

browser.runtime.onMessage.addListener(
  async (message: unknown, sender: MessageSender) => {
    if (typeof message !== 'object' || message === null || !('action' in message) || typeof (message as any).action !== 'string') {
      console.warn('Received malformed message:', message)
      return
    }

    const request = message as RuntimeMessage

    if (isCaptureAreaMessage(request)) {
      if (!sender.tab || !sender.tab.id) {
        console.error('Request did not come from a valid tab.')
        return { error: 'Invalid request source.' }
      }
      const tabId = sender.tab.id

      try {
        const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
        if (!imageDataUrl) {
          throw new Error('Failed to capture tab visible content.')
        }
        const area = request.area
        const croppedImageDataUrl = await cropImage(
          imageDataUrl,
          area.x,
          area.y,
          area.width,
          area.height,
        )

        const translation = await performTranslate(croppedImageDataUrl)
        const translationMsg: ShowTranslationMessage = {
          action: 'showTranslation',
          data: {
            ...translation,
            croppedImage: croppedImageDataUrl,
          },
        }
        browser.tabs.sendMessage(tabId, translationMsg)

        return { success: true, translation }
      }
      catch (error: any) {
        console.error('Error during capture and translate process:', error)
        const errorMsg: ShowErrorMessage = {
          action: 'showError',
          error: error.message || 'An unknown error occurred during translation.',
        }
        browser.tabs.sendMessage(tabId, errorMsg)
        return { error: error.message || 'Unknown error' }
      }
    }
    else {
      console.warn('Received message with unhandled action:', request.action)
    }

    return true
  },
)
