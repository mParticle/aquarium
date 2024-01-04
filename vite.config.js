// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'aquarium',
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