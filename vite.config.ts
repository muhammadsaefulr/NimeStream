import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/otakudesu": {
        target: "https://nimeapi.msaepul.my.id",
        changeOrigin: true,
      }
    }
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@src': '/src',
    }
  }
})
