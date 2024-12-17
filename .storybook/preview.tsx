import type { Preview } from '@storybook/react'
// import type { IndexEntry } from '@storybook/types'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      // TODO https://mparticle-eng.atlassian.net/browse/UNI-1214
      // storySort: (a: IndexEntry, b: IndexEntry) => {
      // console.log('Ordering stories', { a, b })
      // const order = ['Documentation', 'Cell Types', 'Filters', 'Primary', 'Complex']
      // return order.indexOf(a[1].name) - order.indexOf(b[1].name)
      // },
      storySort: {
        order: [
          'About',
          [
            'Introduction',
            'Changelog',
            'FAQ',
            'Feedback',
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
