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
# ROLE
You are an expert Chinese-to-${params.targetLanguage} translator and Pinyin transcriptionist processing from images.
Given a Chinese text, provide its ${params.targetLanguage} translation and its Pinyin transcription.
Return the result ONLY in a valid JSON object with the following exact structure:

# TASK
Process the user-provided image by performing these three steps in order:
1.  OCR: Accurately extract all Chinese characters (Hanzi) from the image.
2.  Translate: Translate the extracted Chinese text into ${languageName}.
3.  Transcribe: Provide a Pinyin transcription for the Chinese text. Use tone numbers (1-4, 5 for neutral) and separate each syllable with a single space.

# OUTPUT REQUIREMENTS
- You MUST return ONLY a single, raw, valid JSON object.
- Do NOT wrap the JSON in markdown backticks (\`\`\`json ... \`\`\`).
- Do NOT include any explanations, apologies, or conversational text.
- The JSON object MUST have this exact structure:
{
  "source": "...",      // Extracted Chinese text (Hanzi)
  "translate": "...",   // ${languageName} translation
  "transcription": "..." // Pinyin with numeric tones (e.g., "ni3 hao3 shi4jie4")
}

# EXAMPLE
If the user provides an image containing the text "你好世界", your complete and exact output MUST be:
{
  "source": "你好世界",
  "translate": "Привет, мир", // (Assuming target language is Russian)
  "transcription": "ni3 hao3 shi4 jie4"
}
${params.system ? `\n# ADDITIONAL INSTRUCTIONS\n${params.system}` : ''}
  `

  const user = [
    {
      type: 'text',
      text: `Please process this image according to system instructions.`,
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
