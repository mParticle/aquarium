import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioCards } from './RadioCard'
import { Center } from 'src/components'

const meta: Meta<typeof RadioCards> = {
  title: 'Components/Data Entry/RadioCard',
  component: RadioCards,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof RadioCards>

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState('secret')

    return (
      <Center>
        <RadioCards
          value={value}
          onChange={setValue}
          orientation="vertical"
          radioAlign="start"
          options={[
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
            {
              value: 'ultimate',
              title: 'Ultimate plan $60/month',
              description: 'Unlimited users, unlimited individual data and access to all features.',
            },
            {
              value: 'secret',
              title: 'Secret plan $80/month',
              description: 'Unlimited users, unlimited individual data and access to all features.',
            },
          ]}
        />
      </Center>
    )
  },
}

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState('warehouse')

    return (
      <Center>
        <RadioCards
          value={value}
          onChange={setValue}
          orientation="horizontal"
          radioAlign="center"
          options={[
            {
              value: 'warehouse',
              title: 'Warehouse Only',
              description: "This audience membership won't be saved to mParticle user profiles.",
            },
            {
              value: 'hybrid',
              title: 'Enable for Hybrid Audiences',
              description:
                'Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data.',
            },
          ]}
        />
      </Center>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('standard')

    return (
      <Center>
        <RadioCards
          value={value}
          onChange={setValue}
          orientation="vertical"
          radioAlign="start"
          options={[
            {
              value: 'standard',
              title: 'Standard Access',
              description: 'Full access to all standard features and integrations.',
            },
            {
              value: 'premium',
              title: 'Premium Access',
              description: 'Enhanced features with priority support and advanced analytics.',
              disabled: true,
              tooltipTitle: 'Premium access requires an upgraded subscription plan.',
            },
          ]}
        />
      </Center>
    )
  },
}
