// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'aquarium',
      formats: ['es'],
      fileName: 'aquarium',
    },
    rollupOptions: {
      external: ['react', 'antd'],
      output: {
        globals: {
          antd: 'antd',
          react: 'React',
        },
      },
    },
  },
})