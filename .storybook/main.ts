import react from '@vitejs/plugin-react'

const config = {
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