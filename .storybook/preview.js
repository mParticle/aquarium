
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    
    layout: 'centered',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview