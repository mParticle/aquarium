import type { Meta, StoryObj } from '@storybook/react'
import { Table, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  type: string
  owner: string
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', type: 'Journey', owner: 'jane.doe@example.com' },
  { key: '2', name: 'Black Friday', type: 'Campaign', owner: 'john.smith@example.com' },
  { key: '3', name: 'Onboarding Quiz', type: 'Form', owner: 'jane.doe@example.com' },
  { key: '4', name: 'Cortex Pipeline', type: 'Pipeline', owner: 'data-team@example.com' },
]

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Owner', dataIndex: 'owner', key: 'owner' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Tables present and organize data in a structured, readable format. See **Cell Types** for the column rendering vocabulary, and **Patterns** for empty/error/loading states, filters, and pagination.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => <Table<Row> columns={columns} dataSource={data} pagination={false} />,
}
