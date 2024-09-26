import { type Meta, type StoryObj } from '@storybook/react'
import { Tree } from 'src/components/data-display/Tree/Tree'

const meta: Meta<typeof Tree> = {
  title: 'Components/Data Display/Tree',
  component: Tree,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tree>

export const Primary: Story = {}
