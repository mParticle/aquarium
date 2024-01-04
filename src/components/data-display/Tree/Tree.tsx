import React from "react";
import { Tree as AntTree } from "antd";
import { TreeProps as AntTreeProps } from "antd";

export interface ITreeProps extends AntTreeProps {
}

export const Tree = (props: ITreeProps) => {
  return <>
    <AntTree {...props}/>
  </>;
};