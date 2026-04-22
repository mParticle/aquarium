import { type Meta, type StoryObj } from '@storybook/react'
import { Conversations, Prompts, Sender } from '@ant-design/x'
import { useState } from 'react'
import { ConfigProvider, Divider, Flex, Icon, Typography } from 'src/components'
import { ColorBgLayout, MarginLg, MarginMd, MarginXl, SizeSm } from 'src/styles/style'

const meta: Meta = {
  title: 'UX Patterns/Flows/AI Copilot/Empty State',
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
}
export default meta

type Story = StoryObj

const suggestionPrompts = [
  {
    key: 'boost-conversions',
    icon: <Icon name="predictions" color="brand" size="xs" />,
    label: 'Help me boost conversions',
  },
  { key: 'drive-upgrades', icon: <Icon name="predictions" color="brand" size="xs" />, label: 'Help me drive upgrades' },
  {
    key: 'improve-engagement',
    icon: <Icon name="predictions" color="brand" size="xs" />,
    label: 'Help me improve engagement',
  },
  {
    key: 'increase-open-rates',
    icon: <Icon name="predictions" color="brand" size="xs" />,
    label: 'Help me increase open rates',
  },
  { key: 'prevent-churn', icon: <Icon name="predictions" color="brand" size="xs" />, label: 'Help me prevent churn' },
]

const recentChats = [
  { key: 'thread-1', label: '[Apr 14] Churn risk for mobile subscribers', group: 'Resume your previous chats:' },
  {
    key: 'thread-2',
    label: '[Apr 17] Likelihood to upgrade for free-tier users',
    group: 'Resume your previous chats:',
  },
  { key: 'thread-3', label: '[Apr 19] Open-rate lift for weekly newsletter', group: 'Resume your previous chats:' },
]

function EmptyStateShowcase() {
  const [value, setValue] = useState('')

  return (
    <Flex
      vertical
      align="center"
      gap={MarginXl}
      style={{ padding: MarginXl, minHeight: '100vh', backgroundColor: ColorBgLayout }}>
      <Flex vertical align="center" gap={MarginLg} style={{ width: '100%', maxWidth: 640 }}>
        <Icon name="agentCopilot" size="xxl" color="brand" />

        <Flex vertical align="center" gap={SizeSm} style={{ textAlign: 'center' }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Build with AI Copilot
          </Typography.Title>
          <Typography.Text type="secondary">
            Describe the business goal you&apos;re trying to achieve — the Copilot will recommend the right setup for
            your Predictive Attribute and build it for you.
          </Typography.Text>
        </Flex>

        <Sender
          placeholder="How can I help?"
          submitType="enter"
          autoSize={{ minRows: 4, maxRows: 8 }}
          value={value}
          onChange={setValue}
          onSubmit={() => setValue('')}
          style={{ width: '100%', backgroundColor: 'white' }}
        />
      </Flex>

      <Flex vertical align="center" gap={MarginMd} style={{ width: '100%', maxWidth: 960 }}>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <Prompts
            title="Inspirational Sparks"
            wrap={false}
            items={suggestionPrompts}
            styles={{ item: { width: 260 } }}
          />
        </div>

        <Divider style={{ margin: 0 }} />

        <div style={{ width: '100%', maxWidth: 640 }}>
          <Conversations items={recentChats} groupable defaultActiveKey={undefined} style={{ width: '100%' }} />
        </div>
      </Flex>
    </Flex>
  )
}

export const Default: Story = {
  render: () => <EmptyStateShowcase />,
}
