import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd";
import { ConfigProvider } from "src/components/other/ConfigProvider/ConfigProvider";

export interface IButtonProps extends AntButtonProps {
}

export const Button = (props: IButtonProps) => <>
  <ConfigProvider>
    <AntButton {...props}>
      {props.children}
    </AntButton>
  </ConfigProvider>
</>