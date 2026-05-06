import type { Meta, StoryObj } from '@storybook/react'
import { Center, Empty, Table, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  type: string
}

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Error State',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'When the fetch fails, replace the table contents with `<Empty state="error">` plus a Retry button. Use the upstream error message when it is human-readable; fall back to a generic message otherwise. Avoid showing partial/stale rows mixed with an error banner.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table<Row>
      columns={columns}
      dataSource={[]}
      pagination={false}
      locale={{
        emptyText: (
          <Center style={{ minHeight: 320 }}>
            <Empty
              state="error"
              title="Oops! Something went wrong."
              description="We couldn't load data models. Try again, or contact support if the issue continues."
              defaultButton={{
                text: 'Retry',
                onClick: () => console.log('retry clicked'),
              }}
            />
          </Center>
        ),
      }}
    />
  ),
}
