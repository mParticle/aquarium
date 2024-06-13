import { Calendar as AntCalendar, type CalendarProps as AntCalendarProps } from 'antd'
import { type Dayjs } from 'dayjs'

export interface ICalendarProps extends AntCalendarProps<Dayjs> {}

export const Calendar = (props: ICalendarProps) => {
  return <AntCalendar {...props} />
}

Calendar.generateCalendar = AntCalendar.generateCalendar
