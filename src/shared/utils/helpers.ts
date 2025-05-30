import type { CaptureAreaMessage } from '../types'

async function cropImage(
  imageDataUrl: string,
  cropX: number,
  cropY: number,
  cropWidth: number,
  cropHeight: number,
): Promise<string> {
  try {
    // 1. Получаем Blob из Data URL
    // Data URL имеет формат "data:[<mediatype>][;base64],<data>"
    // Нам нужно отделить сам base64-контент
    const base64Response = await fetch(imageDataUrl)
    const imageBlob = await base64Response.blob()

    // 2. Создаем ImageBitmap из Blob
    // createImageBitmap доступен в global scope воркеров и фоновых скриптах расширений.
    const imageBitmap = await createImageBitmap(imageBlob)

    // 3. Создаем OffscreenCanvas
    // Проверка на существование OffscreenCanvas, хотя в современных Firefox он должен быть
    if (typeof OffscreenCanvas === 'undefined') {
      console.error('OffscreenCanvas is not supported in this environment. Attempting fallback or erroring.')
      // Здесь можно было бы реализовать передачу на content_script, но это усложнит код.
      // Для простоты пока выбросим ошибку.
      throw new Error('OffscreenCanvas is not supported.')
    }
    const canvas = new OffscreenCanvas(cropWidth, cropHeight)
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('Could not get 2D context from OffscreenCanvas')
    }

    // 4. Рисуем обрезанную часть ImageBitmap на OffscreenCanvas
    // sX, sY, sWidth, sHeight - область источника (исходное изображение imageBitmap)
    // dX, dY, dWidth, dHeight - область назначения (на canvas)
    ctx.drawImage(
      imageBitmap,
      cropX, // Координата X начала вырезаемой области на исходном изображении
      cropY, // Координата Y начала вырезаемой области на исходном изображении
      cropWidth, // Ширина вырезаемой области на исходном изображении
      cropHeight, // Высота вырезаемой области на исходном изображении
      0, // Координата X для отрисовки на целевом canvas (начинаем с 0,0)
      0, // Координата Y для отрисовки на целевом canvas
      cropWidth, // Ширина отрисовки на целевом canvas
      cropHeight, // Высота отрисовки на целевом canvas
    )

    // 5. Получаем Blob из OffscreenCanvas, затем конвертируем в Data URL
    // OffscreenCanvas.convertToBlob() является предпочтительным асинхронным методом.
    const resultBlob = await canvas.convertToBlob({ type: 'image/png' })
    if (!resultBlob) {
      throw new Error('Failed to convert OffscreenCanvas to Blob.')
    }

    // Конвертируем Blob обратно в Data URL
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader() // FileReader доступен в фоновых скриптах
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        }
        else {
          reject(new Error('Failed to read blob as Data URL.'))
        }
      }
      reader.onerror = (error) => {
        console.error('FileReader error:', error)
        reject(new Error('FileReader failed to read blob.'))
      }
      reader.readAsDataURL(resultBlob)
    })
  }
  catch (error) {
    console.error('Error in cropImage with OffscreenCanvas:', error)
    // Пробрасываем ошибку дальше, чтобы она была обработана в вызывающем коде onMessage
    throw error
  }
}

function dataURLtoBlob(dataurl: string): Blob {
  const arr = dataurl.split(',')
  if (arr.length < 2) {
    throw new Error('Invalid data URL format for blob conversion')
  }
  const mimeMatch = arr[0].match(/:(.*?);/)
  if (!mimeMatch || mimeMatch.length < 2) {
    throw new Error('Could not parse MIME type from data URL')
  }
  const mime = mimeMatch[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

function isCaptureAreaMessage(message: any): message is CaptureAreaMessage {
  return message
    && typeof message === 'object'
    && message.action === 'captureAndTranslate'
    && typeof message.area === 'object'
    && typeof message.area.x === 'number'
    && typeof message.area.y === 'number'
    && typeof message.area.width === 'number'
    && typeof message.area.height === 'number'
}

export { cropImage, dataURLtoBlob, isCaptureAreaMessage }
