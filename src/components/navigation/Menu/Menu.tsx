import { Menu as AntMenu } from 'antd'
import AntMenuItem from 'antd/es/menu/MenuItem'
import { type MenuProps as AntMenuProps } from 'antd'
import { type MenuItemType as AndMenuItemType } from 'antd/es/menu/hooks/useItems'
import { type MenuItemGroupType as AndMenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { type MenuDividerType as AndMenuDividerType } from 'antd/es/menu/hooks/useItems'
import { type SubMenuType as AndSubMenuType } from 'antd/es/menu/hooks/useItems'

export interface IMenuProps extends AntMenuProps {}

export const Menu = (props: IMenuProps) => <AntMenu {...props} />

export {
  AntMenuItem as MenuItem,
  type AndMenuItemType as MenuItemType,
  type AndMenuItemGroupType as MenuItemGroupType,
  type AndMenuDividerType as MenuDividerType,
  type AndSubMenuType as SubMenuType,
}
