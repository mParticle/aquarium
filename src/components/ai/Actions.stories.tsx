import { type Meta, type StoryObj } from '@storybook/react'
import { Actions } from 'src/components/ai/Actions'

const meta: Meta<typeof Actions> = {
  title: 'Components/AI/Actions',
  component: Actions,
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
