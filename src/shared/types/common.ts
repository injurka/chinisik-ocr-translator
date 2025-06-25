type Theme = 'light' | 'dark' | 'rainy'
type Language = 'ru' | 'en'

interface AreaToCapture {
  x: number
  y: number
  width: number
  height: number
}

enum TranslationProvider {
  Default = 'chinisik',
  Gemini = 'gemini',
  Custom = 'custom',
}

interface TranslationResult {
  source: string
  translate: string
  transcription: string
}

interface TranslationResultData extends TranslationResult {
  croppedImage: string
}

interface HistoryItem extends TranslationResultData {
  id: number
  timestamp: string
}

export {
  AreaToCapture,
  HistoryItem,
  Language,
  Theme,
  TranslationProvider,
  TranslationResult,
  TranslationResultData,
}
