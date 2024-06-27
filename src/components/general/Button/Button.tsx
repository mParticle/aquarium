import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export interface IButtonProps extends AntButtonProps {
  /**
   * @deprecated This variant is a temporary fix for new icons.
   * Use this variant only with new icons to align the icon and text centered.
   * This will be removed once all icons are updated.
   */
  variant?: 'with-new-icon'
}
export const Button = (props: IButtonProps) => {
  const classMap = {
    'with-new-icon': 'u-display-flex u-align-items-center u-justify-center',
  }

  return (
    <ConfigProvider>
      <AntButton {...props} className={`${props.className}${props.variant ? ` ${classMap[props.variant]}` : ''}`}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}

Button.Group = AntButton.Group
