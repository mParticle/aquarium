import React from 'react'
import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { Icon } from 'src/components'
import type { IIconProps } from 'src/components'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import { type ReactNode } from 'react'

export interface IButtonProps extends AntButtonProps {
  /**
   * @deprecated This variant is a temporary fix for new icons.
   * Use this variant only with new icons to align the icon and text centered.
   * This will be removed once all icons are updated.
   */
  variant?: 'with-new-icon'
  icon?: ReactNode
}
export const Button = (props: IButtonProps) => {
  const classMap = {
    'with-new-icon': 'u-display-flex u-align-items-center u-justify-center',
  }

  const buttonIcon =
    React.isValidElement<IIconProps>(props.icon) && props.icon.type === Icon ? (
      <Icon {...props.icon.props} color={props.icon.props.color ?? 'inherit'} />
    ) : (
      props.icon
    )

  return (
    <ConfigProvider>
      <AntButton
        {...props}
        icon={buttonIcon}
        className={`${props.className}${props.variant ? ` ${classMap[props.variant]}` : ''}`}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}

Button.Group = AntButton.Group
