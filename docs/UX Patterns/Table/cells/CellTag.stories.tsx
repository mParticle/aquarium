import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { Flex, Table, Tag, type ColumnsType, type ITagProps } from 'src/components'
import { SizeXxs } from 'src/styles/style'

type Environment = 'production' | 'development' | 'staging'

interface Row {
  key: string
  name: string
  environment: Environment
  outputs: string[]
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', environment: 'production', outputs: ['Braze', 'Cortex'] },
  { key: '2', name: 'Black Friday', environment: 'staging', outputs: ['Braze'] },
  { key: '3', name: 'Onboarding Quiz', environment: 'development', outputs: ['mP Analytics', 'Google Analytics'] },
]

const ENV_MAP: Record<Environment, { color: ITagProps['color']; label: string }> = {
  production: { color: 'blue', label: 'Prod' },
  staging: { color: 'gold', label: 'Staging' },
  development: { color: 'purple', label: 'Dev' },
}

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Cell Types/Tag',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Use `Tag` for categorical labels (environment, type, output destination). Map the enum value to a stable color and label so the same value always renders the same way across screens.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const enumTagColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Environment',
    dataIndex: 'environment',
    key: 'environment',
    render: (value: Environment): ReactNode => {
      const { color, label } = ENV_MAP[value]
      return <Tag color={color}>{label}</Tag>
    },
  },
]

export const EnumTag: Story = {
  name: 'Single tag from enum',
  render: () => <Table<Row> columns={enumTagColumns} dataSource={data} pagination={false} />,
}

const tagListColumns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Outputs',
    dataIndex: 'outputs',
    key: 'outputs',
    render: (values: string[]): ReactNode => (
      <Flex gap={SizeXxs} wrap>
        {values.map(output => (
          <Tag key={output} color="default">
            {output}
          </Tag>
        ))}
      </Flex>
    ),
  },
]

export const TagList: Story = {
  name: 'Multiple tags',
  parameters: {
    docs: {
      description: {
        story: 'Render a list of tags for multi-value attributes. Wrap the list so it reflows on narrow columns.',
      },
    },
  },
  render: () => <Table<Row> columns={tagListColumns} dataSource={data} pagination={false} />,
}
