import React from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

interface IButtonProps extends AntButtonProps{
  copy: string;
}

export function Button(props: IButtonProps) {
  return <AntButton {...props}>{props.copy}</AntButton>;
}