import type { AbortRequestMessage, CaptureAreaMessage, GetLexicalAnalysisMessage, MessageSender, QuestionForAnswerMessage, ShowTranslationMessage, TextToSpeechMessage, TranslateInlineTextMessage } from '../shared/types'
import browser from 'webextension-polyfill'
import { requestControllers } from '~/shared/api/request-controllers'
import { LocalizedError } from '~/shared/utils/error'
import {
  performInlineTextTranslate,
  performLexicalAnalysisService,
  performQuestionForAnswer,
  performTextToSpeechService,
  performTranslate,
} from '../shared/api'
import { cropImage } from '../shared/utils/helpers'
import { blobToDataUrl, sendErrorToTab } from './utils'

// --- Обработчики для каждого типа сообщения ---

async function handleCaptureAndTranslate(request: CaptureAreaMessage, sender: MessageSender) {
  if (!sender.tab?.id) {
    throw new LocalizedError('errors.messaging.noTabId')
  }
  const { tab: { id: tabId } } = sender
  const { area } = request

  try {
    const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
    if (!imageDataUrl) {
      throw new LocalizedError('errors.capture.captureFailed')
    }

    const croppedImageDataUrl = await cropImage(imageDataUrl, area.x, area.y, area.width, area.height)
    const translation = await performTranslate(croppedImageDataUrl)

    const translationMsg: ShowTranslationMessage = {
      action: 'showTranslation',
      data: { ...translation, croppedImage: croppedImageDataUrl },
    }
    browser.tabs.sendMessage(tabId, translationMsg)

    return { success: true, translation }
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      return

    sendErrorToTab(tabId, error, 'captureAndTranslate')

    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleGetLexicalAnalysis(request: GetLexicalAnalysisMessage) {
  if (!request.sentence)
    throw new LocalizedError('errors.messaging.missingSentence')

  try {
    const analysisResult = await performLexicalAnalysisService(request.sentence)
    return { data: analysisResult }
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      return

    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleTextToSpeech(request: TextToSpeechMessage) {
  if (!request.text)
    throw new LocalizedError('errors.messaging.missingTextTts')

  try {
    const audioBlob = await performTextToSpeechService(request.text)
    const audioDataUrl = await blobToDataUrl(audioBlob)
    return { audioDataUrl }
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      return

    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleQuestionForAnswer(request: QuestionForAnswerMessage) {
  if (!request.userPrompt || !request.systemPrompt)
    throw new LocalizedError('errors.messaging.missingPrompt')

  try {
    const result = await performQuestionForAnswer(request.userPrompt, request.systemPrompt)

    return { data: result }
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      return

    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleTranslateInlineText(request: TranslateInlineTextMessage) {
  if (!request.text) {
    throw new LocalizedError('errors.messaging.missingTextInline')
  }
  try {
    const result = await performInlineTextTranslate(request.text)
    return { data: result }
  }
  catch (error) {
    if (error instanceof Error && error.cause === 'AbortController')
      return

    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleAbortRequest(request: AbortRequestMessage) {
  request.keys.forEach((key) => {
    requestControllers[key].abort()
  })
}

export const messageHandlers: Record<string, (request: any, sender: MessageSender) => Promise<any>> = {
  captureAndTranslate: handleCaptureAndTranslate,
  getLexicalAnalysis: handleGetLexicalAnalysis,
  textToSpeech: handleTextToSpeech,
  translateInlineText: handleTranslateInlineText,
  questionForAnswer: handleQuestionForAnswer,
  abortRequest: handleAbortRequest,
}
