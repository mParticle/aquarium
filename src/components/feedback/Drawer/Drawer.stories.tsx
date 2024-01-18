import { type Meta, type StoryObj } from '@storybook/react'

import { Drawer } from 'src/components/feedback/Drawer/Drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Aquarium/Feedback/Drawer',
  component: Drawer,

  args: {},
}
export default meta

type Story = StoryObj<typeof Drawer>

export const Primary: Story = {}
