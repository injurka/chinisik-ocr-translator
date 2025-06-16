import type { Language } from '~/shared/types'
import { createApp, h } from 'vue'
import browser from 'webextension-polyfill'
import i18n from '../i18n'
import Overlay from './overlay.vue'

const MOUNT_EL_ID = 'chinisik-ocr-translator-overlay-root'

async function init() {
  const settings = await browser.storage.sync.get('targetLanguage')

  if (settings.targetLanguage)
    i18n.global.locale.value = settings.targetLanguage as Language

  const existingEl = document.getElementById(MOUNT_EL_ID)
  if (existingEl) {
    return
  }

  const mountEl = document.createElement('div')
  mountEl.setAttribute('id', MOUNT_EL_ID)
  document.body.appendChild(mountEl)

  const app = createApp({
    render: () => h(Overlay),
  })
  app.use(i18n)
  app.mount(mountEl)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
}
else {
  init()
}
