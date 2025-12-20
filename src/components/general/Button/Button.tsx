import React, { forwardRef } from 'react'
import { Button as AntButton } from 'antd'
import { type ButtonProps as AntButtonProps } from 'antd'
import { Icon } from 'src/components'
import type { IIconProps } from 'src/components'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import { type ReactNode } from 'react'
import './button.css'

type ButtonColor = AntButtonProps['color'] | 'inherit'

export interface IButtonProps extends Omit<AntButtonProps, 'variant' | 'color'> {
  /**
   * @deprecated This variant is a temporary fix for new icons.
   * Use this variant only with new icons to align the icon and text centered.
   * This will be removed once all icons are updated.
   */
  variant?: 'with-new-icon'
  icon?: ReactNode
  color?: ButtonColor
}

type ButtonComponent = React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>> & {
  Group: typeof AntButton.Group
}

export const Button: ButtonComponent = Object.assign(
  forwardRef<HTMLButtonElement, IButtonProps>(function Button(props, ref) {
    const classMap = {
      'with-new-icon': 'u-display-flex u-align-items-center u-justify-center',
    }

    const buttonIcon =
      React.isValidElement<IIconProps>(props.icon) && props.icon.type === Icon ? (
        <Icon {...props.icon.props} color={props.icon.props.color ?? 'inherit'} />
      ) : (
        props.icon
      )

    const extraClass = props.variant === 'with-new-icon' ? classMap['with-new-icon'] : ''

    const { variant, color, ...restProps } = props

    // Pass color to AntButton only if it's a valid Ant color (not 'inherit')
    const antColor = color === 'inherit' ? undefined : color

    return (
      <ConfigProvider>
        <AntButton
          ref={ref}
          {...restProps}
          color={antColor}
          icon={buttonIcon}
          className={`${props.className ?? ''} ${extraClass}`}>
          {props.children}
        </AntButton>
      </ConfigProvider>
    )
  }),
  { Group: AntButton.Group },
)
