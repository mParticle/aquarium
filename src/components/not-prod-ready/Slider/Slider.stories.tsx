import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from 'src/components/not-prod-ready/Slider/Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Not Prod Ready/Slider',
  component: Slider,

  args: {},
}
export default meta

type Story = StoryObj<typeof Slider>

export const Primary: Story = {}
