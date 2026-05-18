import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { Table, Typography, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  type: string
  href: string
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', type: 'Journey', href: '#/journeys/welcome-series' },
  { key: '2', name: 'Black Friday', type: 'Campaign', href: '#/campaigns/black-friday' },
  { key: '3', name: 'Onboarding Quiz', type: 'Form', href: '#/forms/onboarding-quiz' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Cell Types/Link',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Use links for navigation to a record's detail view. When the row itself is also clickable, the link must call `stopPropagation` so a row click is not triggered alongside link navigation.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const linkColumns: ColumnsType<Row> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string, record): ReactNode => (
      <Typography.Link href={record.href} onClick={e => e.stopPropagation()}>
        {name}
      </Typography.Link>
    ),
  },
  { title: 'Type', dataIndex: 'type', key: 'type' },
]

export const Default: Story = {
  render: () => <Table<Row> columns={linkColumns} dataSource={data} pagination={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Welcome Series' })
    await expect(link).toHaveAttribute('href', '#/journeys/welcome-series')
    await userEvent.hover(link)
  },
}

export const ClickableRow: Story = {
  name: 'Clickable row + link cell',
  parameters: {
    docs: {
      description: {
        story:
          'When the row has an onClick handler, the link cell must `stopPropagation` so navigating does not also trigger row selection.',
      },
    },
  },
  render: () => (
    <Table<Row>
      columns={linkColumns}
      dataSource={data}
      pagination={false}
      onRow={record => ({
        onClick: () => {
          console.log('Row clicked:', record.name)
        },
        style: { cursor: 'pointer' },
      })}
    />
  ),
}
