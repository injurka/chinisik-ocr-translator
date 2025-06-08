import type { TranslateFullScreenMessage } from '~/shared/types'
import browser from 'webextension-polyfill'
import { getActiveTab } from './utils'

/**
 * Обрабатывает команду "capture-area".
 * Отправляет сообщение content-скрипту для начала выделения области.
 */
export async function handleCaptureAreaCommand() {
  const tab = await getActiveTab()
  if (tab?.id) {
    try {
      await browser.tabs.sendMessage(tab.id, { action: 'startSelection' })
    }
    catch (error) {
      console.error('Не удалось отправить сообщение "startSelection":', error)
      browser.notifications.create({
        type: 'basic',
        iconUrl: browser.runtime.getURL('icon/128.png'),
        title: 'Ошибка захвата',
        message: 'Не удалось начать захват на этой странице. Перезагрузите страницу или попробуйте другую.',
      })
    }
  }
  else {
    console.error('Не найдена активная вкладка для начала выделения.')
  }
}

/**
 * Обрабатывает команду "translate-fullscreen".
 * Делает снимок видимой части экрана и отправляет его в content-скрипт.
 */
export async function handleFullscreenCommand() {
  const tab = await getActiveTab()

  if (tab?.id) {
    try {
      const imageDataUrl = await browser.tabs.captureVisibleTab(undefined, { format: 'png' })
      if (!imageDataUrl) {
        throw new Error('Не удалось сделать снимок видимой части вкладки.')
      }
      const message: TranslateFullScreenMessage = { action: 'translateFullScreen', imageDataUrl }
      await browser.tabs.sendMessage(tab.id, message)
    }
    catch (error) {
      console.error('Не удалось отправить сообщение "ocrAndTranslateFullScreen" или сделать снимок экрана:', error)
    }
  }
}
