import type { Meta, StoryObj } from '@storybook/react'
import { GetGlobalToken } from 'src/utils/GetGlobalToken'

const meta: Meta<typeof GetGlobalToken> = {
  title: 'Contributing/Tooling/GetGlobalToken',
  component: GetGlobalToken,
  tags: ['!dev', '!autodocs'],

  args: {},
}
export default meta

type Story = StoryObj<typeof GetGlobalToken>

export const Primary: Story = {}
