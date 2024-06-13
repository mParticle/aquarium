import { type Meta, type StoryObj } from '@storybook/react'
import ValueSelector from './ValueSelector'

const meta: Meta<typeof ValueSelector> = {
  title: 'Aquarium/Data Entry/QueryItem/ValueSelector',
  component: ValueSelector,
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

type Story = StoryObj<typeof ValueSelector>

export const DontUseThisOrYouWillBeFired: Story = {}