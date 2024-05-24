import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export interface IButtonProps extends AntButtonProps {
  variant?: 'content-align-center'
}
export const Button = (props: IButtonProps) => {
  const classMap = {
    'content-align-center': 'u-display-flex u-align-items-center',
  }
  return (
    <ConfigProvider>
      <AntButton {...props} className={`${props.className} ${props.variant ? classMap[props.variant] : ''}`}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}

Button.Group = AntButton.Group
