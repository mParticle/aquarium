import React from 'react'
import { Button, Dropdown, Icon, type IDropdownProps, type IButtonProps, type IMenuProps } from 'src/components'

export interface IMoreActionsButtonProps extends Omit<IDropdownProps, 'children' | 'menu'> {
  /**
   * Menu configuration for the dropdown - same as Dropdown component
   */
  menuItems: IMenuProps

  /**
   * Whether the button is disabled
   */
  disabled?: boolean

  /**
   * Additional props to pass to the Button component
   */
  buttonProps?: Omit<IButtonProps, 'type' | 'icon' | 'disabled'>
}

export const MoreActionsButton: React.FC<IMoreActionsButtonProps> = ({
  menuItems,
  disabled = false,
  buttonProps = {},
  placement = 'bottom',
  ...dropdownProps
}) => {
  return (
    <Dropdown menu={menuItems} placement={placement} trigger={['click']} {...dropdownProps}>
      <Button type="text" icon={<Icon name="moreActions" />} disabled={disabled} {...buttonProps} />
    </Dropdown>
  )
}
