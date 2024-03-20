import { type Meta, type StoryObj } from '@storybook/react'
import { Spin } from 'src/components/feedback/Spin/Spin'

const meta: Meta<typeof Spin> = {
  title: 'Aquarium/Feedback/Spin',
  component: Spin,

  args: {},
}
export default meta

type Story = StoryObj<typeof Spin>

export const Primary: Story = {}
