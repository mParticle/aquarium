import { Calendar as AntCalendar, type CalendarProps as AntCalendarProps } from 'antd'
import { type Dayjs } from 'dayjs'
import { ConfigProvider } from 'src/components'

export interface ICalendarProps extends AntCalendarProps<Dayjs> {}

export const Calendar = (props: ICalendarProps) => {
  return (
    <ConfigProvider>
      <AntCalendar {...props} />
    </ConfigProvider>
  )
}

Calendar.generateCalendar = AntCalendar.generateCalendar
