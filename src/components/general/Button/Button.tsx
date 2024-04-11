import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import { ThemeContext } from 'src/components/other/ThemeContext/ThemeContext'

export interface IButtonProps extends AntButtonProps {}

export const Button = (props: IButtonProps) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <ConfigProvider>
          <AntButton style={{ ...theme?.components?.Button?.style }} {...props}>
            {props.children}
          </AntButton>
        </ConfigProvider>
      )}
    </ThemeContext.Consumer>
  )
}

Button.Group = AntButton.Group
