import React from "react";
import { InputNumber as AntInputNumber } from "antd";
import { InputNumberProps as AntInputNumberProps } from "antd";

export interface IInputNumberProps extends AntInputNumberProps {}

export const InputNumber = (props: IInputNumberProps) => {
  return (
    <>
      <AntInputNumber {...props} />
    </>
  );
};
