import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.ValueSelector.NumberInput> = {
  title: 'Aquarium/Data Entry/QueryItem/ValueSelector/NumberInput',
  component: QueryItem.ValueSelector.NumberInput,
  parameters: {
    docs: {
      description: {
        component: 'This is the "Number Input" component of the QueryItem/ValueSelector component group.',
      },
    },
  },
  args: {
    onChange: (value: number) => {
      console.log(value)
    },
  },
}

export default meta

type Story = StoryObj<typeof QueryItem.ValueSelector.NumberInput>

export const Primary: Story = {}

export const Default: Story = {
  args: {
    value: 2,
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Enter a Number',
  },
}

export const ErrorMessage: Story = {
  args: {
    errorMessage: 'Required field!',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
}

export const Min: Story = {
  args: {
    min: 0,
  },
}

export const Max: Story = {
  args: {
    max: 100,
  },
}