import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem> = {
  title: 'Components/Data Entry/QueryItem',
  component: QueryItem,
  tags: ['deprecated'],
  parameters: {
    docs: {
      description: {
        component:
          '⚠️ **Deprecated** — This component group is deprecated and will not receive further updates. Avoid using it in new implementations.',
      },
    },
  },

  args: {},
}
export default meta

type Story = StoryObj<typeof QueryItem>

export const Primary: Story = {}
