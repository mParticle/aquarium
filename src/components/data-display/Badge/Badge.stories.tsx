import { type Meta, type StoryObj } from '@storybook/react'
import { Badge } from 'src/components/data-display/Badge/Badge'
import { Space } from 'src/components'
import { ColorPrimary, ColorSuccess, ColorWarning, ColorError, ColorBorderSecondary } from 'src/styles/style'

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
}
export default meta

type Story = StoryObj<typeof Badge>

export const DotBadge: Story = {
  render: () => {
    const colors = [
      { label: 'Primary', value: ColorPrimary },
      { label: 'Success', value: ColorSuccess },
      { label: 'Warning', value: ColorWarning },
      { label: 'Error', value: ColorError },
      { label: 'Paused', value: ColorBorderSecondary },
    ] as const

    return (
      <Space wrap size="large">
        {colors.map(({ label, value }) => (
          <Badge dot key={label} color={value} title={label} />
        ))}
      </Space>
    )
  },
}

export const StatusBadge: Story = {
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning'],
    },
  },
  render: () => {
    return (
      <Space direction="horizontal" wrap size="large">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Paused" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>
    )
  },
}

export const WithText: Story = {
  args: {
    dot: true,
    status: 'success',
    text: 'Active',
  },
}

export const FilledPill: Story = {
  render: () => {
    return (
      <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" />
        <Badge status="error" text="Error" variant="filled" />
        <Badge status="default" text="Paused" variant="filled" />
        <Badge status="processing" text="Processing" variant="filled" />
        <Badge status="warning" text="Warning" variant="filled" />
      </Space>
    )
  },
}

export const FilledSquare: Story = {
  render: () => {
    return (
      <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" shape="square" />
        <Badge status="error" text="Error" variant="filled" shape="square" />
        <Badge status="default" text="Paused" variant="filled" shape="square" />
        <Badge status="processing" text="Processing" variant="filled" shape="square" />
        <Badge status="warning" text="Warning" variant="filled" shape="square" />
      </Space>
    )
  },
}

export const FilledSizes: Story = {
  render: () => {
    const statuses: Array<{ label: string; status: 'success' | 'error' | 'warning' | 'processing' | 'default' }> = [
      { label: 'Success', status: 'success' },
      { label: 'Error', status: 'error' },
      { label: 'Warning', status: 'warning' },
      { label: 'Processing', status: 'processing' },
      { label: 'Paused', status: 'default' },
    ]

    return (
      <Space direction="vertical" size="large">
        {statuses.map(({ status }) => (
          <Space key={status} wrap size="middle" align="start">
            <Badge status={status} text="Small" variant="filled" size="sm" />
            <Badge status={status} text="Medium" variant="filled" size="md" />
            <Badge status={status} text="Large" variant="filled" size="lg" />
          </Space>
        ))}
      </Space>
    )
  },
}
