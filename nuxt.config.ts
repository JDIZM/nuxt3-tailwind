import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    srcDir: './',
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          }
        }
      },
    }
})
