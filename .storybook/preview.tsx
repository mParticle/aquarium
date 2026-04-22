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
      storySort: (a: { title: string; name?: string }, b: { title: string; name?: string }) => {
        const TOP = ['About', 'Components', 'UX Patterns', 'Contributing', 'Design Tokens', 'Experimental']
        const SUB: Record<string, string[]> = {
          About: ['Introduction', 'Changelog', 'Feedback', 'Component Process'],
          Components: [
            'Data Display',
            'Data Entry',
            'General',
            'Feedback',
            'Layout',
            'Navigation',
            'Other',
            'AI',
            'Charts',
          ],
          'Components/Layout': ['Flex', 'Space', 'Grid', 'Center', 'Divider', 'Layout', 'Splitter'],
          'Components/Data Entry/Input': [
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
          'UX Patterns': ['Documentation', 'Data Exploration', 'Flows', 'Inline Controls'],
          'UX Patterns/Data Exploration/Table': ['Documentation', 'Cell Types', 'Filters', 'Primary', 'Complex'],
          Contributing: ['Introduction', 'Commits', 'Testing in the platforms', 'Release Process', 'Maintainers'],
          'Design Tokens': ['Color Palette', 'Typography', 'Spacing'],
          Experimental: ['Documentation', 'General', 'Data Display', 'Data Entry', 'Feedback', 'Navigation'],
        }

        const rank = (parent: string, segment: string, depth: number): number => {
          if (segment === 'Documentation') return -1
          if (depth === 0) {
            const i = TOP.indexOf(segment)
            return i === -1 ? TOP.length : i
          }
          const explicit = SUB[parent]
          if (explicit) {
            const i = explicit.indexOf(segment)
            return i === -1 ? explicit.length : i
          }
          return Number.POSITIVE_INFINITY
        }

        const aSeg = a.title.split('/')
        const bSeg = b.title.split('/')
        const len = Math.min(aSeg.length, bSeg.length)

        for (let i = 0; i < len; i++) {
          if (aSeg[i] === bSeg[i]) continue
          const parent = aSeg.slice(0, i).join('/')
          const aRank = rank(parent, aSeg[i], i)
          const bRank = rank(parent, bSeg[i], i)
          if (aRank !== bRank) return aRank - bRank
          return aSeg[i].localeCompare(bSeg[i], undefined, { numeric: true })
        }

        if (aSeg.length !== bSeg.length) return aSeg.length - bSeg.length
        if (a.name === 'Documentation' && b.name !== 'Documentation') return -1
        if (b.name === 'Documentation' && a.name !== 'Documentation') return 1
        return (a.name ?? '').localeCompare(b.name ?? '', undefined, { numeric: true })
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
