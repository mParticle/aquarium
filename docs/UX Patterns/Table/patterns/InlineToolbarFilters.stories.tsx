import type { Meta, StoryObj } from '@storybook/react'
import { useMemo, useState } from 'react'
import {
  Flex,
  Icon,
  Input,
  Segmented,
  Select,
  Table,
  Tag,
  type ColumnsType,
  type ISegmentedProps,
  type ITagProps,
} from 'src/components'
import { MarginXs, SizeSm, SizeXxs } from 'src/styles/style'

type Status = 'all' | 'active' | 'paused' | 'archived'
type Environment = 'production' | 'staging' | 'development'

interface Row {
  key: string
  name: string
  status: Exclude<Status, 'all'>
  environment: Environment
}

const ENV_MAP: Record<Environment, { color: ITagProps['color']; label: string }> = {
  production: { color: 'blue', label: 'Prod' },
  staging: { color: 'gold', label: 'Staging' },
  development: { color: 'purple', label: 'Dev' },
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', status: 'active', environment: 'production' },
  { key: '2', name: 'Black Friday', status: 'paused', environment: 'staging' },
  { key: '3', name: 'Onboarding Quiz', status: 'active', environment: 'development' },
  { key: '4', name: 'Cortex Pipeline', status: 'archived', environment: 'production' },
  { key: '5', name: 'Cart Abandonment', status: 'active', environment: 'production' },
]

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s: Row['status']) => s.charAt(0).toUpperCase() + s.slice(1),
  },
  {
    title: 'Environment',
    dataIndex: 'environment',
    key: 'environment',
    render: (env: Environment) => {
      const { color, label } = ENV_MAP[env]
      return <Tag color={color}>{label}</Tag>
    },
  },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Inline Toolbar Filters',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Recommended default. Surface high-value filters inline in a toolbar above the table: search on the right, 1–3 frequent filters on the left. Active filter state stays visible at all times. Reach for the Modal Filters pattern only when there are too many filter dimensions to fit in the toolbar.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState<Status>('all')
    const [environments, setEnvironments] = useState<Environment[]>([])

    const filtered = useMemo(
      () =>
        data.filter(row => {
          if (search && !row.name.toLowerCase().includes(search.toLowerCase())) return false
          if (status !== 'all' && row.status !== status) return false
          if (environments.length > 0 && !environments.includes(row.environment)) return false
          return true
        }),
      [search, status, environments],
    )

    return (
      <Flex vertical gap={SizeSm}>
        <Flex align="center" justify="space-between" gap={SizeSm} wrap>
          <Flex align="center" gap={SizeSm} wrap>
            <Segmented
              value={status}
              onChange={setStatus as ISegmentedProps['onChange']}
              options={[
                { label: 'All', value: 'all' },
                { label: 'Active', value: 'active' },
                { label: 'Paused', value: 'paused' },
                { label: 'Archived', value: 'archived' },
              ]}
            />
            <Select<Environment[]>
              mode="multiple"
              allowClear
              placeholder="Environment"
              style={{ minWidth: 220 }}
              value={environments}
              onChange={setEnvironments}
              options={[
                { label: 'Production', value: 'production' },
                { label: 'Staging', value: 'staging' },
                { label: 'Development', value: 'development' },
              ]}
            />
          </Flex>
          <Input
            allowClear
            prefix={<Icon size="sm" color="brand" name="search" />}
            placeholder="Search by name"
            style={{ width: 240 }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Flex>

        {(status !== 'all' || environments.length > 0 || search) && (
          <Flex gap={SizeXxs} wrap style={{ marginTop: MarginXs }}>
            {status !== 'all' && (
              <Tag closable onClose={() => setStatus('all')} color="default">
                Status: {status}
              </Tag>
            )}
            {environments.map(env => (
              <Tag
                key={env}
                closable
                onClose={() => setEnvironments(environments.filter(e => e !== env))}
                color="default">
                Env: {ENV_MAP[env].label}
              </Tag>
            ))}
            {search && (
              <Tag closable onClose={() => setSearch('')} color="default">
                Search: &ldquo;{search}&rdquo;
              </Tag>
            )}
          </Flex>
        )}

        <Table<Row> columns={columns} dataSource={filtered} pagination={false} rowKey="key" />
      </Flex>
    )
  },
}
