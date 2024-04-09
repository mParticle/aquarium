import { QueryItemQualifier } from './QueryItem.Qualifier'
import { type Meta, type StoryObj } from '@storybook/react'

type Story = StoryObj<typeof QueryItemQualifier>

// default
const meta: Meta<typeof QueryItemQualifier> = {
  title: 'Aquarium/Data Entry/QueryItem.Qualifier',
  component: QueryItemQualifier,
  args: {},
}
export default meta

// stories
export const Empty: Story = {}

export const Simple: Story = {
  args: {
    options: [
      { value: '0', label: 'is equal to' },
      { value: '1', label: 'is not equal to' },
      { value: '2', label: 'is greater than to' },
      { value: '3', label: 'is greater or equal to' },
      { value: '4', label: 'is less than' },
      { value: '5', label: 'is less or equal to' },
    ],
  },
}
