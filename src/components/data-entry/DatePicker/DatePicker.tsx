import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd'
import type { RangePickerProps as AntRangePickerProps } from 'antd/es/date-picker'
import { ConfigProvider } from 'src/components'

export interface IDatePickerProps extends AntDatePickerProps {}
export interface IRangePickerProps extends AntRangePickerProps {}

export const DatePicker = (props: IDatePickerProps) => {
  return (
    <ConfigProvider>
      <AntDatePicker {...props} />
    </ConfigProvider>
  )
}

DatePicker.generatePicker = AntDatePicker.generatePicker
DatePicker.QuarterPicker = AntDatePicker.QuarterPicker
DatePicker.MonthPicker = AntDatePicker.MonthPicker
DatePicker.RangePicker = AntDatePicker.RangePicker
DatePicker.TimePicker = AntDatePicker.TimePicker
DatePicker.WeekPicker = AntDatePicker.WeekPicker
DatePicker.YearPicker = AntDatePicker.YearPicker
