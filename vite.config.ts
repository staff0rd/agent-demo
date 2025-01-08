import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/webhook': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    watch: {
      // Watch for changes in the entire project directory
      ignored: ['!**/node_modules/**'],
    },
  },
})