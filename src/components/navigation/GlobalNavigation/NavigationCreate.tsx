import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import { Icon } from 'src/components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface INavigationCreateProps {
  createItems: Array<MenuItemType | MenuItemGroupType>
}

export function NavigationCreate(props: INavigationCreateProps) {
  return (
    <Center>
      <Menu
        items={[
          {
            icon: <Icon icon={faPlus} color="gray" size="2x" />,
            key: 'NavigationCreate',
            children: props.createItems,
          },
        ]}
      />
    </Center>
  )
}