import { Menu as AntMenu, type MenuProps } from 'antd'
import { type MenuProps as AntMenuProps } from 'antd'
import { type MenuInfo as RCMenuInfo } from '@rc-component/menu/lib/interface'
import { ConfigProvider } from 'src/components'

type AntDMenuItemType = Required<MenuProps>['items'][number]
type AntDMenuItemGroupType = Required<MenuProps>['items'][number]
type AntDMenuDividerType = Required<MenuProps>['items'][number]
type AntDSubMenuType = Required<MenuProps>['items'][number]

export interface IMenuProps extends AntMenuProps {}

export interface IMenuInfo extends RCMenuInfo {}

export {
  type AntDMenuItemType as MenuItemType,
  type AntDMenuItemGroupType as MenuItemGroupType,
  type AntDMenuDividerType as MenuDividerType,
  type AntDSubMenuType as SubMenuType,
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
