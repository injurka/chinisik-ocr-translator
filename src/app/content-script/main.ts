import type { Language } from '~/shared/types'
import { createApp, h } from 'vue'
import browser from 'webextension-polyfill'
import tailwindStyles from '~/assets/css/main.css?raw'
import i18n from '~/i18n'
import Overlay from './overlay.vue'

const SHADOW_HOST_ID = 'chinisik-ocr-translator-shadow-host'

async function init() {
  // Настройка локализации
  const settings = await browser.storage.sync.get('targetLanguage')
  if (settings.targetLanguage)
    i18n.global.locale.value = settings.targetLanguage as Language

  // Проверяем, не был ли уже создан наш хост-элемент
  const existingEl = document.getElementById(SHADOW_HOST_ID)
  if (existingEl)
    return

  // 1. Создаем "хост" для нашего Shadow DOM
  const hostEl = document.createElement('div')
  hostEl.id = SHADOW_HOST_ID

  // 2. Применяем стили к хост-элементу, чтобы он стал верхним слоем
  hostEl.style.position = 'fixed'
  hostEl.style.top = '0'
  hostEl.style.left = '0'
  hostEl.style.width = '100%'
  hostEl.style.height = '100%'
  hostEl.style.zIndex = '2147483647'
  hostEl.style.pointerEvents = 'none'

  document.body.appendChild(hostEl)

  // 3. Создаем Shadow Root в режиме 'open' для доступа извне (если понадобится)
  const shadowRoot = hostEl.attachShadow({ mode: 'open' })

  // 4. Создаем элемент, куда будет монтироваться Vue-приложение *внутри* Shadow DOM
  const mountEl = document.createElement('div')
  // Включаем события мыши для дочерних элементов внутри Shadow DOM
  mountEl.style.pointerEvents = 'auto'
  shadowRoot.appendChild(mountEl)

  // 5. Создаем <style> тег и помещаем в него наши инкапсулированные стили
  const styleEl = document.createElement('style')
  styleEl.textContent = tailwindStyles
  shadowRoot.appendChild(styleEl)

  // 6. Монтируем корневой Vue-компонент в наш внутренний элемент
  const app = createApp(Overlay)
  app.use(i18n)
  app.mount(mountEl)
}

// Стандартная логика для запуска скрипта после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
}
else {
  init()
}
