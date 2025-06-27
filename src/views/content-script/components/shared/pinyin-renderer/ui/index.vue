<script lang="ts" setup>
import type { PinyinRendererProps } from '../types'
import { computed } from 'vue'
import {
  convertToToneMark,
  parsePinyinString,
  splitSyllableByTonedVowel,
} from '../lib/pinyin-parser'

interface RenderedSyllable {
  key: string
  isComplex: boolean
  tone: number
  text?: string
  parts?: {
    pre: string
    vowel: string
    post: string
  }
}

const props = withDefaults(defineProps<PinyinRendererProps>(), {
  displayMode: 'marks',
  colored: true,
})

const renderedSyllables = computed<RenderedSyllable[]>(() => {
  const parsed = parsePinyinString(props.pinyin)

  return parsed.map((syllable, index) => {
    const useComplexRender = props.displayMode === 'marks' && props.colored && syllable.tone > 0 && syllable.tone < 5

    if (useComplexRender) {
      const markedSyllable = convertToToneMark(syllable.syllable, syllable.tone)
      return {
        key: `${syllable.original}-${index}`,
        isComplex: true,
        tone: syllable.tone,
        parts: splitSyllableByTonedVowel(markedSyllable),
      }
    }
    else {
      let text = ''
      if (props.displayMode === 'numbers') {
        text = syllable.tone === 5 || syllable.tone === 0
          ? syllable.syllable
          : `${syllable.syllable}${syllable.tone}`
      }
      else {
        text = convertToToneMark(syllable.syllable, syllable.tone)
      }

      if (syllable.tone === 0) {
        text = syllable.original
      }

      return {
        key: `${syllable.original}-${index}`,
        isComplex: false,
        tone: syllable.tone,
        text,
      }
    }
  })
})
</script>

<template>
  <span class="pinyin-renderer">
    <span
      v-for="syllable in renderedSyllables"
      :key="syllable.key"
      class="pinyin-syllable"
      :class="`tone-${syllable.tone}`"
    >
      <template v-if="!syllable.isComplex">
        {{ syllable.text }}
      </template>
      <template v-else>
        {{ syllable?.parts?.pre }}<span class="toned-vowel">{{ syllable?.parts?.vowel }}</span>{{ syllable?.parts?.post }}
      </template>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.pinyin-renderer {
  display: inline-block;
  white-space: pre-wrap;
  line-height: 1.5;
}

.pinyin-syllable {
  color: inherit;
  transition: color 0.2s ease;
}

.toned-vowel {
  transition: color 0.2s ease;
}

.pinyin-syllable.tone-1 .toned-vowel {
  color: var(--fg-tone-1-color);
}
.pinyin-syllable.tone-2 .toned-vowel {
  color: var(--fg-tone-2-color);
}
.pinyin-syllable.tone-3 .toned-vowel {
  color: var(--fg-tone-3-color);
}
.pinyin-syllable.tone-4 .toned-vowel {
  color: var(--fg-tone-4-color);
}
.pinyin-syllable.tone-5 {
  color: var(--fg-tone-0-color);
}
</style>
