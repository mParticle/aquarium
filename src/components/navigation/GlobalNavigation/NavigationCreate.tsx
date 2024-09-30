import { Icon, type MenuItemGroupType, type MenuItemType } from 'src/components'
import { Center } from 'src/components'
import { Menu } from 'src/components'
import type { IMenuProps } from 'src/components'
import { Button } from 'src/components'
import { Flex } from 'src/components'
import { Tooltip } from 'src/components'
import { Spin } from 'src/components'
import { type IMenuInfo } from 'src/components'

export interface INavigationCreateProps {
  createItems: Array<INavigationCreateItem | INavigationCreateGroup>
}

export interface INavigationCreateGroup extends Omit<MenuItemGroupType, 'key'> {
  label: string
  type: 'group'
}

export interface INavigationCreateItem extends Omit<MenuItemType, 'key'> {
  disabled?: boolean
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
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (isDisabled || isLocked || item.isLoading) {
      itemClassName += ' navigationCreate__item--disabled'
    }
    return {
      key: item.description,
      className: itemClassName,
      disabled: item.disabled,
      onClick: (menuInfo: IMenuInfo): void => {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        if (item.disabled || item.isLoading) return
        item.onClick?.()
        menuInfo.domEvent.stopPropagation()
        menuInfo.domEvent.preventDefault()
      },
      label: (
        <Tooltip title={item.tooltip}>
          <Flex vertical gap="middle" justify="center">
            <span className="navigationCreate__itemTitle">
              {item.title}
              {item.isLoading && <Spin className="navigationCreate__itemLoading" size="small" />}
              {isLocked && <Icon name="paywall" size="xs" />}
            </span>

            <span className="navigationCreate__itemDescription">{item.description}</span>
          </Flex>
        </Tooltip>
      ),
    }
  })

  const items: IMenuProps['items'] = [
    {
      key: 'NavigationCreate',
      popupClassName: 'globalNavigation__popup globalNavigation__popup--navigationCreate',
      icon: (
        <Center className="navigationCreate__popupButtonWrapper" style={{ pointerEvents: 'none' }}>
          <Button className="navigationCreate__popupButton" icon={<Icon name="add" size="lg" />} />
        </Center>
      ),

      children: menuItems,
    },
  ]

  return (
    <Center>
      <Menu className="globalNavigation__item globalNavigation__item--createNew" items={items} expandIcon={null} />
    </Center>
  )
}
