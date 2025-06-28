export interface PinyinSyllableParts {
  pre: string
  vowel: string
  post: string
}

export type PinyinToken = {
  type: 'pinyin'
  original: string
  syllable: string
  tone: number
  parts: PinyinSyllableParts
} | {
  type: 'text'
  content: string
}

const TONE_MAP: Record<string, string[]> = {
  a: ['ā', 'á', 'ǎ', 'à', 'a'],
  e: ['ē', 'é', 'ě', 'è', 'e'],
  i: ['ī', 'í', 'ǐ', 'ì', 'i'],
  o: ['ō', 'ó', 'ǒ', 'ò', 'o'],
  u: ['ū', 'ú', 'ǔ', 'ù', 'u'],
  ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
  A: ['Ā', 'Á', 'Ǎ', 'À', 'A'],
  E: ['Ē', 'É', 'Ě', 'È', 'E'],
  I: ['Ī', 'Í', 'Ǐ', 'Ì', 'I'],
  O: ['Ō', 'Ó', 'Ǒ', 'Ò', 'O'],
  U: ['Ū', 'Ú', 'Ǔ', 'Ù', 'U'],
  Ü: ['Ǖ', 'Ǘ', 'Ǚ', 'Ǜ', 'Ü'],
}

/**
 * Применяет знак тона к слогу пиньиня.
 * @param syllable - Слог без тона, например "hao".
 * @param tone - Номер тона (1-5).
 * @returns Объект с разделенными частями слога.
 */
function applyToneMark(syllable: string, tone: number): PinyinSyllableParts {
  let vowelToToneIndex = -1

  const aIndex = syllable.search(/a/i)
  const eIndex = syllable.search(/e/i)

  if (aIndex !== -1) {
    vowelToToneIndex = aIndex
  }
  else if (eIndex !== -1) {
    vowelToToneIndex = eIndex
  }
  else if (syllable.includes('ou') || syllable.includes('OU')) {
    vowelToToneIndex = syllable.search(/o/i)
  }
  else {
    // В остальных случаях - последняя гласная
    for (let i = syllable.length - 1; i >= 0; i--) {
      if ('aeiouvüAEIOUVÜ'.includes(syllable[i])) {
        vowelToToneIndex = i
        break
      }
    }
  }

  if (vowelToToneIndex === -1) {
    return { pre: '', vowel: syllable, post: '' }
  }

  const vowelChar = syllable[vowelToToneIndex]
  const tonedVowel = TONE_MAP[vowelChar]?.[tone - 1] ?? vowelChar

  return {
    pre: syllable.substring(0, vowelToToneIndex),
    vowel: tonedVowel,
    post: syllable.substring(vowelToToneIndex + 1),
  }
}

export function parsePinyin(pinyinString: string): PinyinToken[] {
  if (!pinyinString)
    return []

  const regex = /([a-zü]+[1-5]?)/i
  const parts = pinyinString.split(regex)
  const pinyinSyllableRegex = /^[a-zü]+[1-5]?$/i

  return parts
    .filter(part => part.length > 0)
    .map((part) => {
      if (!pinyinSyllableRegex.test(part)) {
        return { type: 'text', content: part }
      }

      const match = part.match(/([a-zü]+)([1-5])?/i)
      const syllable = match![1]
      const tone = match![2] ? Number.parseInt(match![2], 10) : 5

      return {
        type: 'pinyin',
        original: part,
        syllable,
        tone,
        parts: applyToneMark(syllable, tone),
      }
    })
}
