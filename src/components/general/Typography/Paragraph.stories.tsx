import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Paragraph } from 'src/components/general/Typography/Typography'

const meta: Meta<typeof Paragraph> = {
  title: 'Aquarium/General/Paragraph',
  component: Paragraph,

  args: {},
}
export default meta;


type Story = StoryObj<typeof Paragraph>
export const Primary = {}