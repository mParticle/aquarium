import { type Meta, type StoryObj } from '@storybook/react'
import { Empty } from 'src/components/data-display/Empty/Empty'
import { Icon } from 'src/components'

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

export const EmptyOnboarding: Story = {
  args: {
    state: 'empty',
    title: 'Nothing here yet',
    description: 'Get started by creating your first item to unlock powerful insights.',
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked'),
    },
    primaryButton: {
      text: 'Add Item',
      icon: <Icon name="add" size="sm" />,
      onClick: () => console.log('Add content clicked'),
    },
  },
}

export const ExampleEmptyOnboarding: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    state: 'empty',
    title: 'There are no audiences yet',
    description: 'Start targeting customers who matter the most and run smarter, more effective campaigns',
    primaryButton: {
      text: 'Add Audience',
      icon: <Icon name="add" size="sm" />,
      onClick: () => console.log('Add Audience clicked'),
    },
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked'),
    },
  },
}

export const ExampleNoResultsEmptyState: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    state: 'empty',
    title: 'No results found',
    description: 'No items match your current filters. Try changing them to view results.',
    defaultButton: {
      text: 'Clear Filters',
      onClick: () => console.log('Clear Filters clicked'),
    },
  },
}

export const ErrorEmptyState: Story = {
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'Explain what went wrong. Keep it short.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked'),
    },
  },
}

export const ExampleErrorApiFailure: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    state: 'error',
    title: 'Audience Preview Failed',
    description: 'Unable to load a preview at this time. Please try again.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked'),
    },
  },
}
