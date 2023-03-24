import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [['h1', 'un-text-2xl un-font-bold un-text-black']],
  presets: [presetUno({ prefix: 'un-' })],
})
