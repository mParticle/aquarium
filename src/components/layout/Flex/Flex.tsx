import React from "react";
import { Flex as AntFlex } from "antd";
import { FlexProps as AntFlexProps } from "antd";

export interface IFlexProps extends AntFlexProps {
}

export const Flex = (props: IFlexProps) => {
  return <>
    <AntFlex {...props}/>
  </>;
};