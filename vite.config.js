import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/components/general/Button/Button.tsx'),
        name: 'Button',
        fileName: 'button-dist'
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        src: '/src',
      },
    },
  })