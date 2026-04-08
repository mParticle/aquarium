import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.Text> = {
  title: 'Components/Data Entry/QueryItem/Text',
  component: QueryItem.Text,
  tags: ['deprecated'],
  parameters: {
    docs: {
      description: {
        component:
          '⚠️ **Deprecated** — The QueryItem component group is deprecated and will not receive further updates. Avoid using it in new implementations.',
      },
    },
  },

  args: {},
}
export default meta

type Story = StoryObj<typeof QueryItem.Text>

export const Primary: Story = {
  args: {
    text: 'Default Text',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Text',
    disabled: true,
  },
}
