import { type Meta, type StoryObj } from '@storybook/react'
import { RadioCards } from './RadioCard'

const meta: Meta<typeof RadioCards> = {
  title: 'Components/Data Entry/RadioCard',
  component: RadioCards,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof RadioCards>

export const Playground: Story = {
  tags: ['!dev'],
  args: {
    value: 'basic',
    orientation: 'vertical',
    radioAlign: 'start',
    options: [
      {
        value: 'basic',
        title: 'Basic plan $10/month',
        description: 'Includes up to 10 users, 20 GB individual data and access to all features.',
      },
      {
        value: 'business',
        title: 'Business plan $20/month',
        description: 'Includes up to 20 users, 40 GB individual data and access to all features.',
      },
      {
        value: 'enterprise',
        title: 'Enterprise plan $40/month',
        description: 'Unlimited users, unlimited individual data and access to all features.',
      },
    ],
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    radioAlign: {
      control: 'select',
      options: ['start', 'center'],
    },
  },
}

export const VerticalStates: Story = {
  name: 'Vertical states',
  tags: ['!dev'],
  args: {
    value: 'selected',
    orientation: 'vertical',
    radioAlign: 'start',
    options: [
      {
        value: 'default',
        title: 'Basic plan $10/month',
        description: 'Includes up to 10 users, 20 GB individual data and access to all features.',
      },
      {
        value: 'selected',
        title: 'Business plan $20/month',
        description: 'Includes up to 20 users, 40 GB individual data and access to all features.',
      },
      {
        value: 'disabled',
        title: 'Enterprise plan $40/month',
        description: 'Unlimited users, unlimited individual data and access to all features.',
        disabled: true,
        tooltipTitle: 'This plan is not available for your account.',
      },
    ],
  },
}

export const HorizontalStates: Story = {
  name: 'Horizontal states',
  tags: ['!dev'],
  args: {
    value: '',
    orientation: 'horizontal',
    radioAlign: 'center',
    options: [
      {
        value: 'default',
        title: 'Warehouse Only',
        description: "This audience membership won't be saved to mParticle user profiles.",
      },
      {
        value: 'disabled',
        title: 'Legacy Mode',
        description: 'Connects using the previous integration for backward compatibility.',
        disabled: true,
        tooltipTitle: 'Legacy mode is no longer supported for new audiences.',
      },
    ],
  },
}
