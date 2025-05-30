interface AreaToCapture {
  x: number
  y: number
  width: number
  height: number
}

enum TranslationProvider {
  Default = 'chinisik',
  Gemini = 'gemini',
}

interface TranslationResult {
  source: string
  translate: string
  transcription: string
}

interface TranslationResultData extends TranslationResult {
  croppedImage: string
}

export {
  AreaToCapture,
  TranslationProvider,
  TranslationResult,
  TranslationResultData,
}
