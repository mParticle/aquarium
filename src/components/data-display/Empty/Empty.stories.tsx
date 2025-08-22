import { type Meta, type StoryObj } from '@storybook/react'
import { Empty } from 'src/components/data-display/Empty/Empty'

const meta: Meta<typeof Empty> = {
  title: 'Components/Data Display/Empty',
  component: Empty,
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['empty', 'error'],
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    button: {
      control: { type: 'object' },
    },
  },
  args: {
    description: 'No Data',
    state: 'empty',
  },
}
export default meta

type Story = StoryObj<typeof Empty>

export const EmptyState: Story = {
  args: {
    state: 'empty',
    title: 'No results found',
    description: "Try adjusting your search or filter to find what you're looking for.",
    defaultButton: {
      text: 'Clear filters',
      onClick: () => console.log('Clear filters clicked'),
    },
  },
}

export const ErrorState: Story = {
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'We encountered an error while loading your data.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked'),
    },
  },
}

export const TwoButtons: Story = {
  args: {
    state: 'empty',
    title: 'Action required',
    description: 'Choose how you would like to proceed.',
    defaultButton: {
      text: 'Cancel',
      onClick: () => console.log('Cancel clicked'),
    },
    primaryButton: {
      text: 'Continue',
      onClick: () => console.log('Continue clicked'),
    },
  },
}
