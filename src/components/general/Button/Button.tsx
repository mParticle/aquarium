import { Button as AntButton, ConfigProvider, type ButtonProps as AntButtonProps } from 'antd'

export interface IButtonProps extends AntButtonProps {}

export const Button = (props: IButtonProps) => (
  <ConfigProvider>
    <AntButton {...props}>{props.children}</AntButton>
  </ConfigProvider>
)
