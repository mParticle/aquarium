import { type Meta, type StoryObj } from '@storybook/react'
import { Segmented } from 'src/components/data-display/Segmented/Segmented'

const meta: Meta<typeof Segmented> = {
  title: 'Aquarium/Data Display/Segmented',
  component: Segmented,

  args: {},
}
export default meta

type Story = StoryObj<typeof Segmented>

export const Primary: Story = {}
