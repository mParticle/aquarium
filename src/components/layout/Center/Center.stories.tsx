import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Center } from 'src/components/layout/Center/Center'

const meta: Meta<typeof Center> = {
  title: 'Aquarium/Layout/Center',
  component: Center,

  args: {},
}
export default meta

type Story = StoryObj<typeof Center>

export const Primary: Story = {}
