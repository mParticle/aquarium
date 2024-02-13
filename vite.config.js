import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
      design: '/design',
    },
  },
  plugins: [svgr(), dts({ include: 'src/components', rollupTypes: true })],

  build: {
    target: 'es6',
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'aquarium',
      formats: ['es', 'umd'],
      fileName: 'aquarium',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'antd'],
      output: {
        globals: {
          antd: 'antd',
          react: 'React',
        },
      },
    },
  },
})