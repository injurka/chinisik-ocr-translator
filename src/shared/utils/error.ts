/**
 * Кастомный класс ошибки для локализуемых сообщений.
 * @param key - Ключ из файлов локализации (например, 'errors.api.generic').
 * @param params - Объект с параметрами для подстановки в строку (например, { provider: 'Chinisik' }).
 * @param options - Стандартные опции Error.
 */
export class LocalizedError extends Error {
  public readonly key: string
  public readonly params?: Record<string, any>

  constructor(key: string, params?: Record<string, any>, options?: ErrorOptions) {
    const debugMessage = `LocalizedError: ${key} ${params ? JSON.stringify(params) : ''}`
    super(debugMessage, options)

    this.name = 'LocalizedError'
    this.key = key
    this.params = params
  }
}
