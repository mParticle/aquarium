import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  plugins: [
    dts({
          insertTypesEntry: true,
          rollupOptions: { 
            showVerboseMessages: true, 
            showDiagnostics: true,
          },
          exclude: [
            'src/**/*.stories.ts',
            'src/**/*.stories.tsx',
            'src/utils/*.ts',
            'src/utils/*.tsx',
            'src/hooks/*.ts',
            'src/hooks/*.tsx',
            'jest.config.ts',
          ],
        }),
  ],
  
  esbuild: {
    jsxInject: `import { expect } from "@storybook/test";`,
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