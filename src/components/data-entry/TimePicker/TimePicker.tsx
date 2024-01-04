import React from "react";
import { TimePicker as AntTimePicker } from "antd";
import { TimePickerProps as AntTimePickerProps } from "antd";

export interface ITimePickerProps extends AntTimePickerProps {
}

export const TimePicker = (props: ITimePickerProps) => {
  return <>
    <AntTimePicker {...props}/>
  </>;
};