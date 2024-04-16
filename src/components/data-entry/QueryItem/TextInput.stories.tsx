import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.TextInput> = {
  title: 'Aquarium/Data Entry/QueryItem/TextInput',
  component: QueryItem.TextInput,
  parameters: {
    docs: {
      description: {
        component:
          'This is the "Text Input" component of the QueryItem component group.'
      },
    },
  },
  args: {},
}

export default meta;

type Story = StoryObj<typeof QueryItem.TextInput>

export const Primary: Story = {
  args: {
    placeHolder : "Write something",
    onSelected: ((selectedOption) => console.log(selectedOption)),
    value: "Im a Text"
  }
}