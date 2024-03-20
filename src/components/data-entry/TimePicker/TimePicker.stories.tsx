import { type Meta, type StoryObj } from '@storybook/react'
import { TimePicker } from 'src/components/data-entry/TimePicker/TimePicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Aquarium/Data Entry/TimePicker',
  component: TimePicker,

  args: {},
}
export default meta

type Story = StoryObj<typeof TimePicker>

export const Primary: Story = {}
