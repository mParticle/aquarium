import { faker } from '@faker-js/faker'
import { type Meta, type StoryObj } from '@storybook/react'
import { Table as TempTable, type TableColumnType } from 'antd'
import { type ObservabilityRecord, createMockObservabilityRecord } from './observability.mock'
import { TextCell, TextDescriptionCell } from './cells'
import { Badge } from '../Badge/Badge'
import { Typography } from 'src/components/general/Typography/Typography'
import { Tag } from '../Tag/Tag'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

const meta: Meta<typeof TempTable> = {
  title: 'Aquarium/Data Display/TempAntTable',
  component: TempTable,
  decorators: [
    Cmp => (
      <ConfigProvider>
        <Cmp />
      </ConfigProvider>
    ),
  ],
  args: {},
}
export default meta

type Story = StoryObj<typeof TempTable<ObservabilityRecord>>

const observabilityRecords = faker.helpers.multiple(createMockObservabilityRecord, { count: 10 })

const columns: Array<TableColumnType<ObservabilityRecord>> = [
  {
    title: 'Request Timestamp',
    key: 'timestamp',
    dataIndex: 'timestamp',
    render: (timestamp: string) => <TextCell text={new Date(timestamp).toISOString()} />,
  },
  {
    title: 'Trace ID',
    dataIndex: 'traceId',
    key: 'traceId',
    render: traceId => (
      <Typography.Link
        onClick={() => {
          alert(`clicked on ${traceId}`)
        }}>
        {traceId}
      </Typography.Link>
    ),
  },
  {
    title: 'Type',
    key: 'type',
    render: (_, dataType) => <TextDescriptionCell title={dataType.eventName} subtitle={dataType.eventType} />,
  },
  {
    title: 'Input',
    key: 'input',
    dataIndex: 'input',
    render: input => <TextCell text={input} />,
  },
  {
    title: 'Output',
    key: 'output',
    dataIndex: 'output',
    render: output => <TextCell text={output} />,
  },
  {
    title: 'mPID',
    dataIndex: 'mPID',
    key: 'output',
    render: mpid => <TextCell text={mpid} />,
  },
  {
    title: 'Environment',
    dataIndex: 'environment',
    key: 'environment',
    render: environment => <Tag color={environment === 'dev' ? 'blue' : 'purple'}>{environment}</Tag>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'badge',
    render: status => <Badge dot text={status.toUpperCase()} status={status} />,
  },
]

export const Primary: Story = {
  args: {
    dataSource: observabilityRecords,
    columns,
  },
}
