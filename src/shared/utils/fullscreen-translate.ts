import type { FullscreenTranslateResult } from '../api/services/all/types'
import Tesseract from 'tesseract.js'

import { performFullscreenTranslate } from '../api'

async function addCoordinateHelpers(imageDataUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return reject(new Error('Failed to get 2D context'))
      }

      canvas.width = img.width
      canvas.height = img.height

      // 1. Рисуем оригинальное изображение
      ctx.drawImage(img, 0, 0)

      // 2. Настройки сетки
      const GRID_DIVISIONS = 20
      const gridStep = Math.round(Math.min(img.width, img.height) / GRID_DIVISIONS)

      if (gridStep < 10) {
        console.warn('Grid step is too small, skipping coordinate helpers.')
        resolve(canvas.toDataURL())
        return
      }

      const fontSize = Math.max(12, Math.round(gridStep / 6))
      ctx.font = `bold ${fontSize}px Arial`
      ctx.fillStyle = 'rgba(255, 0, 0, 0.9)'
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'
      ctx.lineWidth = 1
      ctx.textBaseline = 'top'

      // 3. Рисуем вертикальные линии с метками
      for (let x = gridStep; x < img.width; x += gridStep) {
        const pixelPerfectX = x + 0.5

        ctx.beginPath()
        ctx.moveTo(pixelPerfectX, 0)
        ctx.lineTo(pixelPerfectX, img.height)
        ctx.stroke()

        const label = x.toString()
        ctx.fillText(label, x + 4, 2)
        ctx.fillText(label, x + 4, img.height - fontSize - 2)
      }

      ctx.textBaseline = 'bottom'
      for (let y = gridStep; y < img.height; y += gridStep) {
        const pixelPerfectY = y + 0.5

        ctx.beginPath()
        ctx.moveTo(0, pixelPerfectY)
        ctx.lineTo(img.width, pixelPerfectY)
        ctx.stroke()

        const label = y.toString()
        ctx.fillText(label, 4, y - 2)
        const textWidth = ctx.measureText(label).width
        ctx.fillText(label, img.width - textWidth - 4, y - 2)
      }

      resolve(canvas.toDataURL())
    }
    img.onerror = () => {
      reject(new Error('Failed to load image'))
    }
    img.src = imageDataUrl
  })
}

async function preprocessImageForLlm(originalImageDataUrl: string): Promise<string> {
  let processedImage = originalImageDataUrl

  processedImage = await addCoordinateHelpers(processedImage)

  return processedImage
}

async function fullscreenTranslate(originalImageDataUrl: string): Promise<FullscreenTranslateResult> {
  let processedImageDataUrl = originalImageDataUrl

  try {
    processedImageDataUrl = await preprocessImageForLlm(originalImageDataUrl)
    console.log('processedImageDataUrl', processedImageDataUrl)
  }
  catch (e) {
    console.warn('Image preprocessing step resulted in an error, proceeding with original image:', e)
  }

  // return await performFullscreenTranslate(processedImageDataUrl)
}

export { fullscreenTranslate, preprocessImageForLlm }
