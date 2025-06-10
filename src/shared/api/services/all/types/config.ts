import type { TranslationProvider } from '../../../../types'

// Базовая конфигурация, общая для всех
export interface BaseProviderConfig {
  apiKey?: string
  apiUrl?: string
}

export interface ChinisikConfig extends BaseProviderConfig {
  apiKey: string // У Chinisik ключ обязателен
  apiUrl: string // У Chinisik URL тоже важен, может иметь дефолт
}

export interface GeminiConfig extends BaseProviderConfig {
  apiKey: string
  model?: string
}

export interface CustomConfig extends BaseProviderConfig {
  apiKey?: string // Не все OpenAI-совместимые API требуют ключ
  apiUrl: string // URL обязателен
  model: string // Модель обязательна
  ttsModel?: string
}

export interface AllProviderConfigs {
  [TranslationProvider.Default]?: Partial<ChinisikConfig>
  [TranslationProvider.Gemini]?: Partial<GeminiConfig>
  [TranslationProvider.Custom]?: Partial<CustomConfig>
}
