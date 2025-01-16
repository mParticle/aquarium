import type { Meta, StoryObj } from '@storybook/react'
import {
  Flex,
  Icon,
  Input,
  Table,
  Space,
  Button,
  Checkbox,
  Collapse,
  ConfigProvider,
  Divider,
  type ICollapseProps,
  Modal,
  Select,
  Typography,
  TreeSelect,
  Row,
  Col,
} from 'src/components'
import { DatePickerWithDisabledYears } from 'src/components/data-entry/DatePicker/DatePicker.stories'
import { tableColumns, tableData, type TableDataType } from './TableStoryUtils'
import { SelectWithRangePicker } from 'docs/Candidate Components/Directory/Date Range Filter/SelectWithRangePicker'
import { useState } from 'react'
import { ColorTextDescription } from 'src/styles/style'

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Table/Table',
  component: Table,

  args: {},
}

export default meta

type Story = StoryObj<typeof Table>

export const Primary: Story = {
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

export const FixedHeader: Story = {
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
      <Table<TableDataType> columns={tableColumns} dataSource={tableData} scroll={{ x: 'max-content' }} sticky={true} />
    </Space>
  ),
}

const TIME_OPTIONS = [
  {
    value: 'last12hours',
    label: 'Last 12 hours',
  } as const,
  {
    value: 'last7days',
    label: 'Last 7 days',
  } as const,
  {
    value: 'last14days',
    label: 'Last 14 days',
  } as const,
]

const FormSectionHeader = ({ label }: { label: string }) => (
  <Typography.Text
    style={{
      marginBottom: '10px',
      display: 'block',
      color: ColorTextDescription,
    }}
    size="sm"
    strong>
    {label}
  </Typography.Text>
)

interface IMultipleCheckboxItem {
  name: string
  value: unknown
}

interface IMultipleCheckboxesProps {
  label: string
  fieldName: string
  items: IMultipleCheckboxItem[]
}

type ICollapsibleFormSectionProps = NonNullable<ICollapseProps['items']>[0]

const CollapsibleSection = ({ ...item }: ICollapsibleFormSectionProps): React.JSX.Element => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerPadding: '2px 0',
            contentPadding: '0 24px',
          },
        },
      }}>
      <Collapse ghost items={[{ ...item, key: 'item' }]} />
    </ConfigProvider>
  )
}

const MultipleCheckboxes = ({ label, items }: IMultipleCheckboxesProps) => (
  <CollapsibleSection
    label={label}
    extra={
      <Typography.Text style={{ cursor: 'text' }} disabled>
        1 selected
      </Typography.Text>
    }>
    <Space direction="vertical">
      {items.map(({ name, value }) => (
        <Checkbox key={name}>{name}</Checkbox>
      ))}
    </Space>
  </CollapsibleSection>
)

