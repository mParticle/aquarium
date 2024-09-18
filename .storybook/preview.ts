import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Contributing', 'Changelog', 'FAQ'],
          'Components',
          'Foundations',
          ['Colors', 'Typography', 'Icons', 'Errors', 'Loading'],
          'Candidate Components',
          'Design Templates',
          'Component Process',
          [
            'Introduction',
            'Components',
            ['Using components', 'Change process'],
            'Candidate Components',
            ['Introducing new ones', 'Using existing ones', 'Promoting to a component'],
            'Design Templates',
          ],
        ],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
