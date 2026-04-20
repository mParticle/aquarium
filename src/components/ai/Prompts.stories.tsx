import { type Meta, type StoryObj } from '@storybook/react'
import { Prompts } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Prompts> = {
  title: 'Components/AI/Prompts',
  component: Prompts,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Prompts>

export const Basic: Story = {
  args: {
    items: [
      { key: '1', label: 'Write a summary', description: 'Summarize the selected text' },
      { key: '2', label: 'Fix grammar', description: 'Correct grammar and spelling' },
      { key: '3', label: 'Translate', description: 'Translate to another language' },
    ],
  },
}
