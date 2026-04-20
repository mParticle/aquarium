import { type Meta, type StoryObj } from '@storybook/react'
import { Attachments } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Attachments> = {
  title: 'Components/AI/Attachments',
  component: Attachments,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Attachments>

export const Basic: Story = {
  args: {
    placeholder: { title: 'Drop files here', description: 'or click to browse' },
  },
}
