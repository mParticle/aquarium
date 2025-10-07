import { type Meta, type StoryObj } from '@storybook/react'
import { SuccessStateIcon } from './SuccessStateIcon'

const meta: Meta<typeof SuccessStateIcon> = {
  title: 'Components/General/Icons/SuccessStateIcon',
  component: SuccessStateIcon,
  parameters: {
    docs: {
      description: {
        component: 'Success State Icon component.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SuccessStateIcon>

export const Default: Story = {
  args: {
    size: 'lg',
  },
}
