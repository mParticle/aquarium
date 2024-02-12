import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import { Icon } from 'src/components'
import type { IMenuProps } from 'src/components'
import { Button } from 'src/components'
import { Flex } from 'src/components'
import { faPlus } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'

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

  /* todo: implement loading state / tooltip */
}

export function NavigationCreate(props: INavigationCreateProps) {
  const items: IMenuProps['items'] = [
    {
      key: 'NavigationCreate',
      popupClassName: 'globalNavigation__createPopup',
      icon: (
        <Center className="globalNavigation__createButtonWrapper" style={{ pointerEvents: 'none' }}>
          <Button className="globalNavigation__createButton" icon={<Icon icon={faPlus} />} />
        </Center>
      ),

      children: props.createItems.map(item => {
        if (item.type === 'group') return { label: item.label, key: item.label, type: item.type }

        return {
          key: item.description,
          className: 'globalNavigation__createItem',
          onClick: item.onClick,
          label: (
            <Flex vertical={true} gap="middle" justify="center">
              {/* todo: implement isPaywalled */}

              <span className="createItem__title">{item.title}</span>
              <span className="createItem__description">{item.description}</span>
            </Flex>
          ),
        }
      }),
    },
  ]

  return (
    <Center>
      <Menu
        className=" globalNavigation__item globalNavigation__item--createNew"
        items={items}
        expandIcon={null}
        defaultOpenKeys={['NavigationCreate']} /* testing only */
      />
    </Center>
  )
}