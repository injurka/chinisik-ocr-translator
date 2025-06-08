import type { FullscreenTranslateResult } from '../api/services/all/types'
import { performFullscreenTranslate } from '../api'

// function convertToGrayscale(ctx: CanvasRenderingContext2D): void {
//   const canvas = ctx.canvas
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//   const data = imageData.data

//   for (let i = 0; i < data.length; i += 4) {
//     // gray = 0.299 * R + 0.587 * G + 0.114 * B
//     const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114

//     data[i] = gray
//     data[i + 1] = gray
//     data[i + 2] = gray
//   }

//   ctx.putImageData(imageData, 0, 0)
// }

async function preprocessImageForLlm(imageDataUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        return reject(new Error('Could not get 2D context for preprocessing'))
      }

      ctx.drawImage(img, 0, 0)
      // convertToGrayscale(ctx)

      const stepX = 0
      const stepY = 0

      const numGridLinesX = img.width / stepX
      const numGridLinesY = img.height / stepY

      ctx.strokeStyle = 'rgba(255, 0, 0, 0.25)'
      ctx.lineWidth = 1

      for (let i = 1; i < numGridLinesX; i++) {
        const x = i * stepX
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, img.height)
        ctx.stroke()
      }

      for (let i = 1; i < numGridLinesY; i++) {
        const y = i * stepY
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(img.width, y)
        ctx.stroke()
      }

      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = (e) => {
      console.error('Error loading image for preprocessing:', e)
      console.warn('Preprocessing image failed. Using original image data URL.')
      resolve(imageDataUrl)
    }

    img.src = imageDataUrl
  })
}

async function fullscreenTranslate(originalImageDataUrl: string): Promise<FullscreenTranslateResult> {
  let processedImageDataUrl = originalImageDataUrl
  try {
    processedImageDataUrl = await preprocessImageForLlm(originalImageDataUrl)
  }
  catch (e) {
    console.warn('Image preprocessing step resulted in an error, proceeding with original image:', e)
  }

  return await performFullscreenTranslate(processedImageDataUrl)
}

export { fullscreenTranslate, preprocessImageForLlm }
