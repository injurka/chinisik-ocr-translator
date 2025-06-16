import type OpenAI from 'openai'
import type { Language } from '~/shared/types'
import { languageMap } from '~/shared/constant'

/**
 * Определяет структуру входных данных для промпта.
 * @param user.imageDataUrl - URL изображения в формате Data URL (например, "data:image/jpeg;base64,...").
 * @param system - Опциональные дополнительные системные инструкции.
 */
interface Payload {
  user: {
    imageDataUrl: string
  }
  system?: string
  targetLanguage: Language
}

/**
 * Создает системный и пользовательский промпты для распознавания, перевода и транскрипции
 * китайского текста с изображения.
 */
export function getOcrAndTranslatePrompt(params: Payload) {
  const languageName = languageMap[params.targetLanguage] || 'Russian'

  const system = `
You are an expert in Optical Character Recognition (OCR) for Chinese text, a professional Chinese-to-${languageName} translator, and a Pinyin transcriptionist.

Your task is to perform the following steps in sequence:
1. Analyze the provided image and extract all Chinese text from it.
2. Take the extracted Chinese text and provide its ${languageName} translation and its Pinyin transcription.

Return the result ONLY in a valid JSON object with the following exact structure:
{
  "source": "...",      // The recognized Chinese text from the image
  "translate": "...",   // The ${languageName} translation of the source text
  "transcription": "..." // The Pinyin transcription of the source text (e.g., "nǐ hǎo shìjiè")
}

If no Chinese text is found in the image, return a JSON object with empty strings for all fields:
{
  "source": "",
  "translate": "",
  "transcription": ""
}

Do not include any other explanations, greetings, or markdown. Just the JSON object.
${params.system ?? ''}
  `

  const user = [
    {
      type: 'text',
      text: `Analyze the image, extract the Chinese text, translate it to ${languageName}, and provide its Pinyin transcription. Return the result in the specified JSON format.`,
    },
    {
      type: 'image_url',
      image_url: {
        url: params.user.imageDataUrl,
        detail: 'high',
      },
    },
  ] satisfies OpenAI.Chat.Completions.ChatCompletionContentPart[]

  return { system, user }
}
