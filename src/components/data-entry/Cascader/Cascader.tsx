import React from "react";
import { Cascader as AntCascader } from "antd";
import { CascaderProps as AntCascaderProps } from "antd";

export interface ICascaderProps extends AntCascaderProps {
}

export const Cascader = (props: ICascaderProps) => {
  return <>
    <AntCascader {...props}/>
  </>;
};