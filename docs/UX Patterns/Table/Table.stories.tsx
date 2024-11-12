import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Icon, Input, Table, Space } from 'src/components'
import { DatePickerWithDisabledYears } from 'src/components/data-entry/DatePicker/DatePicker.stories'
import { tableColumns, tableData, type TableDataType } from './TableStoryUtils'

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Table/Table',
  component: Table,

  args: {},
}

export default meta

type Story = StoryObj<typeof Table>

export const BasicTable: Story = {
  name: 'Basic Table',
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex gap={10}>
            <DatePickerWithDisabledYears />
          </Flex>
          <Input
            allowClear
            prefix={<Icon size="sm" color="brand" name="search" />}
            placeholder="Search"
            style={{ width: '240px' }}
          />
        </Flex>
      </Space>
      <Table<TableDataType> columns={tableColumns} dataSource={tableData} scroll={{ x: 'max-content' }} />
    </Space>
  ),
}
