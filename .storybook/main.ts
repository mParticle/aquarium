// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from "@storybook/react-vite";
import react from '@vitejs/plugin-react'
import { PluginOption, Plugin } from 'vite'

type StorybookVitePlugins = { plugins: (PluginOption[] | Plugin)[]; };

const config: StorybookConfig & StorybookVitePlugins = {
  framework: "@storybook/react-vite",

  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },

  plugins: [react()],
};

export default config;