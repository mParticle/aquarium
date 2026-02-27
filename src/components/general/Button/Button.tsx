import React from 'react'
import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { Icon } from 'src/components'
import type { IIconProps } from 'src/components'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import { type ReactNode } from 'react'
import './button.css'

export interface IButtonProps extends AntButtonProps {
  icon?: ReactNode
  textColor?: 'inherit'
}

interface ButtonComponent extends React.ForwardRefExoticComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
> {
  Group: typeof AntButton.Group
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>((props, ref) => {
  const buttonIcon =
    React.isValidElement<IIconProps>(props.icon) && props.icon.type === Icon ? (
      <Icon {...props.icon.props} color={props.icon.props.color ?? 'inherit'} />
    ) : (
      props.icon
    )

  const { variant, textColor, style, ...restProps } = props

  const buttonStyle = textColor === 'inherit' ? { ...style, color: 'inherit' } : style

  return (
    <ConfigProvider>
      <AntButton
        {...restProps}
        ref={ref}
        icon={buttonIcon}
        style={buttonStyle}
        variant={variant}
        className={`${props.className ?? ''}`}>
        {props.children}
      </AntButton>
    </ConfigProvider>
  )
}) as ButtonComponent

Button.displayName = 'Button'

Button.Group = AntButton.Group
