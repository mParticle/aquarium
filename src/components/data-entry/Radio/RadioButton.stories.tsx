import { type Meta, type StoryObj } from '@storybook/react'
import { Radio } from 'src/components/data-entry/Radio/Radio'

const meta: Meta<typeof Radio.Button> = {
  title: 'Components/Not Prod Ready/Data Entry/Radio/RadioButton',
  component: Radio.Button,

  args: {
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    value: undefined,
    children: 'Radio Button',
  },
}
export default meta

type Story = StoryObj<typeof Radio.Button>

export const Primary: Story = {}
