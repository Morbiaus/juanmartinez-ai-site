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
        workflowArticle: resolve(__dirname, 'stop-starting-with-ai-start-with-the-workflow/index.html'),
        rpaAgenticControlArticle: resolve(__dirname, 'from-rpa-to-agentic-ai-new-control-problem-part-1/index.html'),
        thoughtPartnerArticle: resolve(__dirname, 'thought-partner/index.html'),
        contentAnalyticsDashboard: resolve(__dirname, 'admin/content-analytics/index.html'),
        martinezMethod: resolve(__dirname, 'martinez-method.html'),
      },
    },
  },
})
