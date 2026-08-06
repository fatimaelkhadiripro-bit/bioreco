import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bioreco/',
  build: {
    outDir: 'docs', // Allows direct GitHub Pages deployment from main branch /docs folder
  }
})
