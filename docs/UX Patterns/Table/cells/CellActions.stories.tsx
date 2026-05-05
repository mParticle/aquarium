import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { Dropdown, Icon, Table, Tooltip, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  status: 'active' | 'archived'
  isReadOnly: boolean
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', status: 'active', isReadOnly: false },
  { key: '2', name: 'Legacy Pipeline', status: 'archived', isReadOnly: true },
  { key: '3', name: 'Black Friday', status: 'active', isReadOnly: false },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Cell Types/Actions',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'A More Actions cell consolidates row-level operations into a single dropdown. Destructive actions render in red. Hide actions that are not applicable to a row; disable (with a tooltip) actions that exist but are not currently allowed.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const buildMenu = (record: Row) => {
  const items = [
    { key: 'edit', label: 'Edit', disabled: record.isReadOnly },
    { key: 'duplicate', label: 'Duplicate' },
    record.status === 'active' && { key: 'archive', label: 'Archive' },
    {
      key: 'delete',
      label: record.isReadOnly ? (
        <Tooltip title="Read-only records can't be deleted" placement="left">
          <span>Delete</span>
        </Tooltip>
      ) : (
        'Delete'
      ),
      danger: true,
      disabled: record.isReadOnly,
    },
  ].filter(Boolean) as { key: string; label: ReactNode; danger?: boolean; disabled?: boolean }[]

  return {
    items,
    onClick: ({ key, domEvent }: { key: string; domEvent: React.SyntheticEvent }) => {
      domEvent.stopPropagation()
      console.log('Action:', key, 'on', record.name)
    },
  }
}

const actionsColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  {
    title: 'Actions',
    key: 'actions',
    align: 'center',
    width: 90,
    render: (_, record): ReactNode => (
      <Dropdown menu={buildMenu(record)} placement="bottom">
        <a aria-label={`Actions for ${record.name}`} onClick={e => e.stopPropagation()}>
          <Icon name="moreActions" size="lg" color="default" />
        </a>
      </Dropdown>
    ),
  },
]

export const Default: Story = {
  render: () => <Table<Row> columns={actionsColumns} dataSource={data} pagination={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByLabelText('Actions for Welcome Series')
    await userEvent.click(trigger)

    const menu = await within(document.body).findByRole('menu')
    await expect(within(menu).getByText('Edit')).toBeInTheDocument()
    await expect(within(menu).getByText('Duplicate')).toBeInTheDocument()
    await expect(within(menu).getByText('Archive')).toBeInTheDocument()
    await expect(within(menu).getByText('Delete')).toBeInTheDocument()
  },
}

export const DisabledWithTooltip: Story = {
  name: 'Disabled item with tooltip',
  parameters: {
    docs: {
      description: {
        story:
          'When an action is unavailable for a row, disable the menu item and wrap its label in a `Tooltip` explaining why. Hover the actions button on the "Legacy Pipeline" row.',
      },
    },
  },
  render: () => <Table<Row> columns={actionsColumns} dataSource={data} pagination={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByLabelText('Actions for Legacy Pipeline')
    await userEvent.click(trigger)

    const menu = await within(document.body).findByRole('menu')
    const deleteItem = within(menu).getByText('Delete')
    await expect(deleteItem.closest('[role="menuitem"]')).toHaveClass(/disabled/)
  },
}
