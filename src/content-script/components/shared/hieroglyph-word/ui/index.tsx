import type { PropType } from 'vue'
import type { PinyinTextProps } from '../../pinyin-text'
import type { HieroglyphWordVariant } from '../types'
import { computed, defineComponent } from 'vue'
import { useRender } from '../../../../../shared/composables'
import { PinyinText } from '../../pinyin-text'
import './index.scss'

const props = {
  variant: { type: String as PropType<HieroglyphWordVariant> },
  pinyin: { type: [Object, String] as PropType<PinyinTextProps | string> },
  translate: { type: String },
  glyph: { type: String, required: true },
}

const HieroglyphWordVarious = defineComponent({
  name: 'WordVarious',
  props,
  components: { PinyinText },
  setup(props) {
    const graphContent = computed(() => {
      return props.glyph
    })

    const pinyinContent = computed(() => {
      const el = props.pinyin
        && (
          typeof props.pinyin === 'string'
            ? props.pinyin
            : (
                <PinyinText
                  {...props.pinyin}
                  colored={props.pinyin.colored}
                />
              )
        )

      return el && (
        <span class="hw-pinyin">
          {el}
        </span>
      )
    })

    const translateContent = computed(() => {
      return props.translate
        && (
          <span class="hw-translate">
            {props.translate}
          </span>
        )
    })

    useRender(() => {
      return (
        <>
          {(() => {
            switch (props.variant) {
              case 'compact':
                return (
                  <>
                    {pinyinContent.value}
                    <span class="hw-glyph">{graphContent.value}</span>
                    {translateContent.value}
                  </>
                )

              case 'expanded':
                return (
                  <>
                    {pinyinContent.value}
                    <span class="hw-glyph">{graphContent.value}</span>
                    {translateContent.value}
                  </>
                )

              case 'standard':
                return (
                  <>
                    <span class="hw-glyph">{graphContent.value}</span>
                    <div class="hw-pinyin-translate">
                      {pinyinContent.value}
                      {translateContent.value}
                    </div>
                  </>
                )
              default:
                return <template />
            }
          })()}
        </>
      )
    })
  },
})

const HieroglyphWord = defineComponent({
  name: 'Word',
  props,
  components: { WordVarious: HieroglyphWordVarious },
  setup(props) {
    const variant = computed(() => (props.variant) as HieroglyphWordVariant)
    const extraClasses = computed(() => {
      const classes: string[] = []

      if (!props.pinyin)
        classes.push('hw-none-pinyin')
      if (!props.translate)
        classes.push('hw-none-translate')

      return classes
    })

    useRender(() => (
      <span class={[
        'hw-word',
        `variant-${variant.value}`,
        ...extraClasses.value,
      ]}
      >
        <HieroglyphWordVarious
          {...props}
          variant={variant.value}
          key={variant.value}
        />
      </span>
    ))
  },
})

export {
  HieroglyphWord,
  HieroglyphWordVarious,
}
