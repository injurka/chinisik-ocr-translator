export interface BreakdownItem {
  char: string
  pinyin: string
  meaning: string
}

export interface Meaning {
  type: 'literal' | 'figurative'
  definition: string
}

export interface WordAnalysisResult {
  word: string
  pinyin: string
  partOfSpeech: string
  breakdown: BreakdownItem[]
  meanings: Meaning[]
}
