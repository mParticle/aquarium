import { type Meta, type StoryObj } from '@storybook/react'
import { ColorPicker } from 'src/components/data-entry/ColorPicker/ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Aquarium/Data Entry/ColorPicker',
  component: ColorPicker,

  args: {},
}
export default meta

type Story = StoryObj<typeof ColorPicker>

export const Primary: Story = {}