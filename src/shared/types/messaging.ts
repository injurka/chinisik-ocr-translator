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

export type RuntimeMessage =
  | CaptureAreaMessage
  | StartSelectionMessage
  | ShowTranslationMessage
  | ShowErrorMessage

export type MessageSender = browser.Runtime.MessageSender

export interface CaptureAndTranslateResponse {
  success?: boolean
  translation?: string
  error?: string
}
