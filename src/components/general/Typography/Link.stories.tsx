import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Link } from 'src/components/general/Typography/Typography'

const meta: Meta<typeof Link> = {
  title: 'Aquarium/General/Link',
  component: Link,

  args: {},
}
export default meta;


type Story = StoryObj<typeof Link>
export const Primary = {}