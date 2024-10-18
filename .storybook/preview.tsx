import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Changelog', 'FAQ'],
          'Component Process',
          [
            'Introduction',
            'Components',
            ['Using components', 'Change process'],
            'Candidate Components',
            ['Introducing new ones', 'Using existing ones', 'Promoting to a component'],
            'Design Templates',
          ],
          'Foundations',
          ['Colors', 'Typography', 'Icons', 'Errors', 'Loading'],
          'Components',
          [
            'Data Display',
            'Data Entry',
            'General',
            'Feedback',
            'Layout',
            'Navigation',
            'Other',
            'Unused',
            ['Documentation', 'Calendar', 'Carousel', 'ColorPicker', 'QRCode', 'Rate', 'Watermark'],
          ],
          'Candidate Components',
          'UX Patterns',
          ['Table', ['Table', 'Filters']],
          'Contributing',
          ['Introduction', 'Commits', 'Testing in the platforms', 'Release Process', 'Maintainers'],
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
