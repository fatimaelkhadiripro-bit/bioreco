import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path ensures assets load on GitHub Pages under any subpath
  build: {
    outDir: 'docs',
  }
})
