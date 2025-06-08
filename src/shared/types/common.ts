type Theme = 'light' | 'dark' | 'rainy'

interface AreaToCapture {
  x: number
  y: number
  width: number
  height: number
}

enum TranslationProvider {
  Default = 'chinisik',
  Gemini = 'gemini',
  // Ollama = 'ollama',
}

interface TranslationResult {
  source: string
  translate: string
  transcription: string
}

interface TranslationResultData extends TranslationResult {
  croppedImage: string
}

interface BoundingBox {
  x0: number
  y0: number
  x1: number
  y1: number
}

type LlmResponseType = 'text' | 'json_object'

export {
  AreaToCapture,
  BoundingBox,
  LlmResponseType,
  Theme,
  TranslationProvider,
  TranslationResult,
  TranslationResultData,
}
