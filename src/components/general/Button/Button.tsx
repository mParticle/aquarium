import React from "react";
import { Button as AntButton, ConfigProvider } from "antd";
import { ButtonProps as AntButtonProps } from "antd";
import { BaseTheme } from "src/styles/ThemeFactory";

interface IButtonProps extends AntButtonProps {
}

export const Button = (props: IButtonProps) => {
  return <>
    <BaseTheme>
      <AntButton {...props}>
        {props.children}
      </AntButton>
    </BaseTheme>
  </>;
};