import { type Meta, type StoryObj } from '@storybook/react'
import { Suggestion } from 'src/components/ai/Suggestion'

const meta: Meta<typeof Suggestion> = {
  title: 'Components/AI/Suggestion',
  component: Suggestion,
}
export default meta

type Story = StoryObj<typeof Suggestion>

export const Basic: Story = {
  args: {
    items: [
      { label: 'Tell me about Aquarium', value: 'tell-aquarium' },
      { label: 'How to add a component?', value: 'add-component' },
      { label: 'Show design tokens', value: 'show-tokens' },
    ],
  },
}
