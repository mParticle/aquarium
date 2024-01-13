import React from "react";
import { Cascader as AntCascader } from "antd";
import { CascaderProps as AntCascaderProps } from "antd";
import { BaseOptionType } from "antd/es/select";

export type ICascaderProps<DataNodeType extends BaseOptionType = any> = AntCascaderProps<DataNodeType> 

export const Cascader = (props: ICascaderProps) => {
  return <>
    <AntCascader {...props}/>
  </>;
};

Cascader.Panel = AntCascader.Panel;
Cascader.SHOW_PARENT = AntCascader.SHOW_PARENT;
Cascader.SHOW_CHILD = AntCascader.SHOW_CHILD;