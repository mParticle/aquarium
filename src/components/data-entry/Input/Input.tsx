import React from "react";
import { Input as AntInput , type InputProps as AntInputProps } from "antd";


interface IInputProps extends AntInputProps {}

export const Input = (props: IInputProps) => (
  <>
    <AntInput {...props} />
  </>
);
