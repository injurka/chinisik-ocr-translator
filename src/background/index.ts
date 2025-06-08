import type { MessageSender, RuntimeMessage } from '../shared/types'
import browser from 'webextension-polyfill'
import { initializeStorageDefaults } from '../shared/utils/initialize-storage-defaults'
import { handleCaptureAreaCommand, handleFullscreenCommand } from './commands'
import { messageHandlers } from './handlers'

initializeStorageDefaults()

async function rootMessageHandler(message: unknown, sender: MessageSender) {
  if (typeof message !== 'object' || message === null || !('action' in message) || typeof (message as any).action !== 'string') {
    console.warn('Получено некорректное сообщение:', message)
    return
  }

  const request = message as RuntimeMessage
  const handler = messageHandlers[request.action]

  if (handler) {
    try {
      return await handler(request as any, sender)
    }
    catch (error) {
      console.error(`Ошибка при обработке действия "${request.action}":`, error)
      const errorMessage = error instanceof Error ? error.message : 'Произошла неизвестная ошибка в обработчике.'
      return { error: errorMessage }
    }
  }
  else {
    console.warn('Получено сообщение с необработанным действием:', request.action)
  }
}

async function commandHandler(command: string) {
  if (command === 'capture-area') {
    await handleCaptureAreaCommand()
  }
}

browser.commands.onCommand.addListener(commandHandler)
browser.runtime.onMessage.addListener(rootMessageHandler)
