import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import './button.css'

export interface IButtonProps extends AntButtonProps {}

export const Button = (props: IButtonProps) => {
  return (
    <ConfigProvider>
      <AntButton {...props} className={props.icon ? 'aquarium-button--aligned-center' : ''}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}

Button.Group = AntButton.Group
