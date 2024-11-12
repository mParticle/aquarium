import type { Meta, StoryObj } from '@storybook/react'
import {
  Flex,
  Icon,
  Input,
  Table,
  Space,
  Button,
  Modal,
  Typography,
  Select,
  Divider,
  type ICollapseProps,
  ConfigProvider,
  Collapse,
  Checkbox,
} from 'src/components'
import { DatePickerWithDisabledYears } from 'src/components/data-entry/DatePicker/DatePicker.stories'
import { SelectWithRangePicker } from 'docs/Candidate Components/Directory/Date Range Filter/SelectWithRangePicker'
import { useState } from 'react'
import {
  DEFAULT_FILTERS,
  tableColumns,
  tableData,
  type TableDataType,
  type TableDataTypeFilters,
} from './TableStoryUtils'
import { ColorTextDescription } from 'src/styles/style'
import MinusSquareOutlined from '@ant-design/icons/MinusSquareOutlined'
import PlusSquareOutlined from '@ant-design/icons/PlusSquareOutlined'

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Table/Filters',
  component: Table,

  args: {},
}

export default meta

type Story = StoryObj<typeof Table>

export const WithBasicFilters: Story = {
  name: 'Basic',
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

interface IUseSortAndFiltersModalProps {
  initialValues: TableDataTypeFilters
  onFinish: (values: TableDataTypeFilters) => void
}

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
  defaultOpen?: boolean
}

type ICollapsibleFormSectionProps = ICollapseProps['items'][0] & {
  defaultOpen?: boolean
}

const CollapsibleFormSection = ({ defaultOpen, ...item }: ICollapsibleFormSectionProps): React.JSX.Element => {
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
      <Collapse
        defaultActiveKey={defaultOpen ? 'item' : undefined}
        ghost
        expandIcon={({ isActive }): React.JSX.Element => (isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />)}
        items={[{ ...item, key: 'item' }]}
      />
    </ConfigProvider>
  )
}

const MultipleCheckboxes = ({ label, fieldName, items, defaultOpen }: IMultipleCheckboxesProps) => (
  <CollapsibleFormSection
    defaultOpen={defaultOpen}
    label={label}
    extra={
      // <Form.Item noStyle shouldUpdate={(prev, next) => prev[fieldName] !== next[fieldName]}>
      //   {({ getFieldValue }) => {
      //     const selected = getFieldValue(fieldName) ?? []
      //     if (!selected.length) {
      //       return null
      //     }
      //     return (
      //       <Typography.Text style={{ cursor: 'text' }} disabled>
      //         {selected.length} selected
      //       </Typography.Text>
      //     )
      //   }}
      // </Form.Item>
      <Typography.Text style={{ cursor: 'text' }} disabled>
        1 selected
      </Typography.Text>
    }>
    {/* <Form.Item noStyle shouldUpdate={(prev, next) => prev[fieldName] !== next[fieldName]}>
      {({ getFieldValue }) => {
        const fieldValue = getFieldValue(fieldName) ?? []

        return (
          <Space direction="vertical">
            {items.map(({ name, value }) => {
              return (
                <Form.Item
                  key={name}
                  name={fieldName}
                  getValueProps={(currValue = []) => ({
                    checked: currValue.includes(value),
                  })}
                  getValueFromEvent={e => {
                    if (e.target.checked) {
                      return [...fieldValue, value]
                    }

                    return fieldValue.filter((currValue: unknown) => currValue !== value)
                  }}
                  noStyle>
                  <Checkbox>{name}</Checkbox>
                </Form.Item>
              )
            })}
          </Space>
        )
      }}
    </Form.Item> */}
    <Space direction="vertical">
      {items.map(({ name, value }) => (
        <Checkbox key={name}>{name}</Checkbox>
      ))}
    </Space>
  </CollapsibleFormSection>
)

