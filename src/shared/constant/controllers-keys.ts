import type { ITranslationProvider } from '../api/services/all/types'

export const ALL_KEYS = [
  'translate',
  'textToSpeech',
  'analyzeLexically',
  'inlineTextTranslate',
  'questionForAnswer',
] satisfies (keyof ITranslationProvider)[]
