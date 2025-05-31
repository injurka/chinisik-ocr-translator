<script setup lang="ts">
import { ref, watch } from 'vue'
import { createMarkdownRenderer } from '../lib'

interface Props {
  content: string
}

const props = defineProps<Props>()
const renderedContent = ref<string>('')
const md = createMarkdownRenderer()

watch(
  () => props.content,
  (newContent) => {
    renderedContent.value = md.render(newContent || '')
  },
  { immediate: true },
)
</script>

<template>
  <div class="markdown-body" v-html="renderedContent" />
</template>

<style lang="scss">
.markdown-body {
  color: var(--fg-primary-color);
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
  line-height: 1.5;
  font-size: 15px;

  h2 {
    font-size: 1.1rem;
    border-bottom: 2px solid var(--border-secondary-color);
    margin-top: 0rem;
    font-weight: 500;
    margin-bottom: 12px;
    padding: 0.4rem;
    text-align: center;
    background-color: var(--bg-secondary-color);
    border-bottom: 2px solid var(--border-accent-color);
    border-top: 2px solid var(--border-accent-color);
  }

  p {
    margin-bottom: 0.8em;
  }

  a {
    color: var(--fg-accent-color);
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--fg-action-color);
    }
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ul,
  ol {
    margin-top: 0.4em;
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.3em;

    > p {
      margin-bottom: 0;
    }
  }

  ul {
    list-style-type: disc;
    ::marker {
      color: var(--fg-secondary-color);
    }
  }

  ol {
    list-style-type: disc;

    ::marker {
      color: var(--bg-overlay-secondary-color);
    }
    > li {
      color: var(--fg-secondary-color);
      position: relative;
      margin: 12px 0;

      @include mobile {
        margin: 4px 0;
      }

      ul {
        padding-right: 0;
      }

      > ul {
        &:first-of-type {
          padding-top: 0px;
          padding-bottom: 8px;
        }
      }

      > p {
        margin: 0;
      }
    }

    &::before {
      position: absolute;
      content: '';
      border-left: 1px solid var(--border-primary-color);
      left: -12px;
      top: 0;
      margin-top: 30px;
      height: calc(100% - 35px);
      opacity: 0.5;
    }
  }

  ol {
    list-style-type: decimal;
    ::marker {
      color: var(--fg-secondary-color);
    }
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    padding-left: 1.2em;
  }

  code:not(pre > code) {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    background-color: var(--bg-secondary-color);
    color: var(--fg-primary-color);
    padding: 0.15em 0.3em;
    margin: 0 0.1em;
    font-size: 0.85em;
    border-radius: 3px;
    white-space: nowrap;
  }

  pre {
    background: var(--bg-tertiary-color);
    color: var(--fg-primary-color);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.875em;

    code {
      background: none;
      color: inherit;
      padding: 0;
      margin: 0;
      font-size: 1em;
      white-space: pre;
      word-wrap: normal;
    }
  }

  blockquote {
    border-left: 3px solid var(--border-accent-color);
    padding: 0.6em 1em;
    margin: 1em 0;
    color: var(--fg-secondary-color);
    background-color: var(--bg-secondary-color);

    p {
      margin-bottom: 0.4em;
      &:last-child {
        margin-bottom: 0;
      }
    }

    ol {
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
    }
  }

  hr {
    border: 0;
    height: 1px;
    background-color: var(--border-secondary-color);
    margin: 1.8em 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3px;
    display: block;
    margin: 0.8em auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
    font-size: 0.9em;
  }

  th,
  td {
    border: 1px solid var(--border-secondary-color);
    padding: 0.4em 0.6em;
    text-align: left;
  }

  th {
    background-color: var(--bg-secondary-color);
    font-weight: 600;
    color: var(--fg-primary-color);
  }

  details {
    margin: 1em 0;
    border: 1px solid var(--border-secondary-color);
    border-radius: 4px;
    background-color: var(--bg-secondary-color);

    summary {
      font-weight: 600;
      cursor: pointer;
      padding: 0.6em 0.8em;
      color: var(--fg-primary-color);
      position: relative;

      &:focus-visible {
        outline: 2px solid var(--fg-accent-color);
        outline-offset: 1px;
      }
    }

    & > *:not(summary) {
      padding: 0 0.8em 0.8em 0.8em;
    }

    p:has(img) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 8px;
      margin-top: 0.8em;

      br {
        display: none;
      }

      img {
        object-fit: cover;
        min-height: 160px;
        height: 100%;
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        margin: 0;
      }
    }
  }
}
</style>
