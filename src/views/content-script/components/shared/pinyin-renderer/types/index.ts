// Режим отображения: знаки над буквами или цифры
export type PinyinDisplayMode = 'marks' | 'numbers'

// Пропсы для нового компонента
export interface PinyinRendererProps {
  // Входная строка, например "ni3 hao3"
  pinyin: string
  // Режим отображения
  displayMode?: PinyinDisplayMode
  // Включить ли цветную подсветку
  colored?: boolean
}
