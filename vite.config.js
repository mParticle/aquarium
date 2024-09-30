import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import postcssNesting from 'postcss-nesting'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      src: '/src',
      design: '/design',
    },
  },

  plugins: [svgr(), dts({ include: 'src/components', rollupTypes: true })],

  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },

  build: {
    target: 'es6',
    outDir: 'dist',
    lib: {
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
