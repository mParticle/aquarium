import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'
import type { PluginOption, Plugin } from 'vite'
import { withoutVitePlugins } from '@storybook/builder-vite'
import remarkGfm from 'remark-gfm'

type StorybookVitePlugins = { plugins: (PluginOption[] | Plugin)[] }

const config: StorybookConfig & StorybookVitePlugins = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [{ from: './public/images', to: 'images' }],

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)', '../docs/**/*.stories.@(ts|tsx)', '../docs/**/*.mdx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions', // Temporarily disabled due to module loading issues
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // needed for rendering markdown tables in .mdx
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  docs: {
    defaultName: 'Documentation',
  },

  plugins: [react()],

  async viteFinal(config) {
    return {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ['vite:dts']),
    }
  },

  core: {
    disableTelemetry: true, // requested by security
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
