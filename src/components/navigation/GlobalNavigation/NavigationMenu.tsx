import { Flex, Icon, Menu, NavigationItemId } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'
import { buildLinkFromHrefOptions } from 'src/utils/utils'
import { NavigationButtonItem } from 'src/components/navigation/GlobalNavigation/NavigationButtonItem'
import { type ItemType } from 'antd/lib/menu/interface'

export interface INavigationMenuProps {
  items: IGlobalNavigationItem[]
}

export function NavigationMenu(props: INavigationMenuProps) {
  const visibleItems = props.items.filter(item => item.visible !== false)

  return (
    <Center vertical>
      {visibleItems.map(item => (
        <Fragment key={`${item.id}`}>
          {item.type === 'menu' ? (
            <Menu
              mode="vertical"
              expandIcon={null}
              className="globalNavigation__menu"
              items={[generateMenuItem(item)]}
            />
          ) : (
            <NavigationItem {...item} isActive={getItemActiveState(item)} type="link" />
          )}
        </Fragment>
      ))}
    </Center>
  )
}

function generateMenuChild(item: IGlobalNavigationItem): ItemType {
  const baseItem = {
    key: `${item.id}`,
    label: item.label,
  }

  const isActive = getItemActiveState(item)

  switch (item.type) {
    case 'link':
      return {
        ...baseItem,
        disabled: item.disabled,
        className: `globalNavigation__childItem${isActive ? ' globalNavigation__childItem--active' : ''}`,
        label: (
          <Flex align="center" gap={4}>
            {item.disabled ? (
              <>
                {item.label} <Icon name="unlock" size="xs" />
              </>
            ) : (
              buildLinkFromHrefOptions(item.label, item.hrefOptions)
            )}
          </Flex>
        ),
      }
    case 'button':
      return {
        ...baseItem,
        className: 'globalNavigation__buttonItem',
        label: <NavigationButtonItem withoutContainer={false} label={item.label} {...item.buttonOptions} />,
      }
    case 'menu':
      return {
        ...baseItem,
        type: 'submenu',
        className: `globalNavigation__submenu${isActive ? ' globalNavigation__submenu--active' : ''}`,
        label: (
          <span>
            {item.label}
            <i className="ant-menu-submenu-arrow"></i>
          </span>
        ),
        children: item.children.filter(item => item.visible !== false).map(generateMenuChild),
      }
    default:
      return baseItem
  }
}

function generateMenuItem(item: IGlobalNavigationItem): ItemType {
  const navigationIcon = (
    <NavigationIcon
      icon={item.icon}
      label={item.label}
      onClick={(item as IGlobalNavigationLink).onClick}
      hideLabel={item.hideLabel}
    />
  )

  const isActive = getItemActiveState(item)

  return {
    icon: navigationIcon,
    popupClassName: 'globalNavigation__popup globalNavigation__popup--unifiedNav',
    className: 'globalNavigation__item' + (isActive ? ' globalNavigation__item--active' : ''),
    key: `${item.id}`,
    children:
      item.type === 'menu' ? item.children.filter(item => item.visible !== false).map(generateMenuChild) : undefined,
  }
}

function getItemActiveState(item: IGlobalNavigationItem): boolean {
  return item.isActive ?? isNavigationItemActive(item)
}

function isNavigationItemActive(item: IGlobalNavigationItem): boolean {
  if ((item.type === 'menu' || item.type === 'submenu') && item.children) {
    return item.children.some(child => isNavigationItemActive(child))
  } else if (item.type === 'link' && item.hrefOptions) {
    const { href } = item.hrefOptions

    return item.id === NavigationItemId.Overview
      ? window.location.pathname === '/' || window.location.href.includes(href)
      : window.location.href.includes(href)
  }

  return false
}
