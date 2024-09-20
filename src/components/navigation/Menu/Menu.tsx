import { Menu as AntMenu, type MenuProps } from 'antd'
import { type MenuProps as AntMenuProps } from 'antd'
import { type MenuInfo as RCMenuInfo } from 'rc-menu/lib/interface'
import { ConfigProvider } from 'src/components'

export type AndMenuItemType = Required<MenuProps>['items'][number]
export type AndMenuItemGroupType = Required<MenuProps>['items'][number] // Same type used for menu groups
export type AndMenuDividerType = Required<MenuProps>['items'][number] // Menu divider uses the same type
export type AndSubMenuType = Required<MenuProps>['items'][number] // Submenu is also part of 'items'

export interface IMenuProps extends AntMenuProps {}

export interface IMenuInfo extends RCMenuInfo {}

export {
  type AndMenuItemType as MenuItemType,
  type AndMenuItemGroupType as MenuItemGroupType,
  type AndMenuDividerType as MenuDividerType,
  type AndSubMenuType as SubMenuType,
}

export const Menu = (props: IMenuProps) => {
  return (
    <ConfigProvider>
      <AntMenu {...props} />
    </ConfigProvider>
  )
}

Menu.SubMenu = AntMenu.SubMenu
Menu.Item = AntMenu.Item
Menu.ItemGroup = AntMenu.ItemGroup
Menu.Divider = AntMenu.Divider
