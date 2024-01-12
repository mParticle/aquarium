import React from "react";
import { Tooltip as AntTooltip } from "antd";
import { TooltipPropsWithTitle as AntTooltipPropsWithTitle } from "antd/es/tooltip";

export interface ITooltipProps extends AntTooltipPropsWithTitle {
}

export const Tooltip = (props: ITooltipProps) => {
  return <>
    <AntTooltip {...props}/>
  </>;
};