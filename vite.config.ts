import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/main": "http://localhost:4000"
    }
  },
  plugins: [react()],
})
