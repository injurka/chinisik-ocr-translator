import type { TranslationProvider } from '../../../types'

// Базовая конфигурация, общая для всех
export interface BaseProviderConfig {
  apiKey?: string
  apiUrl?: string
  // другие общие опциональные параметры
}

// Специфичные конфигурации для каждого провайдера
export interface ChinisikConfig extends BaseProviderConfig {
  apiKey: string // У Chinisik ключ обязателен
  apiUrl: string // У Chinisik URL тоже важен, может иметь дефолт
}

export interface GeminiConfig extends BaseProviderConfig {
  apiKey: string
  model?: string // Например, 'gemini-pro-vision'
}

export interface OllamaConfig extends BaseProviderConfig {
  apiUrl: string // У Ollama обычно только URL и модель
  model?: string
  keepAlive?: string // Специфичный параметр Ollama
}

// Тип для хранения всех конфигураций в browser.storage.sync
export interface AllProviderConfigs {
  [TranslationProvider.Default]?: Partial<ChinisikConfig>
  [TranslationProvider.Gemini]?: Partial<GeminiConfig>
  // [TranslationProvider.OLLAMA]?: Partial<OllamaConfig>
}

// Пример структуры в storage:
// {
//   selectedProvider: 'chinisik',
//   providerSettings: {
//     chinisik: { apiKey: 'xxx', apiUrl: 'https://...' },
//     gemini: { apiKey: 'yyy' },
//     ollama: { apiUrl: 'http://localhost:11434' }
//   }
// }
