import { type Meta, type StoryObj } from '@storybook/react'
import { Radio } from 'src/components/data-entry/Radio/Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Data Entry/Radio',
  component: Radio,

  args: {
    checked: false,
    defaultChecked: false,
    disabled: false,
    value: undefined,
    onChange: undefined,
  },
}
export default meta

type Story = StoryObj<typeof Radio>

export const Primary: Story = {
  args: {
    checked: true,
    children: 'All users',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'All users',
  },
}
