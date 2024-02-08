import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import { Icon } from 'src/components'
import type { IMenuProps } from 'src/components'
import { Button } from 'src/components'
import { Flex } from 'src/components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export interface INavigationCreateProps {
  createItems: Array<INavigationCreateItem | INavigationCreateGroup>
}

export interface INavigationCreateGroup extends Omit<MenuItemGroupType, 'key'> {
  label: string
  type: 'group'
}

export interface INavigationCreateItem extends Omit<MenuItemType, 'key'> {
  title: string
  description: string
  isPaywalled?: boolean
  type?: undefined

  // isSelected: boolean // todo: implement??
  
  /* todo: we're gonna need url/showMe stuff here */
  
  /* todo: implement loading state / tooltip */
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

      children: props.createItems.map(item => {
        if (item.type === 'group') return { label: item.label, key: item.label, type: item.type }

        return {
          key: item.description,
          className: 'globalNavigation__createItem',
          onclick: item.onClick,
          label: (
            <Flex vertical={true} gap="middle" justify="center">
              {/* todo: implement isPaywalled */}

              {item.title}
              <span>{item.description}</span>
            </Flex>
          ),
        }
      }),
    },
  ]

  return (
    <Center>
      <Menu
        className="globalNavigation__menu globalNavigation__item"
        items={items}
        expandIcon={null}
        // defaultOpenKeys={['NavigationCreate']} /* testing only */
      />
    </Center>
  )
}