/**
 * Real-world example ported from mPServer's `DataModelsTable.tsx`.
 *
 * Demonstrates how the Aquarium Table composes with cell-type patterns,
 * empty/error/loading patterns, and a row-level destructive flow
 * (DeleteConfirmModal). Consumer-specific dependencies (TanStack Query,
 * route state, services) are stripped — state is local and mock data is
 * inline so the example reads as a pattern reference.
 */
import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import {
  Badge,
  Center,
  DeleteConfirmModal,
  Dropdown,
  Empty,
  Flex,
  Icon,
  Input,
  Skeleton,
  Table,
  Tag,
  Typography,
  type ColumnsType,
} from 'src/components'
import { ColorTextDescription, MarginXs, SizeSm } from 'src/styles/style'

type Kind = 'users' | 'events' | 'transactions'

interface DataModel {
  id: string
  name: string
  kind: Kind
  connection: string
  primaryKey: string
  relationships: number
  createdOn: string
  createdBy: string
}

const KIND_LABEL: Record<Kind, string> = {
  users: 'Users',
  events: 'Events',
  transactions: 'Transactions',
}

const dataModels: DataModel[] = [
  {
    id: 'dm-1',
    name: 'CDP Users',
    kind: 'users',
    connection: 'Snowflake — prod',
    primaryKey: 'mp_id',
    relationships: 3,
    createdOn: '2026-04-12',
    createdBy: 'jane.doe@example.com',
  },
  {
    id: 'dm-2',
    name: 'Order Events',
    kind: 'events',
    connection: 'Snowflake — prod',
    primaryKey: 'order_id',
    relationships: 2,
    createdOn: '2026-04-15',
    createdBy: 'john.smith@example.com',
  },
  {
    id: 'dm-3',
    name: 'Subscription Transactions',
    kind: 'transactions',
    connection: 'BigQuery — prod',
    primaryKey: 'txn_id',
    relationships: 0,
    createdOn: '2026-05-02',
    createdBy: 'data-team@example.com',
  },
  {
    id: 'dm-4',
    name: 'Mobile App Users',
    kind: 'users',
    connection: 'BigQuery — staging',
    primaryKey: 'device_id',
    relationships: 1,
    createdOn: '2026-05-04',
    createdBy: 'jane.doe@example.com',
  },
]

type StateMode = 'loaded' | 'loading' | 'empty' | 'error'

interface Args {
  state: StateMode
}

const meta: Meta<Args> = {
  title: 'UX Patterns/Data Exploration/Table/Examples/Data Models Table',
  parameters: {
    docs: {
      description: {
        component:
          'End-to-end example mirroring the production Data Models page. Toggle the **state** control to flip between loaded, loading skeleton, empty, and error states. Each row click navigates to a detail view; the actions menu opens a destructive confirm modal. Use the same shape — toolbar, status states, action menu, confirm modal — for any read-list page in the product.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['loaded', 'loading', 'empty', 'error'],
    },
  },
  args: {
    state: 'loaded',
  },
}

export default meta
type Story = StoryObj<Args>

const SkeletonRow = () => (
  <Flex align="center" style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }} gap={SizeSm}>
    <Skeleton.Input active size="small" style={{ width: '20%', height: 16 }} />
    <Skeleton.Input active size="small" style={{ width: '15%', height: 16 }} />
    <Skeleton.Input active size="small" style={{ width: '20%', height: 16 }} />
    <Skeleton.Input active size="small" style={{ width: '15%', height: 16 }} />
    <Skeleton.Input active size="small" style={{ width: '15%', height: 16 }} />
  </Flex>
)

