import { type Meta, type StoryObj } from '@storybook/react'

import { App } from 'src/components/other/App/App'

const meta: Meta<typeof App> = {
  title: 'Aquarium/Other/App',
  component: App,

  args: {},
}
export default meta

type Story = StoryObj<typeof App>

export const Primary: Story = {}
