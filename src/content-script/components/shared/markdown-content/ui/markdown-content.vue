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
  color: var(--fg-primary-color, #333);
  font-family: var(--font-family-base);
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
    background-color: var(--bg-secondary-color, #f7f7f7);
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

  code:not(pre > code) {
    font-family: var(--font-family-base);
    background-color: var(--bg-secondary-color, #f7f7f7);
    color: var(--fg-primary-color, #333);
    padding: 0.15em 0.3em;
    margin: 0 0.1em;
    font-size: 0.85em;
    border-radius: 3px;
    white-space: nowrap;
  }

  pre {
    background: var(--bg-tertiary-color, #f3f3f3);
    color: var(--fg-primary-color, #333);
    font-family: var(--font-family-base);
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
    color: var(--fg-secondary-color, #495057);
    background-color: var(--bg-secondary-color, #f7f7f7);

    p {
      margin-bottom: 0.4em;
      &:last-child {
        margin-bottom: 0;
      }
    }

    ol {
      color: var(--fg-secondary-color, #495057);
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
    background-color: var(--bg-secondary-color, #f7f7f7);
    font-weight: 600;
    color: var(--fg-primary-color, #333);
  }

  details {
    margin: 1em 0;
    border: 1px solid var(--border-secondary-color);
    border-radius: 4px;
    background-color: var(--bg-secondary-color, #f7f7f7);

    summary {
      font-weight: 600;
      cursor: pointer;
      padding: 0.6em 0.8em;
      color: var(--fg-primary-color, #333);
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

  ul,
  ol {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    padding-left: 1.5em;

    li {
      line-height: 1.65;
      margin-bottom: 0.4em;
      position: relative;

      p {
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }

      ul,
      ol {
        margin-top: 0.4em;
        margin-bottom: 0.4em;
      }
    }
  }

  ul {
    list-style: none;

    li {
      &::before {
        content: '•';
        color: var(--fg-accent-color, #007bff);
        font-weight: bold;
        position: absolute;
        left: -1.2em;
        top: 0.05em;
        font-size: 1.1em;
      }

      ul {
        li {
          &::before {
            content: '◦';
            font-size: 1em;
          }

          ul {
            li {
              &::before {
                content: '▪';
                font-size: 0.9em;
              }
            }
          }
        }
      }
    }
  }

  ol {
    li {
      padding-left: 0.3em;

      &::marker {
        color: var(--fg-accent-color, #007bff);
        font-weight: 500;
      }

      ol {
        list-style-type: lower-alpha;
        ol {
          list-style-type: lower-roman;
        }
      }
    }
  }

  p + ul,
  p + ol {
    margin-top: 1em;
  }
}
</style>
