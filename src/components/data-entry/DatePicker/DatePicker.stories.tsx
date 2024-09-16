import { DatePicker, Tooltip } from 'src/components'
import dayjs, { type Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { type CellRender as RcPickerCellRender, type CellRenderInfo } from 'rc-picker/lib/interface'

const DatePickerWithDisabledYears: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const disabledDate = (current: Dayjs): boolean => current && current.year() < 2023
  const handleChange = (date: Dayjs | null) => {
    if (date && disabledDate(date)) {
      setSelectedDate(null)
    } else {
      setSelectedDate(date)
    }
  }

  const cellRender: RcPickerCellRender<Dayjs> = (current, info: CellRenderInfo<Dayjs>) => {
    if (!dayjs.isDayjs(current)) {
      return info.originNode
    }

    const isDisabled = disabledDate(current)

    const handleInteraction = (e: React.SyntheticEvent) => {
      if (isDisabled) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    if (info.type === 'year') {
      return isDisabled ? (
        <Tooltip title="Data is only available for years 2023 and onwards.">
          <div
            className="ant-picker-cell-inner"
            style={{ color: 'rgba(0, 0, 0, 0.25)', cursor: 'not-allowed' }}
            onClick={handleInteraction}
            onMouseDown={handleInteraction}
            onKeyDown={handleInteraction}>
            {current.year()}
          </div>
        </Tooltip>
      ) : (
        info.originNode
      )
    }

    return info.originNode
  }

  return <DatePicker picker="year" cellRender={cellRender} value={selectedDate} onChange={handleChange} />
}

const meta: Meta<typeof DatePicker> = {
  title: 'Aquarium/Data Entry/Date Picker',
  component: DatePicker,
  args: {},
}
export default meta

type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {}

export const WithDatePickerWithDisabledYears: Story = {
  render: () => <DatePickerWithDisabledYears />,
}

WithDatePickerWithDisabledYears.parameters = {
  docs: {
    source: {
      code: `
import React from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Tooltip } from 'src/components';

const DatePickerWithDisabledYears: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  const disabledDate = (current: Dayjs): boolean => current && current.year() < 2023;

  const handleChange = (date: Dayjs | null) => {
    if (date && disabledDate(date)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  const cellRender = (current: Dayjs, info: any) => {
    const isDisabled = disabledDate(current);

    const handleInteraction = (e: React.SyntheticEvent) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (info.type === 'year') {
      return isDisabled ? (
        <Tooltip title="Data is only available for years 2023 and onwards.">
          <div
            className="ant-picker-cell-inner"
            style={{ color: 'rgba(0, 0, 0, 0.25)', cursor: 'not-allowed' }}
            onClick={handleInteraction}
            onMouseDown={handleInteraction}
            onKeyDown={handleInteraction}
          >
            {current.year()}
          </div>
        </Tooltip>
      ) : (
        info.originNode
      );
    }

    return info.originNode;
  };

  return (
    <DatePicker
      picker="year"
      cellRender={cellRender}
      value={selectedDate}
      onChange={handleChange}
    />
  );
};
      `,
    },
  },
}
