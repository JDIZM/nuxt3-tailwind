import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  srcDir: "./",
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
