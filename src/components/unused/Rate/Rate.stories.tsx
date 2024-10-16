import type { Meta, StoryObj } from '@storybook/react'
import { Rate } from 'src/components/unused/Rate/Rate'

const meta: Meta<typeof Rate> = {
  title: 'Components/Unused/Rate',
  component: Rate,

  args: {},
}
export default meta

type Story = StoryObj<typeof Rate>

export const Primary: Story = {}
