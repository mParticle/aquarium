import type { Meta, StoryObj } from '@storybook/react'
import { MoreActionsButton } from 'src/components/UXPatterns/MoreActionsButton/MoreActionsButton'

const meta: Meta<typeof MoreActionsButton> = {
  title: 'UX Patterns/MoreActionsButton',
  component: MoreActionsButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof MoreActionsButton>

export const Default: Story = {
  args: {
    menuItems: {
      items: [
        {
          key: 'edit',
          label: 'Edit',
          onClick: () => alert('Edit clicked'),
        },
        {
          key: 'copy',
          label: 'Copy',
          onClick: () => alert('Copy clicked'),
        },
        {
          key: 'delete',
          label: 'Delete',
          danger: true,
          onClick: () => alert('Delete clicked'),
        },
      ],
    },
  },
}
