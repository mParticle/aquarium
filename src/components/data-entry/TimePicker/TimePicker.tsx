import { TimePicker as AntTimePicker } from 'antd'
import { type TimePickerProps as AntTimePickerProps } from 'antd'

export interface ITimePickerProps extends AntTimePickerProps {}

export const TimePicker = (props: ITimePickerProps) => {
  return <AntTimePicker {...props} />
}

TimePicker.RangePicker = AntTimePicker.RangePicker
