import { type Meta, type StoryObj } from '@storybook/react'
import { Sender } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Sender> = {
  title: 'Components/AI/Sender',
  component: Sender,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Sender>

export const Basic: Story = {
  args: {
    placeholder: 'Type a message...',
  },
}
