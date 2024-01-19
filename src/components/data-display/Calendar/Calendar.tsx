import { Calendar as AntCalendar } from 'antd'
import { type CalendarProps as AntCalendarProps } from 'antd'

export interface ICalendarProps extends AntCalendarProps<any> {}

export const Calendar = (props: ICalendarProps) => {
  return <AntCalendar {...props} />
}
