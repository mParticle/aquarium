import { type Meta, type StoryObj } from '@storybook/react'
import { Image } from 'src/components/data-display/Image/Image'

const meta: Meta<typeof Image> = {
  title: 'Components/Data Display/Image',
  component: Image,

  args: {},
}
export default meta

type Story = StoryObj<typeof Image>

export const Primary: Story = {}
