import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        method: 'alphabetical',
        includeNames: true,
        order: [
          'About',
          ['Introduction', 'Changelog', 'Feedback', 'Component Process'],
          'Foundations',
          ['Typography', 'Icons', 'Color Palette'],
          'Components',
          [
            'Data Display',
            'Data Entry',
            ['QueryItem', ['Documentation']],
            'General',
            ['Button', ['Documentation']],
            'Feedback',
            'Layout',
            'Navigation',
            'Other',
            'Not Prod Ready',
            ['Documentation', 'Calendar', 'Carousel', 'ColorPicker', 'QRCode', 'Rate', 'Watermark'],
          ],
          'Candidate Components',
          'UX Patterns',
          ['Table', ['Table', ['Documentation', 'Cell Types', 'Filters', 'Primary', 'Complex']]],
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
