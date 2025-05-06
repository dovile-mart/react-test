import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-test/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    cors: {
      origin: ['https://dovile-mart.github.io'],
      methods: 'GET,HEAD,PUT,PATCH,DELETE'
    },
  },
})
