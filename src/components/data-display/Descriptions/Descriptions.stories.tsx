import { type Meta, type StoryObj } from '@storybook/react'
import { Descriptions } from 'src/components/data-display/Descriptions/Descriptions'

const meta: Meta<typeof Descriptions> = {
  title: 'Components/Data Display/Descriptions',
  component: Descriptions,

  args: {
    items: [
      { label: 'Item 1', children: 'Value 1' },
      { label: 'Item 2', children: 'Value 2' },
      { label: 'Item 3', children: 'Value 3' },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Descriptions>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}
