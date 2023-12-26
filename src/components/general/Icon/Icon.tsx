import React from "react";
import { Icon as AntIcon } from "antd";
import { IconProps as AntIconProps } from "antd";

export interface IIconProps extends AntIconProps {
}

export const Icon = (props: IIconProps) => {
  return <>
    <AntIcon {...props}/>
  </>;
};