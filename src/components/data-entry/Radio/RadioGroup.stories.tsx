import { type Meta, type StoryObj } from '@storybook/react'
import { Radio } from 'src/components/data-entry/Radio/Radio'

const meta: Meta<typeof Radio.Group> = {
  title: 'Components/Data Entry/Radio/RadioGroup',
  component: Radio.Group,

  args: {
    disabled: false,
    options: undefined,
    value: undefined,
    onChange: undefined,
    children: undefined,
  },
}
export default meta

type Story = StoryObj<typeof Radio.Group>

export const GroupDefault: Story = {
  name: 'Radio group',
  args: {
    options: [
      { label: 'Production', value: 'production' },
      { label: 'Development', value: 'development' },
      { label: 'Production & Development', value: 'all' },
    ],
    defaultValue: 'production',
  },
}

export const GroupButton: Story = {
  name: 'Button group',
  args: {
    options: [
      { label: 'Overview', value: 'overview' },
      { label: 'Connections', value: 'connections' },
      { label: 'Activity', value: 'activity' },
    ],
    defaultValue: 'overview',
    optionType: 'button',
  },
}

export const GroupButtonSolid: Story = {
  name: 'Solid button group',
  args: {
    options: [
      { label: 'Daily', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
    ],
    defaultValue: 'daily',
    optionType: 'button',
    buttonStyle: 'solid',
  },
}

export const GroupDisabled: Story = {
  name: 'Disabled group',
  args: {
    options: [
      { label: 'Production', value: 'production' },
      { label: 'Development', value: 'development' },
      { label: 'Production & Development', value: 'all' },
    ],
    defaultValue: 'production',
    disabled: true,
  },
}
