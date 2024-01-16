import React from "react";
import { Select as AntSelect } from "antd";
import { SelectProps as AntSelectProps } from "antd";

export interface ISelectProps extends AntSelectProps {}

export const Select = (props: ISelectProps) => {
  return (
    <>
      <AntSelect {...props} />
    </>
  );
};
