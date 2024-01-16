import React from "react";
import { InputNumber as AntInputNumber , type InputNumberProps as AntInputNumberProps } from "antd";


export interface IInputNumberProps extends AntInputNumberProps {}

export const InputNumber = (props: IInputNumberProps) => {
  return (
    <>
      <AntInputNumber {...props} />
    </>
  );
};
