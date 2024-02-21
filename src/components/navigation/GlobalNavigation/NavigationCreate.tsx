import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import type { IMenuProps } from 'src/components'
import { Button } from 'src/components'
import { Flex } from 'src/components'
import { Tooltip } from 'src/components'
import { Spin } from 'src/components'
import MpLogo from 'src/assets/svg/mpLogo.svg?react'
import Lock from 'src/assets/svg/lock.svg?react'

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
  type?: undefined
  isLoading?: boolean
  isLocked?: boolean
  tooltip?: string

  onClick?: () => void
}

export function NavigationCreate(props: INavigationCreateProps) {
  const menuItems = props.createItems.map(item => {
    if (item.type === 'group') return { label: item.label, key: item.label, type: item.type }

    const isLocked = item.isLocked
    const isDisabled = item.disabled

    let itemClassName = 'navigationCreate__item'
    if (isDisabled ?? isLocked) {
      itemClassName += ' navigationCreate__item--disabled'
    }
    return {
      key: item.description,
      className: itemClassName,
      disabled: item.disabled,
      onClick: menuInfo => {
        if (item.disabled) return
        item.onClick?.()
        menuInfo.domEvent.stopPropagation()
        menuInfo.domEvent.preventDefault()
      },
      label: (
        <Tooltip title={item.tooltip}>
          <Flex vertical={true} gap="middle" justify="center">
            <span className="navigationCreate__itemTitle">
              {item.title}
              {item.isLoading && <Spin className="navigationCreate__itemLoading" size="small" />}
              {isLocked && <Lock className="navigationCreate__lockIcon"/>}
            </span>

            <span className="navigationCreate__itemDescription">{item.description}</span>
          </Flex>
        </Tooltip>
      ),
    }
  });
  
  const items: IMenuProps['items'] = [
    {
      key: 'NavigationCreate',
      popupClassName: 'globalNavigation__popup globalNavigation__popup--navigationCreate',
      icon: (
        <Center className="navigationCreate__popupButtonWrapper" style={{ pointerEvents: 'none' }}>
          <Button className="navigationCreate__popupButton" icon={<MpLogo className="navigationCreate__popupIcon"/>} />
        </Center>
      ),

      children: menuItems,
    },
  ]

  return (
    <Center>
      <Menu
        className="globalNavigation__item globalNavigation__item--createNew"
        items={items}
        expandIcon={null}
        // defaultOpenKeys={['NavigationCreate']} /* testing only */
      />
    </Center>
  )
}