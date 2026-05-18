import type { Meta, StoryObj } from '@storybook/react'
import { Table, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  type: string
  owner: string
  environment: string
  status: string
  createdAt: string
  updatedAt: string
  mpId: string
}

const data: Row[] = Array.from({ length: 8 }).map((_, i) => ({
  key: `${i + 1}`,
  name: `Pipeline ${i + 1}`,
  type: i % 2 === 0 ? 'Journey' : 'Campaign',
  owner: `user${i + 1}@example.com`,
  environment: i % 3 === 0 ? 'Production' : 'Development',
  status: i % 2 === 0 ? 'Active' : 'Paused',
  createdAt: `2026-04-${String(i + 1).padStart(2, '0')}`,
  updatedAt: `2026-05-${String(i + 1).padStart(2, '0')}`,
  mpId: `mp-${1000 + i}`,
}))

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name', fixed: 'left', width: 160 },
  { title: 'Type', dataIndex: 'type', key: 'type', width: 140 },
  { title: 'Owner', dataIndex: 'owner', key: 'owner', width: 220 },
  { title: 'Environment', dataIndex: 'environment', key: 'environment', width: 160 },
  { title: 'Status', dataIndex: 'status', key: 'status', width: 140 },
  { title: 'Created', dataIndex: 'createdAt', key: 'createdAt', width: 140 },
  { title: 'Updated', dataIndex: 'updatedAt', key: 'updatedAt', width: 140 },
  { title: 'mPID', dataIndex: 'mpId', key: 'mpId', width: 140 },
  { title: 'Actions', key: 'actions', fixed: 'right', width: 100, render: () => '⋯' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Sticky Columns',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Pin the Name column to the left and the Actions column to the right when the table has more columns than fit on screen. Use `fixed: "left" | "right"` on the column and `scroll={{ x: "max-content" }}` on the Table.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <Table<Row> columns={columns} dataSource={data} scroll={{ x: 'max-content' }} sticky pagination={false} />
    </div>
  ),
}
