import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd";

interface IButtonProps extends AntButtonProps {
}

export const Button = (props: IButtonProps) => <>
  <AntButton {...props}>
    {props.children}
  </AntButton>
</>;