import type { Meta, StoryObj } from '@storybook/react'
import { Center, Empty, Icon, Table, type ColumnsType } from 'src/components'

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
  title: 'UX Patterns/Data Exploration/Table/Patterns/Empty State',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Use `locale.emptyText` to show an `<Empty>` block when the table has no rows. Provide a primary CTA that gets the user past the empty state, and a default button for context (docs, learn more).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const NoData: Story = {
  name: 'No data yet',
  render: () => (
    <Table<Row>
      columns={columns}
      dataSource={[]}
      pagination={false}
      locale={{
        emptyText: (
          <Center style={{ minHeight: 320 }}>
            <Empty
              title="No data models yet."
              description="Create a data model to sync your data from the warehouse."
              primaryButton={{
                text: 'Add Data Model',
                icon: <Icon name="add" size="sm" />,
                onClick: () => console.log('add clicked'),
              }}
              defaultButton={{
                text: 'Learn More',
                onClick: () => console.log('learn more clicked'),
              }}
            />
          </Center>
        ),
      }}
    />
  ),
}

export const NoResults: Story = {
  name: 'No results from search',
  parameters: {
    docs: {
      description: {
        story:
          'When a search or filter returns no rows, use distinct copy. The user already has data — this state is about helping them adjust their query.',
      },
    },
  },
  render: () => (
    <Table<Row>
      columns={columns}
      dataSource={[]}
      pagination={false}
      locale={{
        emptyText: (
          <Center style={{ minHeight: 320 }}>
            <Empty title="No results found" description="Try adjusting your search or clear the filters." />
          </Center>
        ),
      }}
    />
  ),
}
