import type { Meta, StoryObj } from '@storybook/react'
import { UnauthorizedTooltip } from './UnauthorizedTooltip'
import { Button } from 'src/components'

const meta: Meta<typeof UnauthorizedTooltip> = {
  title: 'UX Patterns/UnauthorizedTooltip',
  component: UnauthorizedTooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isAuthorized: {
      control: 'boolean',
      description: 'Whether the user is authorized to perform the action',
      defaultValue: false,
    },
    unauthorizedMessage: {
      control: 'text',
      description: 'Custom message to display when unauthorized',
    },
  },
}

export default meta
type Story = StoryObj<typeof UnauthorizedTooltip>

export const DisabledButton: Story = {
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>,
  },
}
