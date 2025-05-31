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

export interface ITranslationProvider {
  /**
   * Переводит изображение.
   * @param params Параметры запроса, включая imageDataUrl.
   * @param config Конфигурация для данного провайдера (API ключ, URL и т.д.).
   * @returns Promise с результатом перевода.
   */
  translate: (params: TranslateRequestParams, config: BaseProviderConfig) => Promise<TranslationResult>

  
  analyzeLexically: (params: LexicalAnalysisRequestParams, config: BaseProviderConfig) => Promise<LexicalAnalysisResult>
}
