import { type Meta, type StoryObj } from '@storybook/react'
import { Bubble } from 'src/components/ai/Bubble'
import { Flex } from 'src/components/layout/Flex/Flex'

const meta: Meta<typeof Bubble> = {
  title: 'Components/AI/Bubble',
  component: Bubble,
}
export default meta

type Story = StoryObj<typeof Bubble>

export const Basic: Story = {
  args: {
    content: 'Hello! How can I help you today?',
  },
}

export const BubbleList: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ maxWidth: 600 }}>
      <Bubble.List
        items={[
          {
            key: '1',
            content: 'Can you explain how to use this component?',
            role: 'user',
            placement: 'end',
          },
          {
            key: '2',
            content:
              'The Bubble component renders chat messages. Use Bubble.List for conversations with multiple messages.',
            role: 'assistant',
            placement: 'start',
          },
        ]}
      />
    </Flex>
  ),
}
