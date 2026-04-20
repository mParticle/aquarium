import { type Meta, type StoryObj } from '@storybook/react'
import { Conversations } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Conversations> = {
  title: 'Components/AI/Conversations',
  component: Conversations,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
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
