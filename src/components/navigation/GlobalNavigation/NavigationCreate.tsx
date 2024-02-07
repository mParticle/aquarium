import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import { Icon } from 'src/components'
import type { IMenuProps } from 'src/components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'src/components'

interface INavigationCreateProps {
  createItems: Array<MenuItemType | MenuItemGroupType>
}

export function NavigationCreate(props: INavigationCreateProps) {
  const items: IMenuProps['items'] = [
    {
      key: 'NavigationCreate',
      icon: (
        <Center style={{ pointerEvents: 'none' }}>
          <Button icon={<Icon icon={faPlus} />} />
        </Center>
      ),
      children: props.createItems,
    },
  ]

  return (
    <Center>
      <Menu
        className="globalNavigation__menu globalNavigation__item"
        items={items}
        expandIcon={null}
        defaultOpenKeys={['NavigationCreate']} /* testing only */
      />
    </Center>
  )
}