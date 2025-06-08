import type { ITranslationProvider } from '../types/provider'
import { TranslationProvider } from '../../../../types'
import { ChinisikProvider } from '../providers/chinisik/provider'

// Реестр конструкторов провайдеров
const providerMap: Record<TranslationProvider, (new () => ITranslationProvider) | undefined> = {
  [TranslationProvider.Default]: ChinisikProvider,
  [TranslationProvider.Gemini]: undefined,
}

export function getTranslationProvider(providerId: TranslationProvider): ITranslationProvider {
  const ProviderClass = providerMap[providerId]

  if (!ProviderClass) {
    console.warn(`Unsupported translation provider: ${providerId}. Falling back to Chinisik.`)
    return new ChinisikProvider()
  }
  return new ProviderClass()
}
