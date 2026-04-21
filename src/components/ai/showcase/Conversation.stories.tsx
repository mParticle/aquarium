import { type Meta, type StoryObj } from '@storybook/react'
import { Bubble, Sender } from '@ant-design/x'
import { type ReactNode, useState } from 'react'
import { Button, Card, ConfigProvider, Flex, Icon, Typography } from 'src/components'
import { ColorFillSecondary, Margin, MarginLg, MarginMd, MarginXl, PaddingXs, SizeSm } from 'src/styles/style'

const meta: Meta = {
  title: 'Components/AI/Showcase/Conversation',
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

type Role = 'user' | 'copilot'
interface IMessage {
  role: Role
  content: ReactNode
  isFinalConfirmation?: boolean
}

const messages: IMessage[] = [
  {
    role: 'user',
    content: 'Help me boost conversions on my e-commerce app for premium-tier customers in the US.',
  },
  {
    role: 'copilot',
    content:
      "Great — boosting conversions sounds like a fit for a Future Behavior Prediction. I'll set up a model that scores users by their likelihood to purchase in the next few days. Does that match what you're trying to achieve?",
  },
  { role: 'user', content: "Yes, that's exactly what I want." },
  {
    role: 'copilot',
    content:
      "Perfect. I'll use the `purchase` commerce event as the target behavior and score users on their likelihood to convert within the next 7 days. I'll focus on premium-tier customers located in the United States. Ready to review?",
  },
  { role: 'user', content: "Looks good, let's review." },
  {
    role: 'copilot',
    isFinalConfirmation: true,
    content:
      "Here's the final setup for your predictive attribute:\n\n• Type: Future Behavior Prediction\n• Target event: Purchase\n• Timeframe: Next 7 days\n• Audience: Premium-tier users in the United States\n\nProceed to save, or make changes if you'd like to adjust anything.",
  },
]

const role = {
  copilot: {
    placement: 'start',
    variant: 'filled',
    header: 'Copilot',
    styles: {
      content: {
        backgroundColor: ColorFillSecondary,
        marginBottom: Margin,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      },
    },
  },
  user: {
    placement: 'end',
    variant: 'outlined',
    styles: { content: { backgroundColor: 'white', marginBottom: Margin } },
  },
} as const

function FinalConfirmationContent({ content }: { content: ReactNode }) {
  return (
    <div>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{content}</div>
      <Flex gap={SizeSm} justify="center" style={{ marginTop: MarginLg }}>
        <Button type="primary" icon={<Icon name="check" size="sm" />}>
          Proceed to Save
        </Button>
        <Button icon={<Icon name="edit" size="sm" />}>Make Changes</Button>
      </Flex>
    </div>
  )
}

function PreviewField({ value, placeholder }: { value?: string; placeholder?: string }) {
  const hasValue = !!value
  return (
    <Typography.Text code style={{ opacity: hasValue ? 1 : 0.6 }}>
      {hasValue ? value : placeholder}
    </Typography.Text>
  )
}

function PreviewSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {title}
      </Typography.Title>
      <Card size="small">{children}</Card>
    </>
  )
}

function PreviewPanel() {
  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
      <Flex vertical gap={SizeSm} style={{ padding: PaddingXs }}>
        <PreviewSection title="Predictive Attribute">
          <Typography.Text>
            Type: <PreviewField value="Future Behavior Prediction" />
          </Typography.Text>
        </PreviewSection>

        <PreviewSection title="Prediction Definition">
          <Typography.Text>
            Predict the likelihood to perform <PreviewField value="Purchase" /> where{' '}
            <PreviewField value="plan tier equals premium" /> within the next <PreviewField value="7" /> days
          </Typography.Text>
        </PreviewSection>

        <PreviewSection title="Users Definition">
          <Typography.Text>
            For users with <PreviewField value="country equals United States" />
          </Typography.Text>
        </PreviewSection>
      </Flex>
    </Card>
  )
}

function ConversationShowcase() {
  const [value, setValue] = useState('')

  return (
    <Flex gap={MarginLg} style={{ padding: MarginXl, height: '100vh', boxSizing: 'border-box' }}>
      <Flex vertical gap={MarginMd} style={{ width: 720, flexShrink: 0, minWidth: 0, height: '100%' }}>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
          <Bubble.List
            items={messages.map((msg, index) => ({
              key: index,
              role: msg.role,
              shape: 'corner',
              content: msg.isFinalConfirmation ? <FinalConfirmationContent content={msg.content} /> : msg.content,
            }))}
            role={role}
          />
        </div>

        <Sender
          placeholder="How can I help?"
          submitType="enter"
          autoSize={{ minRows: 1, maxRows: 4 }}
          value={value}
          onChange={setValue}
          onSubmit={() => setValue('')}
          style={{ backgroundColor: 'white', flexShrink: 0 }}
        />
      </Flex>

      <div style={{ flex: 1, minWidth: 320, height: '100%' }}>
        <PreviewPanel />
      </div>
    </Flex>
  )
}

export const Default: Story = {
  render: () => <ConversationShowcase />,
}
