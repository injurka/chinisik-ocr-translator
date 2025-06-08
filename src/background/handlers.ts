import type { CaptureAreaMessage, GenericLlmRawQueryMessage, GetLexicalAnalysisMessage, MessageSender, ShowTranslationMessage, TextToSpeechMessage, TranslateInlineTextMessage } from '../shared/types'
import browser from 'webextension-polyfill'
import { translateMinimalPrompt } from '~/shared/constant'
import { performAnalyzeLexically, performLexicalAnalysisService, performTextToSpeechService, performTranslate } from '../shared/api'
import { cropImage } from '../shared/utils/helpers'
import { blobToDataUrl, sendErrorToTab } from './utils'

// --- Обработчики для каждого типа сообщения ---

async function handleCaptureAndTranslate(request: CaptureAreaMessage, sender: MessageSender) {
  if (!sender.tab?.id) {
    return { error: 'Запрос должен исходить от вкладки.' }
  }
  const { tab: { id: tabId } } = sender
  const { area } = request

  try {
    const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
    if (!imageDataUrl) {
      throw new Error('Не удалось захватить видимый контент вкладки.')
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
    sendErrorToTab(tabId, error, 'captureAndTranslate')
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleGetLexicalAnalysis(request: GetLexicalAnalysisMessage) {
  if (!request.sentence) {
    return { error: 'Предложение отсутствует для лексического анализа.' }
  }
  try {
    const analysisResult = await performLexicalAnalysisService(request.sentence)
    return { data: analysisResult }
  }
  catch (error) {
    console.error('Ошибка при лексическом анализе:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleTextToSpeech(request: TextToSpeechMessage) {
  if (!request.text) {
    return { error: 'Текст отсутствует для озвучивания.' }
  }
  try {
    const audioBlob = await performTextToSpeechService(request.text)
    const audioDataUrl = await blobToDataUrl(audioBlob)
    return { audioDataUrl }
  }
  catch (error) {
    console.error('Ошибка при озвучивании текста:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleGenericLlmQuery(request: GenericLlmRawQueryMessage) {
  if (!request.userPrompt || !request.systemPrompt) {
    return { error: 'Отсутствует пользовательский или системный промпт.' }
  }
  try {
    const result = await performAnalyzeLexically(request.userPrompt, request.systemPrompt)
    return { data: result }
  }
  catch (error) {
    console.error('Ошибка при выполнении LLM запроса:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

async function handleTranslateInlineText(request: TranslateInlineTextMessage) {
  if (!request.text) {
    return { error: 'Текст отсутствует для инлайн-перевода.' }
  }
  try {
    const result = await performAnalyzeLexically(request.text, translateMinimalPrompt())
    return { data: result }
  }
  catch (error) {
    console.error('Ошибка при инлайн-переводе:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Карта обработчиков для диспатчера
export const messageHandlers: Record<string, (request: any, sender: MessageSender) => Promise<any>> = {
  captureAndTranslate: handleCaptureAndTranslate,
  getLexicalAnalysis: handleGetLexicalAnalysis,
  textToSpeech: handleTextToSpeech,
  genericLlmRawQuery: handleGenericLlmQuery,
  translateInlineText: handleTranslateInlineText,
}
