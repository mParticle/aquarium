import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Space } from 'src/components'
import { Tag } from 'src/components/data-display/Tag/Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: props => <Tag {...props}>Tag</Tag>,
  parameters: {
    docs: {
      description: {
        component:
          'The Tag component displays small, labeled elements used to categorize, identify, or highlight content.\nTags are versatile for indicating types or other identifiers and can include text, icons, or color coding to enhance readability and organization.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Tag>

export const Primary: Story = {
  args: {
    color: 'default',
    bordered: true,
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning'],
    },
  },
  render: () => {
    return (
      <Space direction="vertical">
        <Tag color="blue">Prod</Tag>
        <Tag color="purple">Dev</Tag>
        <Tag color="default">Default</Tag>
      </Space>
    )
  },
}

export const InfoTags: Story = {
  render: () => {
    return (
      <Space size={[24, 24]} wrap>
        <Tag bordered color="default">
          New
        </Tag>
        <Tag bordered color="default">
          Beta
        </Tag>
      </Space>
    )
  },
}

export const HealthTags: Story = {
  render: () => {
    return (
      <Space size={[24, 24]} wrap>
        <Tag bordered color="success">
          Strong
        </Tag>
        <Tag bordered color="warning">
          Moderate
        </Tag>
        <Tag bordered color="error">
          Weak
        </Tag>
      </Space>
    )
  },
}

export const TagOverviewCards: Story = {
  render: () => {
    const tags = [
      { color: 'default', label: 'Default' },
      { color: 'magenta', label: 'Magenta' },
      { color: 'blue', label: 'Blue' },
      { color: 'cyan', label: 'Cyan' },
      { color: 'geekblue', label: 'Geekblue' },
      { color: 'gold', label: 'Gold' },
      { color: 'green', label: 'Green' },
      { color: 'lime', label: 'Lime' },
      { color: 'orange', label: 'Orange' },
      { color: 'purple', label: 'Purple' },
      { color: 'red', label: 'Red' },
      { color: 'volcano', label: 'Volcano' },
    ] as const

    return (
      <Space size={[16, 16]} wrap>
        {tags.map(tag => (
          <Tag key={tag.label} bordered color={tag.color}>
            {tag.label}
          </Tag>
        ))}
      </Space>
    )
  },
}

export const BorderlessTagExample: Story = {
  render: () => {
    return (
      <Tag color="default" bordered={false}>
        Borderless Tag
      </Tag>
    )
  },
}

export const TagWithIconExample: Story = {
  parameters: {
    docs: {
      source: {
        state: 'hidden',
      },
    },
  },
  render: () => {
    return (
      <Tag bordered color="default" icon={<ClockCircleOutlined />}>
        Tag with icon
      </Tag>
    )
  },
}

export const ClosableTagExample: Story = {
  render: () => {
    return (
      <Tag bordered color="default" closable>
        Closable Tag
      </Tag>
    )
  },
}

export const ClickableTagExample: Story = {
  render: () => {
    return (
      <Space size={[16, 16]}>
        <Tag.CheckableTag bordered checked>
          Checked Tag
        </Tag.CheckableTag>
        <Tag.CheckableTag bordered checked={false}>
          Unchecked Tag
        </Tag.CheckableTag>
      </Space>
    )
  },
}

export const EnvironmentTagsExample: Story = {
  render: () => {
    return (
      <Space size={[16, 16]}>
        <Tag bordered color="blue">
          Prod
        </Tag>
        <Tag bordered color="purple">
          Dev
        </Tag>
      </Space>
    )
  },
}
