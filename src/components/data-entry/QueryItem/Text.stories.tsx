import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.Text> = {
  title: 'Aquarium/Data Entry/QueryItem/Text',
  component: QueryItem.Text,
  parameters: {
    docs: {
      description: {
        component:
          'This is the "Text" component of the QueryItem component group.'
      },
    },
  },
  args: {},
}

export default meta;

type Story = StoryObj<typeof QueryItem.Text>

export const Primary: Story = {
  args: {
    _options: [
      { value: 'Im a Text', type: 'A' },
      { value: 'Select me', type: 'B' },
      { value: 'On The list', type: 'C' },
    ],
    placeHolder : "Write something",
    onSelected: ((selectedOption) => console.log(selectedOption)),
    value: "Im a Text"
  }
}