import type { PropType, Ref } from 'vue'
import type { PinyinDisplayMode } from '../../pinyin-renderer'
import type { HieroglyphWordVariant } from '../types'
import { computed, defineComponent, ref, Teleport } from 'vue'
import { useRender } from '~/shared/composables'
import { PinyinRenderer } from '../../pinyin-renderer'
import { useInlineTranslation } from '../composables/use-inline-translation'
import InlineTranslationTooltip from './inline-translation-tooltip.vue'

import './index.scss'

const propsDefinition = {
  variant: { type: String as PropType<HieroglyphWordVariant> },
  pinyin: { type: String },
  translate: { type: String },
  glyph: { type: String, required: true },
  pinyinDisplayMode: {
    type: String as PropType<PinyinDisplayMode>,
    default: 'marks',
  },
  pinyinColored: {
    type: Boolean,
    default: true,
  },
}
const HieroglyphWordVarious = defineComponent({
  name: 'WordVarious',
  props: propsDefinition,
  components: { PinyinRenderer },
  setup(props) {
    const graphContent = computed(() => {
      return props.glyph
    })

    const pinyinContent = computed(() => {
      return props.pinyin && (
        <span class="hw-pinyin">
          <PinyinRenderer
            pinyin={props.pinyin}
            displayMode={props.pinyinDisplayMode}
            colored={props.pinyinColored}
          />
        </span>
      )
    })

    const translateContent = computed(() => {
      return props.translate
        && <span class="hw-translate">{props.translate}</span>
    })

    useRender(() => {
      const glyphSpan = <span class="hw-glyph hw-glyph-selectable">{graphContent.value}</span>

      switch (props.variant) {
        case 'compact':
          return (
            <>
              {pinyinContent.value}
              {glyphSpan}
              {translateContent.value}
            </>
          )
        case 'expanded':
          return (
            <>
              {pinyinContent.value}
              {glyphSpan}
              {translateContent.value}
            </>
          )
        case 'standard':
          return (
            <>
              {glyphSpan}
              <div class="hw-pinyin-translate">
                {pinyinContent.value}
                {translateContent.value}
              </div>
            </>
          )
        default:
          return glyphSpan
      }
    })
    return {}
  },
})

const HieroglyphWord = defineComponent({
  name: 'Word',
  props: propsDefinition,
  setup(props) {
    const hieroglyphWordRef = ref<HTMLElement | null>(null) as Ref<HTMLElement | null>
    const inlineTooltipComponentRef = ref<any>(null)
    const tooltipDomElementRef = computed(() => inlineTooltipComponentRef.value?.$el as HTMLElement | undefined)

    const {
      isTooltipVisible,
      tooltipPosition,
      isLoading: isInlineTranslationLoading,
      translatedText,
      currentSelectedText,
      handleTranslateRequest,
    } = useInlineTranslation({
      targetSelector: '.hw-glyph-selectable',
      rootElementRef: hieroglyphWordRef,
      tooltipElementRef: tooltipDomElementRef,
    })

    const variant = computed(() => (props.variant || 'standard') as HieroglyphWordVariant)
    const extraClasses = computed(() => {
      const classes: string[] = []
      if (!props.pinyin)
        classes.push('hw-none-pinyin')
      if (!props.translate)
        classes.push('hw-none-translate')
      return classes
    })

    useRender(() => (
      <span
        ref={hieroglyphWordRef}
        class={[
          'hw-word',
          `variant-${variant.value}`,
          ...extraClasses.value,
        ]}
      >
        <HieroglyphWordVarious
          {...props}
          key={variant.value + props.pinyinColored + props.pinyinDisplayMode}
        />

        {isTooltipVisible.value && (
          <Teleport to="body">
            <InlineTranslationTooltip
              ref={inlineTooltipComponentRef}
              position={tooltipPosition}
              isLoading={isInlineTranslationLoading.value}
              translatedText={translatedText.value}
              selectedText={currentSelectedText.value}
              onRequestTranslate={handleTranslateRequest}
            />
          </Teleport>
        )}
      </span>
    ))
    return {}
  },
})

export {
  HieroglyphWord,
}