function useModal({ initialValues, onFinish }: IUseSortAndFiltersModalProps): [() => void, React.ReactElement] {
  const [open, setOpen] = useState(false)
  const [openSection, setOpenSection] = useState<keyof TableDataTypeFilters>()
  // const [form] = Form.useForm()

  const context = (
    <Modal
      open={open}
      destroyOnClose
      onCancel={() => {
        setOpen(false)
      }}
      cancelText={'Cancel'}
      // onOk={form.submit}
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
      {/* <Form<TableDataTypeFilters>
        // form={form}
        layout="horizontal"
        colon={false}
        labelAlign="left"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        initialValues={initialValues}
        onFinish={values => {
          console.log('values', values)
          setOpen(false)
          onFinish(values)
        }}> */}
      <Flex vertical style={{ overflow: 'auto', maxHeight: '80vh' }}>
        <FormSectionHeader label="Sorting" />
        {/* <Form.Item<TableDataTypeFilters> name={'sortAscending'} label={'Order'}>
           
          </Form.Item> */}
        <Select>
          <Select.Option value={'false'}>Recent first</Select.Option>
          <Select.Option value={'true'}>Oldest first</Select.Option>
        </Select>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleFormSection defaultOpen={openSection === 'name'} label="Name">
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select name"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={[
              { value: 'NBCU', label: 'NBCU' },
              { value: 'Remarkable Foods', label: 'Remarkable Foods' },
              { value: 'Lulo Bank', label: 'Lulo Bank' },
              { value: 'Shift', label: 'Shift' },
              { value: 'Marks and Spencer', label: 'Marks and Spencer' },
              { value: "Zaxby's", label: "Zaxby's" },
            ]}
          />
        </CollapsibleFormSection>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleFormSection defaultOpen={openSection === 'environments'} label="Environment">
          {/* <Form.Item wrapperCol={{ flex: 1 }} name={'environments'}>
              
            </Form.Item> */}
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'development', label: 'Development' },
              { value: 'production', label: 'Production' },
            ]}
          />
        </CollapsibleFormSection>
        <Divider style={{ margin: '4px 0' }} />
        <MultipleCheckboxes
          defaultOpen={openSection === 'statuses'}
          fieldName="statuses"
          label={'Status'}
          items={[
            { name: 'Draft', value: 'draft' },
            { name: 'Error', value: 'error' },
            { name: 'Production', value: 'production' },
          ]}
        />
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleFormSection defaultOpen={openSection === 'mpId'} label={'mPID'}>
          {/* <Form.Item wrapperCol={{ flex: 1 }} name={'mpId'}>
            <Input placeholder="mPID" allowClear />
          </Form.Item> */}
          <Input placeholder="mPID" allowClear />
        </CollapsibleFormSection>
        <Divider style={{ margin: '4px 0' }} />
        <CollapsibleFormSection defaultOpen={openSection === 'output'} label={'Output'}>
          {/* <Form.Item wrapperCol={{ flex: 1 }} name={'output'}>
          </Form.Item> */}
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
        </CollapsibleFormSection>
      </Flex>
      {/* </Form> */}
    </Modal>
  )

  const showModal = (openSection?: keyof TableDataTypeFilters): void => {
    // form.setFieldsValue(initialValues)
    setOpen(true)
    setOpenSection(openSection)
  }

  return [showModal, context] as const
}

export const WithComplexFilters: Story = {
  name: 'Complex',
  render: () => {
    const [filters, setFilters] = useState<TableDataTypeFilters>(() => {
      return {
        ...DEFAULT_FILTERS,
      }
    })

    const [showModal, context] = useModal({
      initialValues: filters,
      onFinish: newFilters => {
        setFilters(existing => ({
          ...existing,
          ...newFilters,
        }))
      },
    })

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
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  // onChange={(time) => onUpdateFilters({ time })}
                  rangePickerProps={{
                    showTime: true,
                    showHour: true,
                    showMinute: true,
                    showSecond: false,
                    disabledDate: antdDayJS => {
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
          <Table<TableDataType> columns={tableColumns} dataSource={tableData} scroll={{ x: 'max-content' }} />
        </Space>
      </>
    )
  },
}
