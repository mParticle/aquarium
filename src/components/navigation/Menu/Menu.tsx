import { Menu as AntMenu } from 'antd'
import { type MenuProps as AntMenuProps } from 'antd'
import {
  type MenuItemType as AndMenuItemType,
  type MenuItemGroupType as AndMenuItemGroupType,
  type MenuDividerType as AndMenuDividerType,
  type SubMenuType as AndSubMenuType,
} from 'antd/es/menu/hooks/useItems'
import { type MenuInfo as RCMenuInfo } from 'rc-menu/lib/interface'
import { ConfigProvider } from 'src/components'

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