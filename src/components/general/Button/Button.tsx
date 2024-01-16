import React from "react";
import { Button as AntButton, ConfigProvider , type ButtonProps as AntButtonProps } from "antd";


interface IButtonProps extends AntButtonProps {}

export const Button = (props: IButtonProps) => (
  <>
    <ConfigProvider>
      <AntButton {...props}>{props.children}</AntButton>
    </ConfigProvider>
  </>
);
