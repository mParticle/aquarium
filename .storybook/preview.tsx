import type { Preview } from '@storybook/react'
import React from 'react'
import { ConfigProvider } from '../src/components'
import { FontFamily } from '../src/styles/style'

const TOP_SECTION_ORDER = ['About', 'Components', 'UX Patterns', 'Contributing', 'Design Tokens', 'Experimental']

const SUB_SECTION_ORDER: Record<string, string[]> = {
  About: ['Introduction', 'Changelog', 'Feedback', 'Component Process'],
  Components: ['Data Display', 'Data Entry', 'General', 'Feedback', 'Layout', 'Navigation', 'Other', 'AI', 'Charts'],
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

function rankSegment(parentPath: string, segment: string, depth: number): number {
  if (segment === 'Documentation') return -1
  if (depth === 0) {
    const i = TOP_SECTION_ORDER.indexOf(segment)
    return i === -1 ? TOP_SECTION_ORDER.length : i
  }
  const explicit = SUB_SECTION_ORDER[parentPath]
  if (explicit) {
    const i = explicit.indexOf(segment)
    if (i !== -1) return i
    return explicit.length
  }
  return Number.POSITIVE_INFINITY
}

function compareStories(a: { title: string; name?: string }, b: { title: string; name?: string }): number {
  const aSeg = a.title.split('/')
  const bSeg = b.title.split('/')
  const len = Math.min(aSeg.length, bSeg.length)

  for (let i = 0; i < len; i++) {
    if (aSeg[i] === bSeg[i]) continue
    const parent = aSeg.slice(0, i).join('/')
    const aRank = rankSegment(parent, aSeg[i], i)
    const bRank = rankSegment(parent, bSeg[i], i)
    if (aRank !== bRank) return aRank - bRank
    return aSeg[i].localeCompare(bSeg[i], undefined, { numeric: true })
  }

  if (aSeg.length !== bSeg.length) return aSeg.length - bSeg.length
  if (a.name === 'Documentation' && b.name !== 'Documentation') return -1
  if (b.name === 'Documentation' && a.name !== 'Documentation') return 1
  return (a.name ?? '').localeCompare(b.name ?? '', undefined, { numeric: true })
}

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
      storySort: compareStories,
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
