import { type Meta, type StoryObj } from '@storybook/react'
import { Progress } from 'src/components/feedback/Progress/Progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,

  args: {
    percent: 0,
    format: percent => `${percent}%`,
  },
}
export default meta

type Story = StoryObj<typeof Progress>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  args: {
    percent: 50,
    size: 14,
    type: 'circle',
    format: () => `Calculating: 50% complete`,
  },
}
