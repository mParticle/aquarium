import { faker } from '@faker-js/faker'
import { type Meta, type StoryObj } from '@storybook/react'
import { TempTable, type TableColumnType } from 'src/components/data-display/TempTable/TempTable'
import { type ObservabilityRecord, createMockObservabilityRecord } from './observability.mock'

const meta: Meta<typeof TempTable> = {
  title: 'Aquarium/Data Display/TempTable',
  component: TempTable,

  args: {},
}
export default meta

type Story = StoryObj<typeof TempTable<ObservabilityRecord>>

const observabilityRecords = faker.helpers.multiple(createMockObservabilityRecord, { count: 10 })

const columns: Array<TableColumnType<ObservabilityRecord>> = [
  {
    title: 'Request Timestamp',
    type: 'text',
    dataIndex: 'timestamp',
    key: 'timestamp',
    getProps: (timestamp: string) => ({ text: new Date(timestamp).toISOString() }),
  },
  {
    title: 'Trace ID',
    type: 'link',
    dataIndex: 'traceId',
    key: 'traceId',
    getProps: traceId => ({
      text: traceId,
      onClick: () => {
        alert(`clicked on ${traceId}`)
      },
    }),
  },
  {
    title: 'Type',
    type: 'textDescription',
    key: 'type',
    getProps: (_, dataType) => ({
      title: dataType.eventName,
      subtitle: dataType.eventType,
    }),
  },
  {
    title: 'Input',
    type: 'text',
    dataIndex: 'input',
    key: 'input',
    getProps: input => ({
      text: input,
    }),
  },
  {
    title: 'Output',
    type: 'text',
    dataIndex: 'output',
    key: 'output',
    getProps: output => ({
      text: output,
    }),
  },
  {
    title: 'mPID',
    type: 'text',
    key: 'output',
    dataIndex: 'mPID',
    getProps: mPID => ({
      text: `${mPID}`,
    }),
  },
  {
    title: 'Environment',
    type: 'tag',
    dataIndex: 'environment',
    key: 'environment',
    getProps: environment => ({
      text: environment,
      color: environment === 'dev' ? 'purple' : 'blue',
    }),
  },
  {
    title: 'Status',
    type: 'badge',
    key: 'badge',
    dataIndex: 'status',
    getProps: status => ({
      status,
      text: status.toUpperCase(),
    }),
  },
]

export const Primary: Story = {
  args: {
    dataSource: observabilityRecords,
    columns,
  },
}
