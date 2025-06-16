import type { Language } from '~/shared/types'
import { createApp } from 'vue'
import browser from 'webextension-polyfill'
import i18n from '../i18n'
import Popup from './popup.vue'
import '../assets/scss/main.scss'

async function init() {
  const settings = await browser.storage.sync.get('targetLanguage')

  if (settings.targetLanguage)
    i18n.global.locale.value = settings.targetLanguage as Language

  createApp(Popup)
    .use(i18n)
    .mount('#app')
}

init()
