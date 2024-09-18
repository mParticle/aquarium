import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.Action> = {
  title: 'Components/Data Entry/QueryItem/Action',
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
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary Action',
    type: 'default',
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Action',
    type: 'disabled',
  },
}

export const OnClick: Story = {
  args: {
    text: 'On Click Action',
    type: 'primary',
    onClick: () => {
      alert('You clicked the QueryItem.Action!')
    },
  },
}
export const Loading: Story = {
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true,
  },
}
