import { type Meta, type StoryObj } from '@storybook/react'
import { Sender, Suggestion } from '@ant-design/x'
import { useState } from 'react'
import { ConfigProvider } from 'src/components'

const meta: Meta<typeof Suggestion> = {
  title: 'Components/AI/Suggestion',
  component: Suggestion,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Suggestion>

export const Basic: Story = {
  render: args => {
    const [value, setValue] = useState('')
    return (
      <Suggestion {...args}>
        {({ onTrigger, onKeyDown }) => (
          <Sender
            value={value}
            onChange={nextValue => {
              setValue(nextValue)
              onTrigger(nextValue.startsWith('/') ? nextValue : false)
            }}
            onKeyDown={onKeyDown}
            placeholder='Type "/" to trigger suggestions'
          />
        )}
      </Suggestion>
    )
  },
  args: {
    items: [
      { label: 'Tell me about Aquarium', value: 'tell-aquarium' },
      { label: 'How to add a component?', value: 'add-component' },
      { label: 'Show design tokens', value: 'show-tokens' },
    ],
  },
}
