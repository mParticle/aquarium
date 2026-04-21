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
        order: [
          'About',
          ['Introduction', 'Changelog', 'Feedback', 'Component Process'],
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
            ['Button', ['Documentation'], 'Icons', ['Rokt Icons', 'Special Icons', 'mParticle Icons']],
            'Feedback',
            'Layout',
            'Navigation',
            'Other',
            'AI',
          ],
          'UX Patterns',
          ['Table', ['Table', ['Documentation', 'Cell Types', 'Filters', 'Primary', 'Complex']]],
          'Contributing',
          ['Introduction', 'Commits', 'Testing in the platforms', 'Release Process', 'Maintainers'],
          'Design Tokens',
          ['Color Palette', 'Typography', 'Spacing'],
          'Experimental',
          ['Documentation', 'General', 'Data Display', 'Data Entry', 'Feedback', 'Navigation'],
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
