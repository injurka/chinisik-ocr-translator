import type { ITranslationProvider } from './types'
import { TranslationProvider } from '../../../types'
import { ChinisikProvider } from './providers/chinisik/provider'
// import { GeminiProvider } from './providers/gemini/GeminiProvider'; // Когда будет готово
// import { OllamaProvider } from './providers/ollama/OllamaProvider'; // Когда будет готово

// Реестр конструкторов провайдеров
const providerMap: Record<TranslationProvider, (new () => ITranslationProvider) | undefined> = {
  [TranslationProvider.Default]: ChinisikProvider,
  [TranslationProvider.Gemini]: undefined,
  // [TranslationProvider.OLLAMA]: OllamaProvider,
}

export function getTranslationProvider(providerId: TranslationProvider): ITranslationProvider {
  const ProviderClass = providerMap[providerId]

  if (!ProviderClass) {
    console.warn(`Unsupported translation provider: ${providerId}. Falling back to Chinisik.`)
    return new ChinisikProvider()
  }
  return new ProviderClass()
}
