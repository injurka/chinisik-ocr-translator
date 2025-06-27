import type { PinyinTextProps } from '../../pinyin-text'

type HieroglyphWordVariant = 'compact' | 'expanded' | 'standard'

interface IHieroglyphWordVariousProps {
  variant?: HieroglyphWordVariant
  pinyin?: PinyinTextProps
  translate?: string
  glyph: string
}

export type {
  HieroglyphWordVariant,
  IHieroglyphWordVariousProps,
}
