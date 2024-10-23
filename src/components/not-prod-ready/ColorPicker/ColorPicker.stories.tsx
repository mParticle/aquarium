import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from 'src/components/not-prod-ready/ColorPicker/ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/Not Prod Ready/ColorPicker',
  component: ColorPicker,

  args: {},
}
export default meta

type Story = StoryObj<typeof ColorPicker>

export const Primary: Story = {}
