import type { Meta, StoryObj } from '@storybook/react'
import { Rate } from 'src/components/not-prod-ready/Rate/Rate'

const meta: Meta<typeof Rate> = {
  title: 'Components/Not Prod Ready/Rate',
  component: Rate,

  args: {},
}
export default meta

type Story = StoryObj<typeof Rate>

export const Primary: Story = {}
