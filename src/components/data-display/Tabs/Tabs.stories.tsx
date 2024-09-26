import { type Meta, type StoryObj } from '@storybook/react'
import { Tabs } from 'src/components/data-display/Tabs/Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Data Display/Tabs',
  component: Tabs,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {}