const DataModelsTableDemo = ({ state }: Args) => {
  const [search, setSearch] = useState('')
  const [toDelete, setToDelete] = useState<DataModel | null>(null)

  const filtered = dataModels.filter(m => !search || m.name.toLowerCase().includes(search.toLowerCase()))

  const columns: ColumnsType<DataModel> = [
    {
      title: 'Model name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record): ReactNode => (
        <Flex vertical>
          <Typography.Link onClick={e => e.stopPropagation()}>{name}</Typography.Link>
          <Typography.Text style={{ color: ColorTextDescription }} size="sm">
            {record.connection}
          </Typography.Text>
        </Flex>
      ),
    },
    {
      title: 'Kind',
      dataIndex: 'kind',
      key: 'kind',
      render: (kind: Kind) => <Tag color="default">{KIND_LABEL[kind]}</Tag>,
    },
    { title: 'Primary key', dataIndex: 'primaryKey', key: 'primaryKey' },
    {
      title: 'Relationships',
      dataIndex: 'relationships',
      key: 'relationships',
      render: (n: number) =>
        n === 0 ? (
          <Typography.Text style={{ color: ColorTextDescription }}>—</Typography.Text>
        ) : (
          <Badge status="processing" text={`${n}`} />
        ),
    },
    { title: 'Created on', dataIndex: 'createdOn', key: 'createdOn' },
    { title: 'Created by', dataIndex: 'createdBy', key: 'createdBy' },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      width: 80,
      render: (_, record): ReactNode => (
        <Dropdown
          placement="bottom"
          menu={{
            items: [
              {
                key: 'create-audience',
                label: 'Create audience',
                disabled: record.kind !== 'users',
              },
              { key: 'delete', label: 'Delete', danger: true },
            ],
            onClick: ({ key, domEvent }) => {
              domEvent.stopPropagation()
              if (key === 'delete') setToDelete(record)
            },
          }}>
          <a aria-label={`Actions for ${record.name}`} onClick={e => e.stopPropagation()}>
            <Icon name="moreActions" size="lg" color="default" />
          </a>
        </Dropdown>
      ),
    },
  ]

  if (state === 'loading') {
    return (
      <div style={{ border: '1px solid #f0f0f0', borderRadius: 8, overflow: 'hidden' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    )
  }

  if (state === 'error') {
    return (
      <Center style={{ minHeight: 360 }}>
        <Empty
          state="error"
          title="Oops! Something went wrong."
          description="We couldn't load data models. Try again, or contact support if the issue continues."
          defaultButton={{ text: 'Retry', onClick: () => console.log('retry') }}
        />
      </Center>
    )
  }

  return (
    <>
      <Flex vertical gap={SizeSm}>
        <Flex align="center" justify="space-between">
          <div />
          <Input
            allowClear
            prefix={<Icon size="sm" color="brand" name="search" />}
            placeholder="Search by name"
            style={{ width: 280 }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Flex>

        <Table<DataModel>
          columns={columns}
          dataSource={state === 'empty' ? [] : filtered}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            style: { cursor: 'pointer' },
            onClick: () => console.log('navigate to detail:', record.id),
          })}
          locale={{
            emptyText:
              state === 'empty' ? (
                <Center style={{ minHeight: 320, marginTop: MarginXs }}>
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
              ) : search ? (
                <Center style={{ minHeight: 240, marginTop: MarginXs }}>
                  <Empty title="No results found" description="Try adjusting your search." />
                </Center>
              ) : null,
          }}
        />
      </Flex>

      <DeleteConfirmModal
        open={!!toDelete}
        title="Delete Data Model"
        onOk={() => {
          console.log('delete confirmed:', toDelete?.id)
          setToDelete(null)
        }}
        onCancel={() => setToDelete(null)}>
        <Typography.Text>
          Are you sure you want to delete the data model{' '}
          <Typography.Text strong>&ldquo;{toDelete?.name}&rdquo;</Typography.Text>? This action cannot be undone.
        </Typography.Text>
      </DeleteConfirmModal>
    </>
  )
}

export const Default: Story = {
  render: args => <DataModelsTableDemo {...args} />,
}

export const EmptyState: Story = {
  name: 'Empty',
  args: { state: 'empty' },
  render: args => <DataModelsTableDemo {...args} />,
}

export const Loading: Story = {
  args: { state: 'loading' },
  render: args => <DataModelsTableDemo {...args} />,
}

export const ErrorState: Story = {
  name: 'Error',
  args: { state: 'error' },
  render: args => <DataModelsTableDemo {...args} />,
}
