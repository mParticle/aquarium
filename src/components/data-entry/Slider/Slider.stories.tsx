import { type Meta, type StoryObj } from '@storybook/react'
import { Slider } from 'src/components/data-entry/Slider/Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Data Entry/Slider',
  component: Slider,

  args: {},
}
export default meta

type Story = StoryObj<typeof Slider>

export const Primary: Story = {}
