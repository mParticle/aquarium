import { QueryItem } from './QueryItem'
import { type Meta, type StoryObj } from '@storybook/react'

type Story = StoryObj<typeof QueryItem.Qualifier>

// default
const meta: Meta<typeof QueryItem.Qualifier> = {
  title: 'Aquarium/Data Entry/QueryItem/Qualifier',
  component: QueryItem.Qualifier,
  args: {},
}
export default meta

const defaultOptions = [
  { value: '0', label: 'is equal to' },
  { value: '1', label: 'is not equal to' },
  { value: '2', label: 'is greater than' },
  { value: '3', label: 'is greater or equal to' },
  { value: '4', label: 'is less than' },
  { value: '5', label: 'is less or equal to' },
]

// stories
export const Empty: Story = {}

export const Simple: Story = {
  args: {
    options: defaultOptions
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'This is an error message for the Qualifier component',
    options: defaultOptions,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: defaultOptions,
  },
}
