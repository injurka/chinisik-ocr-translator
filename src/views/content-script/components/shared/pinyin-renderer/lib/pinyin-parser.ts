// Тип для отдельного слога после парсинга
export interface PinyinSyllable {
  syllable: string // Слог без тона, например, "ni"
  tone: number // Номер тона (0-5)
  original: string // Исходная часть строки, например "ni3" или "!"
}

/**
 * Парсит строку пиньиня с цифрами в массив слогов.
 * @param pinyinString - Строка, например "ni3 hao3 ma5!"
 * @returns Массив объектов PinyinSyllable
 */
export function parsePinyinString(pinyinString: string): PinyinSyllable[] {
  if (!pinyinString)
    return []

  // Разделяем по пробелам, сохраняя их, чтобы потом восстановить
  const parts = pinyinString.trim().split(/(\s+)/)

  const result: PinyinSyllable[] = []

  for (const part of parts) {
    if (part.trim() === '') {
      result.push({ syllable: part, tone: 0, original: part })
      continue
    }

    const match = part.match(/^([a-zü]+)([1-5])?$/i)
    if (match) {
      const syllable = match[1]
      const tone = match[2] ? Number.parseInt(match[2], 10) : 5 // Нейтральный тон по умолчанию
      result.push({ syllable, tone, original: part })
    }
    else {
      // Если это не слог пиньиня (например, знак препинания), сохраняем как есть
      result.push({ syllable: part, tone: 0, original: part })
    }
  }
  return result
}

// Таблица для конвертации
const toneMarks: Record<string, string[]> = {
  a: ['ā', 'á', 'ǎ', 'à', 'a'],
  e: ['ē', 'é', 'ě', 'è', 'e'],
  i: ['ī', 'í', 'ǐ', 'ì', 'i'],
  o: ['ō', 'ó', 'ǒ', 'ò', 'o'],
  u: ['ū', 'ú', 'ǔ', 'ù', 'u'],
  ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
}

/**
 * Конвертирует слог с номером тона в слог с диакритическим знаком.
 * Реализует стандартные правила постановки знака тона.
 * @param syllable - Слог, например, "hao"
 * @param tone - Тон от 1 до 5
 * @returns Слог со знаком тона, например, "hǎo"
 */
export function convertToToneMark(syllable: string, tone: number): string {
  if (tone < 1 || tone > 5)
    return syllable
  if (tone === 5)
    return syllable // Нейтральный тон не имеет знака

  const lowerSyllable = syllable.toLowerCase()

  // Правило: 'a' и 'e' всегда получают тон. 'ou' получает на 'o'.
  if (lowerSyllable.includes('a')) {
    return syllable.replace(/a/i, toneMarks.a[tone - 1])
  }
  if (lowerSyllable.includes('e')) {
    return syllable.replace(/e/i, toneMarks.e[tone - 1])
  }
  if (lowerSyllable.includes('ou')) {
    return syllable.replace(/o/i, toneMarks.o[tone - 1])
  }

  // Правило: для остальных тон ставится на последнюю гласную
  for (let i = syllable.length - 1; i >= 0; i--) {
    const char = syllable[i].toLowerCase()
    if (toneMarks[char as keyof typeof toneMarks]) {
      const replacement = toneMarks[char as keyof typeof toneMarks][tone - 1]
      return syllable.substring(0, i) + replacement + syllable.substring(i + 1)
    }
  }

  return syllable
}

// Все возможные гласные с диакритическими знаками
const allToneMarks = new Set([
  'ā',
  'á',
  'ǎ',
  'à',
  'ē',
  'é',
  'ě',
  'è',
  'ī',
  'í',
  'ǐ',
  'ì',
  'ō',
  'ó',
  'ǒ',
  'ò',
  'ū',
  'ú',
  'ǔ',
  'ù',
  'ǖ',
  'ǘ',
  'ǚ',
  'ǜ',
])

interface SplitSyllable {
  pre: string // Часть до тонированной гласной
  vowel: string // Тонированная гласная
  post: string // Часть после тонированной гласной
}

/**
 * Разделяет слог на части для последующей окраски тонированной гласной.
 * @param markedSyllable - Слог с диакритическим знаком, например "hǎo" или "chuāng"
 * @returns Объект с тремя частями слога.
 */
export function splitSyllableByTonedVowel(markedSyllable: string): SplitSyllable {
  for (let i = 0; i < markedSyllable.length; i++) {
    const char = markedSyllable[i]
    if (allToneMarks.has(char)) {
      return {
        pre: markedSyllable.substring(0, i),
        vowel: char,
        post: markedSyllable.substring(i + 1),
      }
    }
  }

  return { pre: markedSyllable, vowel: '', post: '' }
}
