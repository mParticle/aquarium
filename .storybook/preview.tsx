import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Changelog', 'Feedback', 'Component Process'],
          'Foundations',
          ['Typography', ['Icons', ['Rokt Icons', 'Special Icons', 'mParticle Icons']], 'Color Palette'],
          'UI Copy Styleguide',
          ['Documentation'],
          'Components',
          [
            'Data Display',
            'Data Entry',
            [
              'QueryItem',
              ['Documentation'],
              'Input',
              [
                'Documentation',
                'Text Input',
                'Number Input',
                'Percentage Input',
                'Duration Input',
                'Search Input',
                'Text Area Input',
                'Password Input',
                'Required Text Input',
                'Optional Text Input',
                'Text Input with Help Tooltip',
              ],
            ],
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
