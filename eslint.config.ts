import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: [
    '**/.dist/**',
    '**/.vitestcache/**',
    '**/e2e-**/**',
    '**/bun.lock',
  ],
})
