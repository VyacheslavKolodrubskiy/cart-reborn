import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [['shadow-primary', '']],
  presets: [presetUno({ prefix: 'un-' })],
})
