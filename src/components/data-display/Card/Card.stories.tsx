import { type Meta, type StoryObj } from '@storybook/react'

import { Card } from 'src/components/data-display/Card/Card'

const meta: Meta<typeof Card> = {
  title: 'Aquarium/Data Display/Card',
  component: Card,

  args: {},
}
export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {}
