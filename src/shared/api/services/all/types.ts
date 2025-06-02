import type { BaseProviderConfig } from './config'
import type { TranslationResult } from '~/shared/types'

export interface LexicalAnalysisRequestParams {
  user: string
  system: string
}
export type LexicalAnalysisResult = string

export interface TranslateRequestParams {
  imageDataUrl: string
  targetLanguage?: string
}

export type TextToSpeechResult = Blob
export interface TextToSpeechRequestParams {
  text: string
  model?: string
  voice?: string
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac'
  speed?: number
}

export interface ITranslationProvider {
  /**
   * Переводит изображение.
   * @param params Параметры запроса, включая imageDataUrl.
   * @param config Конфигурация для данного провайдера (API ключ, URL и т.д.).
   * @returns Promise с результатом перевода.
   */
  translate: (params: TranslateRequestParams, config: BaseProviderConfig) => Promise<TranslationResult>

  /**
   * New: Converts text to speech.
   * @param params Parameters for the text-to-speech request, including the text.
   * @param config Configuration for this provider.
   * @returns Promise with the audio data as a Blob.
   */
  textToSpeech?: (params: TextToSpeechRequestParams, config: BaseProviderConfig) => Promise<TextToSpeechResult>

  analyzeLexically: (params: LexicalAnalysisRequestParams, config: BaseProviderConfig) => Promise<LexicalAnalysisResult>
}
