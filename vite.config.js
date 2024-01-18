import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },

  esbuild: {
    jsxInject: `import React from "react"; import { expect } from "@storybook/test";`,
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