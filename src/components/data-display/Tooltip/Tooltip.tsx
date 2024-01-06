import React from "react";
import { Tooltip as AntTooltip } from "antd";
import { TooltipPropsWithTitle as AntTooltipProps } from "antd/es/tooltip";

export interface ITooltipProps extends AntTooltipProps {
}

export const Tooltip = (props: ITooltipProps) => {
  return <>
    <AntTooltip {...props}/>
  </>;
};