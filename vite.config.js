import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        humanJudgmentArticle: resolve(__dirname, 'ai-human-judgment-education/index.html'),
        aiFluencyPremium: resolve(__dirname, 'ai-fluency-premium/index.html'),
      },
    },
  },
})
