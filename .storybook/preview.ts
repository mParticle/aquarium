import type { Preview } from '@storybook/react'
import { MPConfigProviderDecorator } from './decorators/MPConfigProvider'

const preview: Preview = {
  decorators: [MPConfigProviderDecorator],
  parameters: {
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
