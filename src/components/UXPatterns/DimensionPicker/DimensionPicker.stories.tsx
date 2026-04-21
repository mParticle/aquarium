import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DimensionPicker, type IDimensionCategory, type IDimensionItem } from './DimensionPicker'
import { Typography, Flex } from 'src/components'
import { SizeXxs, RoktBrand7, ColorTextSecondary } from 'src/styles/style'

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
    description: 'Mauris enim cursus tristique et consequat ultricies amet luctus.',
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
  title: 'UX Patterns/DimensionPicker',
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

const DefaultExample = () => {
  const [selected, setSelected] = useState<string[]>(['page-3', 'page-7'])
  return (
    <DimensionPicker
      categories={sampleCategories}
      items={sampleItems}
      value={selected}
      onChange={setSelected}
      onApply={keys => alert(`Applied ${keys.length} dimensions`)}
    />
  )
}

const ControlledExample = () => {
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
}

export const Primary: Story = {
  render: () => <DefaultExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Default picker with pre-selected items. Navigate categories, use the search box to filter, and hover items to see descriptions.',
      },
    },
  },
}

export const WithoutDescriptionPanel: Story = {
  args: {
    showDescriptionPanel: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Omit the description panel when items are self-explanatory or space is limited.',
      },
    },
  },
}

export const WithoutFooter: Story = {
  args: {
    showApplyButton: false,
    showClearAllButton: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Remove the footer when selection changes should apply immediately via `onChange` without an explicit confirm step.',
      },
    },
  },
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Fully controlled mode — the parent owns the selection state and the picker is kept in sync via `value` and `onChange`.',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Show a loading state while category items are being fetched asynchronously.',
      },
    },
  },
}

export const Compact: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <DimensionPicker
        categories={sampleCategories}
        items={sampleItems}
        size="compact"
        value={selected}
        onChange={setSelected}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact size reduces panel heights and padding — useful in space-constrained layouts.',
      },
    },
  },
}

const itemSelectionCounts: Record<string, number> = {
  campaign: 2,
  geographic: 1,
  page: 7,
}

export const CustomCategoryRender: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <DimensionPicker
        categories={sampleCategories}
        items={sampleItems}
        value={selected}
        onChange={setSelected}
        renderCategory={(category, isSelected) => (
          <Flex align="center" style={{ flex: 1, gap: SizeXxs }}>
            <Typography.Text
              size="sm"
              style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {category.label}
            </Typography.Text>
            {itemSelectionCounts[category.key] && (
              <Typography.Text size="sm" style={{ color: isSelected ? RoktBrand7 : ColorTextSecondary }}>
                {itemSelectionCounts[category.key]}
              </Typography.Text>
            )}
          </Flex>
        )}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `renderCategory` to add selection counts, badges, or any custom content alongside each category label.',
      },
    },
  },
}

export const CustomDescriptionRender: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <DimensionPicker
        categories={sampleCategories}
        items={sampleItems}
        value={selected}
        onChange={setSelected}
        renderDescription={item => (
          <Flex vertical style={{ gap: SizeXxs }}>
            <Typography.Text size="sm" strong>
              {item ? item.label : 'No selection'}
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              {item?.description ?? 'Hover a dimension to preview it here.'}
            </Typography.Text>
            {item && (
              <Typography.Text size="sm" type="secondary">
                Category: {item.categoryKey}
              </Typography.Text>
            )}
          </Flex>
        )}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `renderDescription` to replace the default description panel with custom content — useful for rich previews, links, or structured metadata.',
      },
    },
  },
}

const ServerSearchExample = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredItems = sampleItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <DimensionPicker
      categories={sampleCategories}
      items={filteredItems}
      searchValue={searchQuery}
      onSearch={setSearchQuery}
    />
  )
}

export const ControlledSearch: Story = {
  render: () => <ServerSearchExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Use `searchValue` + `onSearch` to drive filtering externally — pass in pre-filtered `items` from an API call or local state.',
      },
    },
  },
}

export const WithFooterContent: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <DimensionPicker
        categories={sampleCategories}
        items={sampleItems}
        value={selected}
        onChange={setSelected}
        footerContent={
          <Typography.Text size="sm" type="secondary">
            {selected.length} of {sampleItems.length} selected
          </Typography.Text>
        }
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `footerContent` to inject content on the left side of the footer — useful for selection counts, hints, or secondary actions.',
      },
    },
  },
}
