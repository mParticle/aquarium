import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd'

export interface IDatePickerProps extends AntDatePickerProps {}

export const DatePicker = (props: IDatePickerProps) => {
  return <AntDatePicker {...props} />
}

DatePicker.generatePicker = AntDatePicker.generatePicker
DatePicker.QuarterPicker = AntDatePicker.QuarterPicker
DatePicker.MonthPicker = AntDatePicker.MonthPicker
DatePicker.RangePicker = AntDatePicker.RangePicker
DatePicker.TimePicker = AntDatePicker.TimePicker
DatePicker.WeekPicker = AntDatePicker.WeekPicker
DatePicker.YearPicker = AntDatePicker.YearPicker
