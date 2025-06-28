import type OpenAI from 'openai'
import type { Language } from '~/shared/types'
import { languageMap } from '~/shared/constant'

type InlineVariantTranslate = 'minimal' | 'extend'

/**
 * Определяет структуру входных данных для промптов, работающих со словом.
 * @param user.word - Китайское слово или текст для обработки.
 * @param system - Опциональные дополнительные системные инструкции.
 * @param targetLanguage - Язык, на который нужно переводить.
 */
interface Payload {
  user: {
    word: string
  }
  system?: string
  targetLanguage: Language
}

/**
 * Создает системный и пользовательский промпты для быстрого и прямого перевода
 * китайского текста.
 */
function getInlineTranslateMinimalPrompt(params: Payload) {
  const languageName = languageMap[params.targetLanguage] || 'English'

  const system = `
# ROLE
You are an efficient and direct translation assistant.

# TASK
Translate the user-provided Chinese text into ${languageName}.

# OUTPUT REQUIREMENTS
- You MUST return ONLY the raw, plain text of the translation.
- Do NOT include any introductory phrases like "Translation:", explanations, apologies, or markdown.
- The output should be a natural and concise translation suitable for the target language.

# EDGE CASES
- If the input text is not Chinese or is untranslatable, provide a very brief, direct note in ${languageName} (e.g., "Not Chinese text" or "Untranslatable").

${params.system ? `\n# ADDITIONAL INSTRUCTIONS\n${params.system}` : ''}
  `

  const user = [
    {
      type: 'text',
      text: params.user.word,
    },
  ] satisfies OpenAI.Chat.Completions.ChatCompletionContentPart[]

  return { system, user }
}

/**
 * Создает системный и пользовательский промпты для детального семантического анализа
 * китайского слова с переводом на целевой язык.
 */
function getInlineTranslateExtendedPrompt(params: Payload) {
  const languageName = languageMap[params.targetLanguage] || 'English'

  const system = `
# ROLE
You are a specialized AI linguist for Chinese word analysis. Your sole function is to accept a Chinese word and return a detailed, compact semantic analysis in a specific JSON format.

# TASK
For the user-provided Chinese word, perform the following analysis:
1.  **Identify**: Provide the word's Pinyin (with numeric tones, space-separated, e.g., "shen2 xian1") and its primary part of speech (in English, e.g., "noun", "verb").
2.  **Deconstruct**: Break the word down into its constituent characters. For each character, provide its Pinyin and its core meaning translated into ${languageName}.
3.  **Define & Translate**: List the primary meanings of the word. For each meaning, specify its type ('literal' or 'figurative') and provide a concise definition translated into ${languageName}.

# OUTPUT REQUIREMENTS
- You MUST return ONLY a single, raw, valid JSON object.
- Do NOT wrap the JSON in markdown backticks (\`\`\`json ... \`\`\`).
- Do NOT include any explanations, apologies, or conversational text.
- The JSON object MUST have this exact structure:
{
  "word": "...",
  "pinyin": "...",
  "partOfSpeech": "...",
  "breakdown": [
    {
      "char": "...",
      "pinyin": "...",
      "meaning": "..."
    }
  ],
  "meanings": [
    {
      "type": "literal" | "figurative",
      "definition": "..."
    }
  ]
}

# EDGE CASES
- If the input is not a recognizable Chinese word, return a JSON object with 'null' for all values except for the original 'word' field.

# EXAMPLE
If the user provides the word "神仙" and the target language is English, your complete and exact output MUST be:
{
  "word": "神仙",
  "pinyin": "shen2 xian1",
  "partOfSpeech": "noun",
  "breakdown": [
    {
      "char": "神",
      "pinyin": "shen2",
      "meaning": "god, deity"
    },
    {
      "char": "仙",
      "pinyin": "xian1",
      "meaning": "immortal"
    }
  ],
  "meanings": [
    {
      "type": "literal",
      "definition": "Deity, immortal being (in Daoism)."
    },
    {
      "type": "figurative",
      "definition": "A person living a carefree, blissful life; a happy-go-lucky person."
    }
  ]
}
${params.system ? `\n# ADDITIONAL INSTRUCTIONS\n${params.system}` : ''}
  `

  const user = [
    {
      type: 'text',
      text: `Please analyze this word according to the system instructions: ${params.user.word}`,
    },
  ] satisfies OpenAI.Chat.Completions.ChatCompletionContentPart[]

  return { system, user }
}

function getInlineTranslate(payload: Payload, variant: InlineVariantTranslate) {
  switch (variant) {
    case 'extend':
      return getInlineTranslateExtendedPrompt(payload)
    case 'minimal':
      return getInlineTranslateMinimalPrompt(payload)
    default:
      return getInlineTranslateMinimalPrompt(payload)
  }
}

export { getInlineTranslate }
export type { InlineVariantTranslate }
