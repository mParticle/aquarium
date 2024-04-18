import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.Action> = {
  title: 'Aquarium/Data Entry/QueryItem/Action',
  component: QueryItem.Action,
  parameters: {
    docs: {
      description: {
        component:
          'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.',
      },
    },
  },

  args: {},
}
export default meta

type Story = StoryObj<typeof QueryItem.Action>

export const Primary: Story = {
  args: {
    text: 'Primary Action',
    isPrimary: true,
    isDisabled: false,
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary Action',
    isPrimary: false,
    isDisabled: false,
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Action',
    isPrimary: true,
    isDisabled: true,
  },
}

export const OnClick: Story = {
  args: {
    text: 'On Click Action',
    isPrimary: true,
    onClick: () => alert('You clicked the QueryItem.Action!')
  },
}
