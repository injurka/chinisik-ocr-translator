import type { ITranslationProvider } from './services/all/types'
import { ALL_KEYS } from '../constant'

const requestControllers: Record<keyof ITranslationProvider, AbortController> = ALL_KEYS.reduce((acc, v) => {
  acc[v] = new AbortController()
  return acc
}, {} as Record<keyof ITranslationProvider, AbortController>)

export { requestControllers }
