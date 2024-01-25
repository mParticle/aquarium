import { type Meta, type StoryObj } from '@storybook/react'

import { Tabs } from 'src/components/data-display/Tabs/Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Aquarium/Data Display/Tabs',
  component: Tabs,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {}
