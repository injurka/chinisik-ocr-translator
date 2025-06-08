import type { ITranslationProvider } from './services/all/types'

const abortControllers: Record<keyof ITranslationProvider, AbortController> = {} as any

export { abortControllers }
