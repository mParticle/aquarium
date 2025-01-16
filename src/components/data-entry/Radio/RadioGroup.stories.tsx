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

export const WithEnvOptions: Story = {
  args: {
    options: [
      { label: 'Production', value: 'production' },
      { label: 'Development', value: 'development' },
      { label: 'Production & Development', value: 'unknown' },
    ],
    defaultValue: 'development',
    optionType: 'default',
  },
}

export const WithButtonOptionsType: Story = {
  args: {
    options: [
      { label: 'Overview', value: 'overview' },
      { label: 'Connections', value: 'connections' },
    ],
    defaultValue: 'overview',
    optionType: 'button',
  },
}
