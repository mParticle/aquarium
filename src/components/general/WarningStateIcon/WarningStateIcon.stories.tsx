import { type Meta, type StoryObj } from '@storybook/react'
import { WarningStateIcon } from './WarningStateIcon'

const meta: Meta<typeof WarningStateIcon> = {
  title: 'Components/General/WarningStateIcon',
  component: WarningStateIcon,
  parameters: {
    docs: {
      description: {
        component: 'Warning State Icon component.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof WarningStateIcon>

export const Default: Story = {
  args: {
    size: 'lg',
  },
}
