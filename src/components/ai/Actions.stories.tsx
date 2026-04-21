import { type Meta, type StoryObj } from '@storybook/react'
import { Actions } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Actions> = {
  title: 'Components/AI/Actions',
  component: Actions,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Actions>

export const Basic: Story = {
  args: {
    items: [
      { key: 'copy', label: 'Copy' },
      { key: 'like', label: 'Like' },
      { key: 'dislike', label: 'Dislike' },
    ],
  },
}
