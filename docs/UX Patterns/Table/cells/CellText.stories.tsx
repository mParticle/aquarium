import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { Flex, Table, Typography, type ColumnsType } from 'src/components'
import { ColorTextDescription } from 'src/styles/style'

interface Row {
  key: string
  name: string
  type: string
  description: string
}

const data: Row[] = [
  {
    key: '1',
    name: 'Product Launch',
    type: 'Campaign',
    description:
      'A long-running cross-channel campaign promoting the spring product launch across email, push, and in-app surfaces',
  },
  { key: '2', name: 'Black Friday', type: 'Campaign', description: 'Yearly sales event' },
  { key: '3', name: 'Welcome Series', type: 'Journey', description: 'Three-step onboarding journey for new users' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Cell Types/Text',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Text cells render plain string content. Use one line for short identifiers and two lines when context (type, ID) helps scanning. Long values should truncate with a tooltip.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const singleLineColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
]

export const SingleLine: Story = {
  name: 'Single line',
  render: () => <Table<Row> columns={singleLineColumns} dataSource={data} pagination={false} />,
}

const twoLineColumns: ColumnsType<Row> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record): ReactNode => (
      <Flex vertical>
        <Typography.Text>{record.name}</Typography.Text>
        <Typography.Text style={{ color: ColorTextDescription }} size="sm">
          {record.type}
        </Typography.Text>
      </Flex>
    ),
  },
]

export const TwoLine: Story = {
  name: 'Two lines (primary + secondary)',
  render: () => <Table<Row> columns={twoLineColumns} dataSource={data} pagination={false} />,
}

const truncatedColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: 180 },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 240,
    render: (value: string): ReactNode => (
      <Typography.Text ellipsis={{ tooltip: value }} style={{ maxWidth: 220 }}>
        {value}
      </Typography.Text>
    ),
  },
]

export const Truncated: Story = {
  name: 'Truncated with tooltip',
  render: () => <Table<Row> columns={truncatedColumns} dataSource={data} pagination={false} />,
}
