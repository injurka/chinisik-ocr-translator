import type { ChinisikConfig, CustomConfig, GeminiConfig } from '~/shared/api/services/all/types/config'
import { CHINISIK_DEFAULT_API_URL } from '~/shared/api/services/all/providers/chinisik/config'
import { TranslationProvider } from '~/shared/types'

export interface ProviderField {
  key: keyof ChinisikConfig | keyof GeminiConfig | keyof CustomConfig
  label: string
  type: 'text' | 'password' | 'url'
  placeholder?: string
  isOptional?: boolean
}

export interface ProviderUIDefinition {
  id: TranslationProvider
  name: string
  fields: ProviderField[]
  helpText?: string
  inDevelopment?: boolean
}

export function getProviderDefinitions(t: (key: string) => string): ProviderUIDefinition[] {
  return [
    {
      id: TranslationProvider.Default,
      name: t('popup.providers.chinisik.name'),
      fields: [
        { key: 'apiKey', label: t('popup.providers.chinisik.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.chinisik.apiKeyPlaceholder') },
        { key: 'apiUrl', label: t('popup.providers.chinisik.apiUrlLabel'), type: 'url', placeholder: CHINISIK_DEFAULT_API_URL, isOptional: true },
      ],
      helpText: t('popup.providers.chinisik.helpText'),
    },
    {
      id: TranslationProvider.Gemini,
      name: t('popup.providers.gemini.name'),
      inDevelopment: true,
      fields: [
        { key: 'apiKey', label: t('popup.providers.gemini.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.gemini.apiKeyPlaceholder') },
        { key: 'model', label: t('popup.providers.gemini.modelLabel'), type: 'text', placeholder: 'e.g., gemini-pro-vision', isOptional: true },
      ],
      helpText: t('popup.providers.gemini.helpText'),
    },
    {
      id: TranslationProvider.Custom,
      name: t('popup.providers.custom.name'),
      fields: [
        { key: 'apiUrl', label: t('popup.providers.custom.apiUrlLabel'), type: 'url', placeholder: t('popup.providers.custom.apiUrlPlaceholder') },
        { key: 'model', label: t('popup.providers.custom.modelLabel'), type: 'text', placeholder: t('popup.providers.custom.modelPlaceholder') },
        { key: 'ttsModel', label: t('popup.providers.custom.ttsModelLabel'), type: 'text', placeholder: t('popup.providers.custom.ttsModelPlaceholder') },
        { key: 'apiKey', label: t('popup.providers.custom.apiKeyLabel'), type: 'password', placeholder: t('popup.providers.custom.apiKeyPlaceholder') },
      ],
      helpText: t('popup.providers.custom.helpText'),
    },
  ]
}
