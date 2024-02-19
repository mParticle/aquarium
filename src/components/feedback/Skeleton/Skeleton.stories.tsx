import { Skeleton } from 'src/components/feedback/Skeleton/Skeleton'
import { type Meta, type StoryObj } from '@storybook/react'
const meta: Meta<typeof Skeleton> = {
  title: 'Aquarium/Feedback/Skeleton',
  component: Skeleton,

  args: {},
}
export default meta

type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  args: {
    style: { width: '200px' },
  },
}