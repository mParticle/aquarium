import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { Badge, Flex, Table, Typography, type ColumnsType, type IBadgeProps } from 'src/components'
import { ColorTextDescription, FontSizeSm } from 'src/styles/style'

type PipelineStatus = 'running' | 'paused' | 'failed' | 'draft'

interface Row {
  key: string
  name: string
  status: PipelineStatus
  lastRun: string
}

const data: Row[] = [
  { key: '1', name: 'Cortex pipeline', status: 'running', lastRun: 'Last run 2 min ago' },
  { key: '2', name: 'Audience sync', status: 'paused', lastRun: 'Paused yesterday' },
  { key: '3', name: 'Data export', status: 'failed', lastRun: 'Failed 5 min ago' },
  { key: '4', name: 'New journey', status: 'draft', lastRun: 'Never run' },
]

const STATUS_MAP: Record<PipelineStatus, { status: IBadgeProps['status']; label: string }> = {
  running: { status: 'success', label: 'Running' },
  paused: { status: 'warning', label: 'Paused' },
  failed: { status: 'error', label: 'Failed' },
  draft: { status: 'default', label: 'Draft' },
}

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Cell Types/Status',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Use `Badge` for system status (running, failed, draft). Reserve `Tag` for labels and environments. Status cells are left-aligned and may include a secondary line for context like timestamps.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const statusColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: PipelineStatus): ReactNode => {
      const { status, label } = STATUS_MAP[value]
      return <Badge status={status} text={label} />
    },
  },
]

export const Default: Story = {
  render: () => <Table<Row> columns={statusColumns} dataSource={data} pagination={false} />,
}

const statusWithSecondaryColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Status',
    key: 'status',
    render: (_, record): ReactNode => {
      const { status, label } = STATUS_MAP[record.status]
      return (
        <Flex vertical>
          <Badge status={status} text={label} />
          <Typography.Text
            type="secondary"
            style={{ fontSize: FontSizeSm, paddingLeft: 14, color: ColorTextDescription }}>
            {record.lastRun}
          </Typography.Text>
        </Flex>
      )
    },
  },
]

export const WithSecondaryLine: Story = {
  name: 'With secondary line',
  parameters: {
    docs: {
      description: {
        story: 'Pair the badge with a secondary line for run timing, error reason, or other contextual detail.',
      },
    },
  },
  render: () => <Table<Row> columns={statusWithSecondaryColumns} dataSource={data} pagination={false} />,
}
