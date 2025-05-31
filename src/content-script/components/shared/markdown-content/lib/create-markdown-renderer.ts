import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItContainer from 'markdown-it-container'

export function createMarkdownRenderer() {
  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })

  md
    .use(MarkdownItAttrs)
    .use(MarkdownItContainer)

  return md
}
