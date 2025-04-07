import type { ReactNode } from 'react'
import { faker } from '@faker-js/faker'
import { CopyOutlined } from '@ant-design/icons'
import { type TableProps, Typography, Flex, Tooltip, Tag, Badge, Select } from 'src/components'
import { type ITagProps, type IBadgeProps, Icon } from 'src/components'
import { ColorTextPlaceholder, ColorError, ColorSuccess } from 'src/styles/style'

export interface TableDataType {
  key: string
  name: string
  id: string
  timestamp: number
  output: string
  environment: Environment
  status: Status
  mpId: string
}

type Environment = 'development' | 'production'
type Status = 'draft' | 'error' | 'ready'

const EnvironmentColors: Record<Environment, ITagProps['color']> = {
  production: 'blue',
  development: 'purple',
}

const EnvironmentNames: Record<Environment, string> = {
  production: 'Prod',
  development: 'Dev',
}

const getTagColorForEnvironment = (env: Environment): ITagProps['color'] => EnvironmentColors[env]

const getNameForEnvironment = (env: Environment) => EnvironmentNames[env]

const StatusColors: Record<Status, IBadgeProps['color']> = {
  draft: ColorTextPlaceholder,
  error: ColorError,
  ready: ColorSuccess,
}

const StatusNames: Record<Status, string> = {
  draft: 'Draft',
  error: 'Error',
  ready: 'Ready',
}

const getStatusColor = (status: Status) => StatusColors[status]

const getStatusName = (status: Status) => StatusNames[status]

export const tableColumns: TableProps<TableDataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string): ReactNode => {
      const path = window.location.pathname.split('/')
      path.pop()
      const route = `${path.join('/')}/${name}`

      return <Typography.Link href={route}>{name}</Typography.Link>
    },
  },
  {
    title: () => (
      <Flex align="center" gap={2}>
        <Typography.Text>ID</Typography.Text>
        <Tooltip
          title={
            <>
              <Typography.Text style={{ color: 'white' }}>Help lorem ipsum. </Typography.Text>
              <Typography.Link href="/" style={{ color: 'white', textDecoration: 'underline' }}>
                Learn More
              </Typography.Link>
            </>
          }>
          <Icon name="help" size="sm" />
        </Tooltip>
      </Flex>
    ),
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Timestamp (UTC)',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (timestampInMicroseconds: number): string => {
      return new Date(timestampInMicroseconds / (1000 * 1000)).toLocaleString(undefined, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        hour12: false,
      })
    },
  },
  {
    title: 'mPID',
    dataIndex: 'mpId',
    key: 'mpId',
    render: (mpId: string): ReactNode => {
      return <Typography.Text copyable={{ icon: <CopyOutlined aria-label="Copy mPID" /> }}>{mpId}</Typography.Text>
    },
  },
  {
    title: 'Output',
    dataIndex: 'output',
    key: 'output',
  },
  {
    title: 'Environment',
    key: 'environment',
    dataIndex: 'environment',
    render: (env: Environment): React.ReactNode => {
      return <Tag color={getTagColorForEnvironment(env)}>{getNameForEnvironment(env)}</Tag>
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: Status): React.ReactNode => <Badge color={getStatusColor(status)} text={getStatusName(status)} />,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (): ReactNode => (
      <Select
        suffixIcon={<Icon name="moreActions" />}
        variant="borderless"
        dropdownStyle={{ width: '200px' }}
        value={null}
        options={[
          { label: 'Option 1', value: 'option1' },
          {
            label: (
              <Tooltip title="Explaining of why this is disabled" placement="right">
                <span>Option 2</span>
              </Tooltip>
            ),
            value: 'option2',
            disabled: true,
          },
          {
            label: <span style={{ color: ColorError }}>Delete</span>,
            value: 'option2',
          },
        ]}
      />
    ),
  },
]

function createMockRow(): TableDataType {
  return {
    id: `ID-${faker.number.int({ min: 1000, max: 9999 }).toString()}`,
    key: faker.string.uuid(),
    name: faker.company.name(),
    timestamp: faker.date.recent().valueOf() * 1000 * 1000,
    mpId: faker.number.int({ max: 9_999_999_999 }).toString(),
    output: faker.helpers.arrayElement(['Braze', 'mP Analytics', 'Cortex', 'Applytics', 'Google Analytics']),
    environment: faker.helpers.arrayElement(['development', 'production']),
    status: faker.helpers.arrayElement(['draft', 'error', 'ready']),
  }
}

export interface TableDataTypeFilters {
  sortAscending?: boolean
  id?: string
  name?: string
  mpId?: string
  output?: Array<'Braze' | 'mP Analytics' | 'Cortex' | 'Applytics' | 'Google Analytics'>
  environments?: Environment[]
  statuses?: Status[]
}

export const DEFAULT_FILTERS: TableDataTypeFilters = {
  sortAscending: false,
  name: undefined,
  mpId: undefined,
  output: undefined,
  environments: ['development', 'production'],
  statuses: ['draft', 'error', 'ready'],
} as const

export const tableData: TableDataType[] = faker.helpers.multiple(createMockRow, {
  count: 45,
})
