import { createApp, h } from 'vue'
import Overlay from './overlay.vue'

const MOUNT_EL_ID = 'chinisik-ocr-translator-overlay-root'

function init() {
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
  app.mount(mountEl)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
}
else {
  init()
}
