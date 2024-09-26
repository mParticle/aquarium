import { type Meta, type StoryObj } from '@storybook/react'
import { Rate } from 'src/components/data-entry/Rate/Rate'

const meta: Meta<typeof Rate> = {
  title: 'Components/Data Entry/Rate',
  component: Rate,

  args: {},
}
export default meta

type Story = StoryObj<typeof Rate>

export const Primary: Story = {}
