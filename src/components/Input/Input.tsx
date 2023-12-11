import React from "react";
import { Input as AntInput } from "antd";
import { InputProps as AntInputProps } from "antd";

interface IInputProps extends AntInputProps {
  copy: string;
}

export const Input = (props: IInputProps) => <>
  <AntInput {...props}>
    {props.copy}
  </AntInput>
</>;