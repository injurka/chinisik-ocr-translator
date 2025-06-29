<script lang="ts" setup>
import type { PinyinToken } from '~/shared/lib/pinyin-parser'
import { computed } from 'vue'
import { parsePinyin } from '~/shared/lib/pinyin-parser'

export type PinyinDisplayMode = 'marks' | 'numbers'

export interface PinyinRendererProps {
  pinyin: string
  displayMode?: PinyinDisplayMode
  colored?: boolean
}

const props = withDefaults(defineProps<PinyinRendererProps>(), {
  displayMode: 'marks',
  colored: true,
})

const parsedTokens = computed<PinyinToken[]>(() => {
  return parsePinyin(props.pinyin)
})
</script>

<template>
  <span class="pinyin-renderer" :class="{ colored: props.colored }">
    <template v-for="(token, index) in parsedTokens" :key="index">

      <template v-if="token.type === 'pinyin'">
        <span
          class="pinyin-syllable"
          :class="`tone-${token.tone}`"
        >
          <!-- Режим: Знаки над буквами -->
          <span v-if="props.displayMode === 'marks'">
            {{ token.parts.pre }}<span class="toned-vowel">{{ token.parts.vowel }}</span>{{ token.parts.post }}
          </span>

          <!-- Режим: Цифры -->
          <span v-else>
            {{ token.syllable }}<span v-if="token.tone > 0 && token.tone <= 5" class="toned-vowel">{{ token.tone }}</span>
          </span>
        </span>
      </template>

      <template v-else>
        <span>{{ token.content }}</span>
      </template>

    </template>
  </span>
</template>

<style lang="scss" scoped>
.pinyin-renderer {
  display: inline-block;
  white-space: pre-wrap;
  line-height: 1.5;
  font-size: 1.1em;
}

.pinyin-renderer.colored {
  .pinyin-syllable.tone-1 .toned-vowel {
    color: var(--fg-tone-1-color, #d9534f);
  }
  .pinyin-syllable.tone-2 .toned-vowel {
    color: var(--fg-tone-2-color, #f0ad4e);
  }
  .pinyin-syllable.tone-3 .toned-vowel {
    color: var(--fg-tone-3-color, #5cb85c);
  }
  .pinyin-syllable.tone-4 .toned-vowel {
    color: var(--fg-tone-4-color, #5bc0de);
  }
  .pinyin-syllable.tone-5 .toned-vowel {
    color: var(--fg-tone-0-color, #777777);
  }
}
</style>
