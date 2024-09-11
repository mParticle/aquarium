import { type Meta, type StoryObj } from '@storybook/react'
import { Radio, Button, Divider, Flex, Select } from 'src/components'
import { CalendarOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Placeholder } from 'src/components/icons'

const meta: Meta<typeof Select> = {
  title: 'Aquarium/Data Entry/Select',
  component: Select,
  args: {},
}
export default meta

type Story = StoryObj<typeof Select>
export const Primary: Story = {}
export const WithDatePicker: Story = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState(null)

    const handleRadioChange = e => {
      setSelectedValue(e.target.value)
    }

    return (
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Select
          {...args}
          placeholder="Select a Date Range"
          style={{ width: '250px' }}
          dropdownStyle={{ width: '250px' }}
          getPopupContainer={trigger => trigger.parentElement}
          dropdownRender={menu => (
            <div style={{ padding: '10px' }}>
              <Radio.Group
                onChange={handleRadioChange}
                value={selectedValue}
                style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Radio style={{ marginBottom: 8 }} value="fixed">
                  <Flex>
                    Fixed Date Range <Placeholder />
                  </Flex>
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="sinceCustom">
                  Since Custom Day
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="today">
                  Today
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="yesterday">
                  Yesterday
                </Radio>

                {/* Divider with Reduced Margin */}
                <Divider style={{ margin: '8px 0' }} />

                {/* Last Group Label */}
                <div style={{ marginBottom: 4, fontWeight: 500, fontSize: '12px', color: '#000', display: 'block' }}>
                  Last
                </div>
                <Radio style={{ marginBottom: 8 }} value="last7">
                  Last 7 Days
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="last30">
                  Last 30 Days
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="last90">
                  Last 90 Days
                </Radio>
                <a href="#" style={{ marginBottom: 8, color: '#1890ff', fontSize: '12px' }}>
                  Show more
                </a>

                {/* Divider with Reduced Margin */}
                <Divider style={{ margin: '8px 0' }} />

                {/* Current Group Label */}
                <div style={{ marginBottom: 4, fontWeight: 500, fontSize: '12px', color: '#000', display: 'block' }}>
                  Current
                </div>
                <Radio style={{ marginBottom: 8 }} value="currentWeek">
                  Current Week to Date
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="currentMonth">
                  Current Month to Date
                </Radio>
                <Radio style={{ marginBottom: 8 }} value="currentQuarter">
                  Current Quarter to Date
                </Radio>
                <a href="#" style={{ marginBottom: 8, color: '#1890ff', fontSize: '12px' }}>
                  Show more
                </a>

                {/* Divider with Reduced Margin */}
                <Divider style={{ margin: '8px 0' }} />

                {/* Clear Button */}
                <Button block icon={<CalendarOutlined />} onClick={() => setSelectedValue(null)}>
                  Clear Date Range
                </Button>
              </Radio.Group>
            </div>
          )}
        />
      </div>
    )
  },
}
