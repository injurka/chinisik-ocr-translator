import type browser from 'webextension-polyfill'
import type { AreaToCapture, TranslationResultData } from './common'

export interface BaseMessage {
  action: string
}

export interface CaptureAreaMessage extends BaseMessage {
  action: 'captureAndTranslate'
  area: AreaToCapture
  targetLanguage?: string
}

export interface StartSelectionMessage extends BaseMessage {
  action: 'startSelection'
}

export interface ShowTranslationMessage extends BaseMessage {
  action: 'showTranslation'
  data: TranslationResultData
}

export interface ShowErrorMessage extends BaseMessage {
  action: 'showError'
  error: string
}

export interface GetLexicalAnalysisMessage extends BaseMessage {
  action: 'getLexicalAnalysis'
  sentence: string
}

export interface TextToSpeechMessage extends BaseMessage {
  action: 'textToSpeech'
  text: string
}

export interface GenericLlmRawQueryMessage extends BaseMessage {
  action: 'genericLlmRawQuery'
  userPrompt: string
  systemPrompt: string
}

export interface TranslateInlineTextMessage extends BaseMessage {
  action: 'translateInlineText'
  text: string
  systemPrompt?: string
}

export type RuntimeMessage =
  | CaptureAreaMessage
  | StartSelectionMessage
  | ShowTranslationMessage
  | ShowErrorMessage
  | GetLexicalAnalysisMessage
  | TextToSpeechMessage
  | GenericLlmRawQueryMessage
  | TranslateInlineTextMessage;

export type MessageSender = browser.Runtime.MessageSender

export interface CaptureAndTranslateResponse {
  success?: boolean
  translation?: string
  error?: string
}
