import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DimensionPicker, type IDimensionCategory, type IDimensionItem } from './DimensionPicker'

const sampleCategories: IDimensionCategory[] = [
  { key: 'campaign', label: 'Campaign', icon: 'flag' },
  { key: 'creative', label: 'Creative', icon: 'edit' },
  { key: 'geographic', label: 'Geographic', icon: 'placeholder' },
  { key: 'layout', label: 'Layout', icon: 'grid' },
  { key: 'page', label: 'Page', icon: 'openTab' },
  { key: 'partner', label: 'Partner', icon: 'organization' },
  { key: 'user', label: 'User', icon: 'user' },
  { key: 'additional', label: 'Additional Dimensions', icon: 'add' },
]

const sampleItems: IDimensionItem[] = [
  {
    key: 'campaign-1',
    label: 'Campaign ID',
    categoryKey: 'campaign',
    description: 'Unique identifier for the campaign.',
  },
  {
    key: 'campaign-2',
    label: 'Campaign Name',
    categoryKey: 'campaign',
    description: 'The display name of the campaign.',
  },
  {
    key: 'campaign-3',
    label: 'Campaign Status',
    categoryKey: 'campaign',
    description: 'Current status of the campaign (active, paused, completed).',
  },
  {
    key: 'creative-1',
    label: 'Creative ID',
    categoryKey: 'creative',
    description: 'Unique identifier for the creative asset.',
  },
  {
    key: 'creative-2',
    label: 'Creative Name',
    categoryKey: 'creative',
    description: 'The display name of the creative.',
  },
  { key: 'geo-1', label: 'Country', categoryKey: 'geographic', description: 'The country where the user is located.' },
  { key: 'geo-2', label: 'Region', categoryKey: 'geographic', description: 'Geographic region or state.' },
  { key: 'geo-3', label: 'City', categoryKey: 'geographic', description: 'City where the user is located.' },
  {
    key: 'layout-1',
    label: 'Layout ID',
    categoryKey: 'layout',
    description: 'Unique identifier for the layout configuration.',
  },
  { key: 'layout-2', label: 'Layout Name', categoryKey: 'layout', description: 'Display name of the layout.' },
  ...Array.from({ length: 15 }, (_, i) => ({
    key: `page-${i + 1}`,
    label: i === 0 ? 'Dimension menu item lorem' : 'Lorem dimension menu item',
    categoryKey: 'page',
    description:
      'Mauris enim cursus tristique et consequat ultricies amet luctus. Interdum elementum amet nunc suspendisse nam malesuada augue.',
  })),
  { key: 'partner-1', label: 'Partner ID', categoryKey: 'partner', description: 'Unique identifier for the partner.' },
  {
    key: 'partner-2',
    label: 'Partner Name',
    categoryKey: 'partner',
    description: 'Display name of the partner organization.',
  },
  { key: 'user-1', label: 'User ID', categoryKey: 'user', description: 'Unique identifier for the user.' },
  { key: 'user-2', label: 'User Segment', categoryKey: 'user', description: 'Audience segment the user belongs to.' },
  {
    key: 'add-1',
    label: 'Custom Dimension 1',
    categoryKey: 'additional',
    description: 'Custom dimension defined by the user.',
  },
]

const meta: Meta<typeof DimensionPicker> = {
  title: 'POC/DimensionPicker',
  component: DimensionPicker,
  parameters: {
    layout: 'centered',
  },
  args: {
    categories: sampleCategories,
    items: sampleItems,
  },
}

export default meta

type Story = StoryObj<typeof DimensionPicker>

export const Primary: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['campaign-1'])
    return (
      <DimensionPicker
        categories={sampleCategories}
        items={sampleItems}
        value={selected}
        onChange={setSelected}
        onApply={keys => console.log('Applied:', keys)}
      />
    )
  },
}
