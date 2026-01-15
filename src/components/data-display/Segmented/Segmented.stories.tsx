import { type Meta, type StoryObj } from '@storybook/react'
import { Segmented } from 'src/components/data-display/Segmented/Segmented'

const segmentedOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
]

const meta: Meta<typeof Segmented> = {
  title: 'Components/Not Prod Ready/Data Display/Segmented',
  component: Segmented,

  args: {
    options: segmentedOptions,
    defaultValue: segmentedOptions[0]?.value,
    size: 'middle',
  },
  argTypes: {
    onChange: { action: 'change' },
  },
}
export default meta

type Story = StoryObj<typeof Segmented>

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}
