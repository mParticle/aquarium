import { type Meta, type StoryObj } from '@storybook/react'
import { Conversations } from 'src/components/ai/Conversations'

const meta: Meta<typeof Conversations> = {
  title: 'Components/AI/Conversations',
  component: Conversations,
}
export default meta

type Story = StoryObj<typeof Conversations>

export const Basic: Story = {
  args: {
    items: [
      { key: '1', label: 'What is Aquarium?' },
      { key: '2', label: 'How do I add icons?' },
      { key: '3', label: 'Design token usage' },
    ],
  },
}
