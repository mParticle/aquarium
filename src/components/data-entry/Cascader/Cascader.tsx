import React from "react";
import { Cascader as AntCascader } from "antd";
import { CascaderProps as AntCascaderProps } from "antd";

export type ICascaderProps = AntCascaderProps;

export const Cascader = (props: ICascaderProps) => {
  return (
    <>
      <AntCascader {...props} />
    </>
  );
};
