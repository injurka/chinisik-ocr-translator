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
