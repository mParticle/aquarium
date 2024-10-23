import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import postcssNested from 'postcss-nested'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      src: '/src',
      docs: '/docs',
      design: '/design',
    },
  },

  plugins: [svgr(), dts({ include: 'src/', exclude: '**/*.stories.*', rollupTypes: false, insertTypesEntry: true })],

  css: {
    postcss: {
      plugins: [postcssNested()],
    },
  },

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
