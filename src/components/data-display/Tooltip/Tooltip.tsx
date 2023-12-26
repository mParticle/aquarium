import React from "react";
import { Tooltip as AntTooltip } from "antd";
import { TooltipProps as AntTooltipProps } from "antd";

export interface ITooltipProps extends AntTooltipProps {
}

export const Tooltip = (props: ITooltipProps) => {
  return <>
    <AntTooltip {...props}/>
  </>;
};