import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd";

interface IButtonProps extends AntButtonProps {
  copy: string;
}

export const Button = (props: IButtonProps) => <>
  <AntButton {...props}>
    {props.copy}
  </AntButton>
</>;