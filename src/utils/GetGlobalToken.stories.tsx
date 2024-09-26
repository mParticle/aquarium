import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { GetGlobalToken } from 'src/utils/GetGlobalToken'

const meta: Meta<typeof GetGlobalToken> = {
  title: 'Components/Other/GetGlobalToken',
  component: GetGlobalToken,

  args: {},
}
export default meta

type Story = StoryObj<typeof GetGlobalToken>

export const Primary: Story = {}
