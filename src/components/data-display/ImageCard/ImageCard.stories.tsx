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
    size: 180,
    selected: false,
    loading: false,
    title: 'Image Card',
    description: 'This is a sample image card',
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

export const ControlledSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState(false)

    return (
      <ExampleStory title="Click to toggle selection">
        <ImageCard
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Selectable image"
          size={180}
          selected={selected}
          onChange={setSelected}
          title="Selectable Card"
          description="Click to toggle selection state"
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
        title: 'Product A',
        description: 'First product option',
      },
      {
        id: 2,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        title: 'Product B',
        description: 'Second product option',
      },
      {
        id: 3,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        tag: 'Live',
        tagColor: 'green',
        title: 'Product C',
        description: 'Third product option',
      },
      {
        id: 4,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        tag: 'Live',
        tagColor: 'green',
        title: 'Product D',
        description: 'Fourth product option',
      },
      {
        id: 5,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Product E',
        description: 'Fifth product option',
      },
      {
        id: 6,
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        tag: 'Live',
        tagColor: 'green',
        title: 'Product F',
        description: 'Sixth product option',
      },
    ]

    const toggleSelection = (id: number): void => {
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
              size={180}
              selected={selectedIds.includes(img.id)}
              onChange={() => {
                toggleSelection(img.id)
              }}
              tag={img.tag}
              tagColor={img.tagColor}
              title={img.title}
              description={img.description}
            />
          ))}
        </Space>
        <div style={{ marginTop: '16px' }}>Selected: {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}</div>
      </ExampleStory>
    )
  },
}