function useModal(): [() => void, React.ReactElement] {
  const [open, setOpen] = useState(false)

  const context = (
    <Modal
      open={open}
      destroyOnClose
      onCancel={() => {
        setOpen(false)
      }}
      cancelText={'Cancel'}
      onOk={() => setOpen(false)}
      okText={'Apply'}
      width={'580px'}
      style={{ maxHeight: '80vh' }}
      closable
      title={
        <Typography.Text strong={false} size="xl">
          Sort & Filters
        </Typography.Text>
      }>
      <Flex vertical style={{ overflow: 'auto', maxHeight: '80vh' }}>
        <FormSectionHeader label="Sorting" />
        <Row>
          <Col span={12}>
            <Typography.Text>Order</Typography.Text>
          </Col>
          <Col span={12}>
            <Select style={{ width: '100%' }}>
              <Select.Option value={'false'}>Recent first</Select.Option>
              <Select.Option value={'true'}>Oldest first</Select.Option>
            </Select>
          </Col>
        </Row>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleSection label="Name">
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select name"
            filterOption={(input, option) =>
              typeof option?.label === 'string' && option.label.toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: 'NBCU', label: 'NBCU' },
              { value: 'Remarkable Foods', label: 'Remarkable Foods' },
              { value: 'Lulo Bank', label: 'Lulo Bank' },
              { value: 'Shift', label: 'Shift' },
              { value: 'Marks and Spencer', label: 'Marks and Spencer' },
              { value: "Zaxby's", label: "Zaxby's" },
            ]}
          />
        </CollapsibleSection>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleSection label="Environment">
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'development', label: 'Development' },
              { value: 'production', label: 'Production' },
            ]}
          />
        </CollapsibleSection>
        <Divider style={{ margin: '4px 0' }} />
        <MultipleCheckboxes
          fieldName="statuses"
          label={'Status'}
          items={[
            { name: 'Draft', value: 'draft' },
            { name: 'Error', value: 'error' },
            { name: 'Production', value: 'production' },
          ]}
        />
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleSection label={'mPID'}>
          <Input placeholder="mPID" allowClear />
        </CollapsibleSection>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleSection label={'Inputs'}>
          <Select
            mode="tags"
            style={{ width: '100%' }}
            options={[
              { value: 'Braze', label: 'Braze' },
              { value: 'mP Analytics', label: 'mP Analytics' },
              { value: 'Cortex', label: 'Cortex' },
              { value: 'Applytics', label: 'Applytics' },
              { value: 'Google Analytics', label: 'Google Analytics' },
            ]}
          />
        </CollapsibleSection>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleSection label={'Outputs'}>
          <TreeSelect
            style={{ width: '100%' }}
            treeCheckable
            treeData={[
              {
                value: 'Braze',
                title: 'Braze',
                key: 'Braze',
                children: [
                  {
                    value: 'Braze-1',
                    title: 'Braze 1',
                    key: 'Braze-1',
                    children: [
                      { value: 'Braze-1-1', title: 'Braze 1-1', key: 'Braze-1-1' },
                      { value: 'Braze-1-2', title: 'Braze 1-2', key: 'Braze-1-2' },
                      { value: 'Braze-1-3', title: 'Braze 1-3', key: 'Braze-1-3' },
                    ],
                  },
                ],
              },
              {
                value: 'mP Analytics',
                title: 'mP Analytics',
                key: 'mP Analytics',
                children: [
                  {
                    value: 'mP Analytics-1',
                    title: 'mP Analytics 1',
                    key: 'mP Analytics-1',
                    children: [
                      { value: 'mP Analytics-1-1', title: 'mP Analytics 1-1', key: 'mP Analytics-1-1' },
                      { value: 'mP Analytics-1-2', title: 'mP Analytics 1-2', key: 'mP Analytics-1-2' },
                      { value: 'mP Analytics-1-3', title: 'mP Analytics 1-3', key: 'mP Analytics-1-3' },
                    ],
                  },
                ],
              },
              { value: 'Cortex', title: 'Cortex', key: 'Cortex' },
              { value: 'Applytics', title: 'Applytics', key: 'Applytics' },
              { value: 'Google Analytics', title: 'Google Analytics', key: 'Google Analytics' },
            ]}
          />
        </CollapsibleSection>
      </Flex>
    </Modal>
  )

  const showModal = (): void => {
    setOpen(true)
  }

  return [showModal, context] as const
}

export const WithComplexFilters: Story = {
  name: 'Complex',
  render: () => {
    const [showModal, context] = useModal()

    return (
      <>
        {context}
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Flex align={'center'} justify={'space-between'}>
              <Flex gap={10}>
                <SelectWithRangePicker
                  value={'last14days'}
                  placeholder={'Choose Time'}
                  options={TIME_OPTIONS}
                  formatOptions={{
                    dateStyle: 'short',
                    timeStyle: 'short',
                    hour12: false,
                  }}
                  dropdownStyle={{ minWidth: 400 }}
                  rangePickerProps={{
                    showTime: true,
                    showHour: true,
                    showMinute: true,
                    showSecond: false,
                    disabledDate: (antdDayJS: any) => {
                      const fourteenDaysInMs = 14 * 24 * 60 * 60 * 1000
                      return antdDayJS.isBefore(new Date(Date.now() - fourteenDaysInMs))
                    },
                  }}
                />
                <Button onClick={() => showModal()}>
                  <Flex align="center" gap={5}>
                    <Icon color="inherit" name={'filter'} size="sm" />
                    <span>Sort & Filters</span>
                    <Icon color="inherit" name={'dropdownOpen'} size="sm" />
                  </Flex>
                </Button>
              </Flex>
              <Input
                allowClear
                prefix={<Icon size="sm" color="brand" name="search" />}
                placeholder="Search"
                style={{ width: '240px' }}
              />
            </Flex>
          </Space>
          <Table<TableDataType>
            columns={tableColumns}
            dataSource={tableData.slice(0, 2)}
            scroll={{ x: 'max-content' }}
          />
        </Space>
      </>
    )
  },
}
