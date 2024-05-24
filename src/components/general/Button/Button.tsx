import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export interface IButtonProps extends AntButtonProps {
  variant?: 'with-icon'
}
export const Button = (props: IButtonProps) => {
  // TODO:
  const classMap = {
    'with-icon': 'u-display-flex u-align-items-center',
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
