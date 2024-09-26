import { type Meta, type StoryObj } from '@storybook/react'
import { Transfer } from 'src/components/data-entry/Transfer/Transfer'

const meta: Meta<typeof Transfer> = {
  title: 'Components/Data Entry/Transfer',
  component: Transfer,

  args: {},
}
export default meta

type Story = StoryObj<typeof Transfer>

export const Primary: Story = {}
