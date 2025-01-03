import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/otakudesu": "https://sate.msaepul.my.id/otakudesu"
    }
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@src': '/src',
    }
  }
})
