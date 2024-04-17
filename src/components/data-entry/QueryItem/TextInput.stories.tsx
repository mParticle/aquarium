import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.TextInput> = {
  title: 'Aquarium/Data Entry/QueryItem/_TextInput',
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
    onChange: ((value : string | number) => console.log(value)),
    defaultValue: "Im a Text"
  }
}