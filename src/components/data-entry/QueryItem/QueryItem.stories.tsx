import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem> = {
  title: 'Components/Data Entry/QueryItem',
  component: QueryItem,
  parameters: {
    docs: {
      description: {
        component:
          'DO NOT USE THIS OR YOU WILL BE FIRED! This is a parent component of this component group, and is not supposed to be used on its own.',
      },
    },
  },

  args: {},
}
export default meta

type Story = StoryObj<typeof QueryItem>

export const DontUseThisOrYouWillBeFired: Story = {}
