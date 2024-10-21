import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from 'src/components/unused/ColorPicker/ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/Unused/ColorPicker',
  component: ColorPicker,

  args: {},
}
export default meta

type Story = StoryObj<typeof ColorPicker>

export const Primary: Story = {}
