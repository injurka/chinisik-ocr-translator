import type { GenericLlmRawQueryMessage, GetLexicalAnalysisMessage, MessageSender, RuntimeMessage, ShowErrorMessage, ShowTranslationMessage, TextToSpeechMessage } from '../shared/types/messaging'
import browser from 'webextension-polyfill'
import { performGenericLLMRawQuery, performLexicalAnalysisService, performTextToSpeechService, performTranslate } from '../shared/api'
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
    else if (request.action === 'getLexicalAnalysis') {
      const getLexicalAnalysisMessage = request as GetLexicalAnalysisMessage

      if (!getLexicalAnalysisMessage.sentence) {
        console.error('Sentence is missing for lexical analysis.')
        return { error: 'Sentence is missing for lexical analysis.' }
      }
      try {
        const analysisResult = await performLexicalAnalysisService(getLexicalAnalysisMessage.sentence)

        return { data: analysisResult }
      }
      catch (error: any) {
        console.error('Error in background performing lexical analysis:', error)

        return { error: error.message || 'Unknown error during lexical analysis.' }
      }
    }
    else if (request.action === 'textToSpeech') {
      const ttsMessage = request as TextToSpeechMessage
      if (!ttsMessage.text) {
        console.error('Text is missing for text-to-speech.')
        return { error: 'Text is missing for text-to-speech.' }
      }
      try {
        const audioBlob = await performTextToSpeechService(ttsMessage.text)

        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            if (typeof reader.result === 'string') {
              resolve(reader.result)
            }
            else {
              reject(new Error('Failed to read blob as Data URL in background.'))
            }
          }
          reader.onerror = (error) => {
            console.error('FileReader error in background:', error)
            reject(new Error('FileReader failed to read blob in background.'))
          }
          reader.readAsDataURL(audioBlob)
        })

        return { audioDataUrl: dataUrl }
      }
      catch (error: any) {
        console.error('Error in background performing text-to-speech:', error)
        return { error: error.message || 'Unknown error during text-to-speech.' }
      }
    }
    else if (request.action === 'genericLlmRawQuery') {
      const llmQueryMessage = request as GenericLlmRawQueryMessage
      if (!llmQueryMessage.userPrompt || !llmQueryMessage.systemPrompt) {
        console.error('User prompt or system prompt is missing for generic LLM query.')
        return { error: 'User prompt or system prompt is missing.' }
      }
      try {
        const result = await performGenericLLMRawQuery(llmQueryMessage.userPrompt, llmQueryMessage.systemPrompt)
        return { data: result }
      }
      catch (error: any) {
        console.error('Error in background performing generic LLM query:', error)
        return { error: error.message || 'Unknown error during generic LLM query.' }
      }
    }
    else {
      console.warn('Received message with unhandled action:', request.action)
    }

    return true
  },
)
