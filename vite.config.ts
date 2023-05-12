import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: true }]
      ]
    }
  })],
  server: {
    open: "http://127.0.0.1:5173/"
  }
})
