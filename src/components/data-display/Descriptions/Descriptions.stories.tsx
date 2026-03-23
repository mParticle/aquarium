import { type Meta, type StoryObj } from '@storybook/react'
import { Descriptions } from 'src/components/data-display/Descriptions/Descriptions'

const meta: Meta<typeof Descriptions> = {
  title: 'Components/Data Display/Descriptions',
  component: Descriptions,

  args: {
    items: [{ label: 'Item 1', children: 'Value 1' }],
  },
}
export default meta

type Story = StoryObj<typeof Descriptions>

export const Playground: Story = {
  args: {
    title: 'User Info',
    bordered: false,
    column: 3,
    size: 'default',
    layout: 'horizontal',
    items: [
      { key: '1', label: 'Name', children: 'John Doe' },
      { key: '2', label: 'Email', children: 'john@example.com' },
      { key: '3', label: 'Role', children: 'Admin' },
    ],
  },
  argTypes: {
    bordered: { control: 'select', options: [false, true] },
    column: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
    size: {
      control: 'select',
      options: ['default', 'middle', 'small'],
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export const Primary: Story = {}
