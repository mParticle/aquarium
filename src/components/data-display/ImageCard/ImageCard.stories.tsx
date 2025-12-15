import { type Meta, type StoryObj } from '@storybook/react'
import { ImageCard } from 'src/components/data-display/ImageCard/ImageCard'
import { useState } from 'react'
import { Space } from 'src/components'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof ImageCard> = {
  title: 'Components/Data Display/ImageCard',
  component: ImageCard,
  args: {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    alt: 'Sample image',
    width: 200,
    height: 200,
    selected: false,
    loading: false,
  },
  argTypes: {
    selected: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    tagColor: {
      control: 'select',
      options: ['default', 'blue', 'green', 'red', 'orange', 'purple', 'gold'],
    },
  },
}
export default meta

type Story = StoryObj<typeof ImageCard>

export const Primary: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}

export const WithTag: Story = {
  args: {
    tag: 'Featured',
    tagColor: 'blue',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const SelectedWithTag: Story = {
  args: {
    selected: true,
    tag: 'Premium',
    tagColor: 'gold',
  },
}

export const ControlledSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState(false)

    return (
      <ExampleStory title="Click to toggle selection">
        <ImageCard
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Selectable image"
          width={200}
          height={200}
          selected={selected}
          onChange={setSelected}
        />
        <div style={{ marginTop: '16px' }}>Selected: {selected ? 'Yes' : 'No'}</div>
      </ExampleStory>
    )
  },
}

export const MultipleCards: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([])

    const images = [
      {
        id: 1,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        tag: 'Live',
        tagColor: 'green',
      },
      {
        id: 2,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        tag: 'Live',
        tagColor: 'green',
      },
      {
        id: 3,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        tag: 'Live',
        tagColor: 'green',
      },
      {
        id: 4,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        tag: 'Live',
        tagColor: 'green',
      },
      {
        id: 5,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        tag: 'Live',
        tagColor: 'green',
      },
      {
        id: 6,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        tag: 'Live',
        tagColor: 'green',
      },
    ]

    const toggleSelection = (id: number) => {
      setSelectedIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))
    }

    return (
      <ExampleStory title="Multiple image selection">
        <Space size="middle" wrap>
          {images.map(img => (
            <ImageCard
              key={img.id}
              src={img.src}
              alt={img.tag}
              width={200}
              height={200}
              selected={selectedIds.includes(img.id)}
              onChange={() => {
                toggleSelection(img.id)
              }}
              tag={img.tag}
              tagColor={img.tagColor}
            />
          ))}
        </Space>
        <div style={{ marginTop: '16px' }}>Selected: {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}</div>
      </ExampleStory>
    )
  },
}
