import React from "react";
import { TreeSelect as AntTreeSelect } from "antd";
import { TreeSelectProps as AntTreeSelectProps } from "antd";

export interface ITreeSelectProps extends AntTreeSelectProps {}

export const TreeSelect = (props: ITreeSelectProps) => {
  return (
    <>
      <AntTreeSelect {...props} />
    </>
  );
};
