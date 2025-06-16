import type { ShowErrorMessage } from '~/shared/types'
import browser from 'webextension-polyfill'
import { LocalizedError } from '~/shared/utils/error'

/**
 * Получает активную и текущую вкладку.
 * @returns {Promise<browser.Tabs.Tab | undefined>} Объект вкладки или undefined.
 */
export async function getActiveTab(): Promise<browser.Tabs.Tab | undefined> {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}

/**
 * Отправляет сообщение об ошибке в указанную вкладку.
 * @param tabId ID вкладки.
 * @param error Ошибка (объект Error или строка).
 * @param context Контекст, в котором произошла ошибка (для логирования).
 */
export function sendErrorToTab(tabId: number, error: unknown, context: string): void {
  console.error(`Ошибка в [${context}]:`, error)

  let errorPayload: ShowErrorMessage['error']

  if (error instanceof LocalizedError) {
    errorPayload = {
      isLocalized: true,
      key: error.key,
      params: error.params,
    }
  }
  else {
    errorPayload = error instanceof Error ? error.message : 'Произошла неизвестная ошибка.'
  }

  const errorMsg: ShowErrorMessage = {
    action: 'showError',
    error: errorPayload,
  }
  browser.tabs.sendMessage(tabId, errorMsg)
}

/**
 * Конвертирует Blob в строку Data URL.
 * @param blob Blob для конвертации.
 * @returns {Promise<string>} Data URL.
 */
export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      }
      else {
        reject(new LocalizedError('errors.capture.readBlobFailed'))
      }
    }
    reader.onerror = (error) => {
      console.error('Ошибка FileReader:', error)
      reject(new LocalizedError('errors.capture.fileReaderFailed'))
    }
    reader.readAsDataURL(blob)
  })
}
