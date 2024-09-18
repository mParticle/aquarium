import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'
import { PluginOption, Plugin } from 'vite'
import { withoutVitePlugins } from '@storybook/builder-vite'
// import remarkGfm from 'remark-gfm'

type StorybookVitePlugins = { plugins: (PluginOption[] | Plugin)[] }

const config: StorybookConfig & StorybookVitePlugins = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)', '../docs/**/*.mdx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         // needed for rendering markdown tables in .mdx
    //         remarkPlugins: [remarkGfm],
    //       },
    //     },
    //   },
    // },
  ],

  docs: {
    autodocs: true,
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
}

export default config
