import { TimePicker as AntTimePicker } from 'antd'
import { type TimePickerProps as AntTimePickerProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITimePickerProps extends AntTimePickerProps {}

export const TimePicker = (props: ITimePickerProps) => {
  return (
    <ConfigProvider>
      <AntTimePicker {...props} />
    </ConfigProvider>
  )
}
