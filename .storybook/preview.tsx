import type { Preview } from '@storybook/react'
import React from 'react'
import { ConfigProvider } from '../src/components'
import { FontFamily } from '../src/styles/style'

const preview: Preview = {
  decorators: [
    Story => (
      <ConfigProvider>
        <div style={{ fontFamily: FontFamily }}>
          <Story />
        </div>
      </ConfigProvider>
    ),
  ],
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
