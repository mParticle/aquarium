import { Calendar as AntCalendar } from 'antd'
import { type CalendarProps as AntCalendarProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ICalendarProps extends AntCalendarProps {}

export const Calendar = (props: ICalendarProps) => {
  return (
    <ConfigProvider>
      <AntCalendar {...props} />
    </ConfigProvider>
  )
}

Calendar.generateCalendar = AntCalendar.generateCalendar
