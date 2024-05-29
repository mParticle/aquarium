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
    key: 'timestamp',
    getProps: dataType => ({ text: new Date(dataType.timestamp).toISOString() }),
  },
  {
    title: 'Trace ID',
    type: 'link',
    key: 'traceId',
    getProps: dataType => ({
      text: dataType.traceId,
      onClick: () => {
        alert(`clicked on ${dataType.traceId}`)
      },
    }),
  },
  {
    title: 'Type',
    type: 'textDescription',
    key: 'type',
    getProps: dataType => ({
      title: dataType.eventName,
      subtitle: dataType.eventType,
    }),
  },
  {
    title: 'Input',
    type: 'text',
    key: 'input',
    getProps: dataType => ({
      text: dataType.input,
    }),
  },
  {
    title: 'Output',
    type: 'text',
    key: 'output',
    getProps: dataType => ({
      text: dataType.output,
    }),
  },
  {
    title: 'mPID',
    type: 'text',
    key: 'output',
    getProps: dataType => ({
      text: `${dataType.mPID}`,
    }),
  },
  {
    title: 'Environment',
    type: 'tag',
    key: 'environment',
    getProps: dataType => ({
      text: dataType.environment,
      color: dataType.environment === 'dev' ? 'purple' : 'blue',
    }),
  },
  {
    title: 'Status',
    type: 'badge',
    key: 'badge',
    getProps: dataType => ({
      status: dataType.status,
      text: dataType.status.toUpperCase(),
    }),
  },
]

export const Primary: Story = {
  args: {
    dataSource: observabilityRecords,
    columns,
  },
}
