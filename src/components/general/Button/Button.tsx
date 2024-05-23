import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export interface IButtonProps extends AntButtonProps {}

export const Button = (props: IButtonProps) => {
  return (
    <ConfigProvider>
      <AntButton {...props} className={props.icon ? 'u-display-flex u-align-items-center ' : ''}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}

Button.Group = AntButton.Group
