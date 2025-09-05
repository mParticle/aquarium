import { type Meta, type StoryObj } from '@storybook/react'
import { ErrorStateIcon } from './ErrorStateIcon'

const meta: Meta<typeof ErrorStateIcon> = {
  title: 'Components/General/Icons/ErrorStateIcon',
  component: ErrorStateIcon,
  parameters: {
    docs: {
      description: {
        component: 'Error State Icon component.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ErrorStateIcon>

export const Default: Story = {
  args: {
    size: 'lg',
  },
}
