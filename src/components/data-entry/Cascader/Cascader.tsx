import React from "react";
import { Cascader as AntCascader , type CascaderProps as AntCascaderProps } from "antd";


export type ICascaderProps = AntCascaderProps;

export const Cascader = (props: ICascaderProps) => {
  return (
    <>
      <AntCascader {...props} />
    </>
  );
};
