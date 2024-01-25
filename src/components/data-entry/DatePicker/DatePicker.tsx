import { DatePicker as AntDatePicker } from 'antd'
import { type PickerDateProps } from 'antd/es/date-picker/generatePicker'
import { type Dayjs } from 'dayjs'
import { ConfigProvider } from 'src/components'

type AntDatePickerProps = PickerDateProps<Dayjs>

export interface IDatePickerProps extends AntDatePickerProps {}

export const DatePicker = (props: IDatePickerProps) => {
  return (
    <ConfigProvider>
      <AntDatePicker {...props} />
    </ConfigProvider>
  )
}
