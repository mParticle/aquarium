import React from "react";
import { Space as AntSpace } from "antd";
import { SpaceProps as AntSpaceProps } from "antd";

export interface ISpaceProps extends AntSpaceProps {
}

export const Space = (props: ISpaceProps) => {
  return <>
    <AntSpace {...props}/>
  </>;
};