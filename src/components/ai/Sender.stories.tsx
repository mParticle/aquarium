import { type Meta, type StoryObj } from '@storybook/react'
import { Sender } from 'src/components/ai/Sender'

const meta: Meta<typeof Sender> = {
  title: 'Components/AI/Sender',
  component: Sender,
}
export default meta

type Story = StoryObj<typeof Sender>

export const Basic: Story = {
  args: {
    placeholder: 'Type a message...',
  },
}
