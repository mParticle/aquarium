import type { Meta, StoryObj } from '@storybook/react'
import { Affix } from 'src/components/not-prod-ready/Affix/Affix'

const meta: Meta<typeof Affix> = {
  title: 'Components/Not Prod Ready/Affix',
  component: Affix,

  args: {},
}
export default meta

type Story = StoryObj<typeof Affix>

export const Primary: Story = {}
