import type { Meta, StoryObj } from '@storybook/react'
import { Tree } from 'src/components/not-prod-ready/Tree/Tree'

const meta: Meta<typeof Tree> = {
  title: 'Components/Not Prod Ready/Tree',
  component: Tree,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tree>

export const Primary: Story = {}
