import React from "react";
import { Popover as AntPopover } from "antd";
import { PopoverProps as AntPopoverProps } from "antd";

export interface IPopoverProps extends AntPopoverProps {
}

export const Popover = (props: IPopoverProps) => {
  return <>
    <AntPopover {...props}/>
  </>;
};