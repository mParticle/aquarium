import React from "react";
import { Calendar as AntCalendar } from "antd";
import { CalendarProps as AntCalendarProps } from "antd";

export interface ICalendarProps extends AntCalendarProps {
}

export const Calendar = (props: ICalendarProps) => {
  return <>
    <AntCalendar {...props}/>
  </>;
};