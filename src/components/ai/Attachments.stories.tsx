import { type Meta, type StoryObj } from '@storybook/react'
import { Attachments } from 'src/components/ai/Attachments'

const meta: Meta<typeof Attachments> = {
  title: 'Components/AI/Attachments',
  component: Attachments,
}
export default meta

type Story = StoryObj<typeof Attachments>

export const Basic: Story = {
  args: {
    placeholder: { title: 'Drop files here', description: 'or click to browse' },
  },
}
