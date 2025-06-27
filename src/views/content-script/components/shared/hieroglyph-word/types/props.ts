type HieroglyphWordVariant = 'compact' | 'expanded' | 'standard'

interface IHieroglyphWordVariousProps {
  variant?: HieroglyphWordVariant
  pinyin?: string
  translate?: string
  glyph: string
}

export type {
  HieroglyphWordVariant,
  IHieroglyphWordVariousProps,
}
