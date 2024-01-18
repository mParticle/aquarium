import { Calendar as AntCalendar, type CalendarProps as AntCalendarProps } from 'antd'

export interface ICalendarProps extends AntCalendarProps {}

export const Calendar = (props: ICalendarProps) => {
  return (
    <>
      <AntCalendar {...props} />
    </>
  )
}
