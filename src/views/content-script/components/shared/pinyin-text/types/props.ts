type ToneType = 0 | 1 | 2 | 3 | 4

interface PinyinTextTone {
  index: number
  type: ToneType
}

interface PinyinTextProps {
  pinyin: string
  tone: PinyinTextTone[] | PinyinTextTone
  colored?: boolean | null
}

export type {
  PinyinTextProps,
  PinyinTextTone,
  ToneType,
}
