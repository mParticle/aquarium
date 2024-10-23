import type { Meta, StoryObj } from '@storybook/react'
import { Transfer } from 'src/components/not-prod-ready/Transfer/Transfer'

const meta: Meta<typeof Transfer> = {
  title: 'Components/Not Prod Ready/Transfer',
  component: Transfer,

  args: {},
}
export default meta

type Story = StoryObj<typeof Transfer>

export const Primary: Story = {}
