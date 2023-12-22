import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd";
import { BaseTheme } from "src/styles/ThemeFactory";

interface IButtonProps extends AntButtonProps {
  copy: string;
}

export const Button = (props: IButtonProps) => {
  
  return <>
    <BaseTheme>

      <AntButton {...props}>
        {props.copy}
      </AntButton>

    </BaseTheme>
  </>;
};