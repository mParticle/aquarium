import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from 'src/components/not-prod-ready/Timeline/Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Experimental/Timeline',
  component: Timeline,

  args: {},
}
export default meta

type Story = StoryObj<typeof Timeline>

export const Primary: Story = {}
