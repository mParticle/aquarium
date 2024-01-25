import { Menu as AntMenu } from 'antd'
import { type MenuProps as AntMenuProps } from 'antd'
import AntMenuItem from 'antd/es/menu/MenuItem'
import {
  type MenuItemType as AndMenuItemType,
  type MenuItemGroupType as AndMenuItemGroupType,
  type MenuDividerType as AndMenuDividerType,
  type SubMenuType as AndSubMenuType,
} from 'antd/es/menu/hooks/useItems'
import { ConfigProvider } from 'src/components'

export interface IMenuProps extends AntMenuProps {}

export const Menu = (props: IMenuProps) => {
  return (
    <ConfigProvider>
      <AntMenu {...props} />
    </ConfigProvider>
  )
}

export {
  AntMenuItem as MenuItem,
  type AndMenuItemType as MenuItemType,
  type AndMenuItemGroupType as MenuItemGroupType,
  type AndMenuDividerType as MenuDividerType,
  type AndSubMenuType as SubMenuType,
}
