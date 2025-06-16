import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import browserExtension from 'vite-plugin-web-extension'

function root(...paths: string[]): string {
  return path.resolve(__dirname, ...paths)
}

const targetBrowser = process.env.TARGET || 'chrome'

export default defineConfig({
  build: {
    outDir: root(`dist/${targetBrowser}`),
    emptyOutDir: true,
  },
  publicDir: 'public',
  plugins: [
    vue(),
    vueJsx({
      optimize: true,
      enableObjectSlots: true,
    }),
    browserExtension({
      manifest: 'src/manifest.json',
      browser: targetBrowser,
      watchFilePaths: ['src/**/*'],
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/assets/scss/_setup.scss';
        `,
        logger: {
          warn(message: any, options: any) {
            const { stderr } = process
            const span = options.span ?? undefined
            const stack = (options.stack === 'null' ? undefined : options.stack) ?? undefined

            const isExludedError = JSON.stringify(span.text).includes('assets/scss/_setup.scss')
            if (isExludedError)
              return

            if (options.deprecation) {
              if (message?.startsWith('Using / for division outside of calc() is deprecated')) {
                // silences above deprecation warning
                return
              }
              stderr.write('DEPRECATION ')
            }
            stderr.write(`WARNING: ${message}\n`)

            if (span !== undefined) {
              // output the snippet that is causing this warning
              stderr.write(`\n"${span.text}"\n`)
            }

            if (stack !== undefined) {
              // indent each line of the stack
              stderr.write(`    ${stack.toString().trimEnd().replace(/\n/g, '\n    ')}\n`)
            }

            stderr.write('\n')
          },
        },
        api: 'modern-compiler',
      },
    },
  },
})
