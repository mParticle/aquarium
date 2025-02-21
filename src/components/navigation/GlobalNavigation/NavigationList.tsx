import { Flex, Icon, Menu, type MenuItemGroupType } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'
import { buildLinkFromHrefOptions } from 'src/utils/utils'
import { NavigationButtonItem } from 'src/components/navigation/GlobalNavigation/NavigationButtonItem'
import { ItemType } from "antd/lib/menu/interface";

export interface INavigationListProps {
  items: IGlobalNavigationItem[]
}

export function NavigationList(props: INavigationListProps) {
  const visibleItems = props.items.filter(item => item.visible !== false);

  return (
    <Center vertical>
      {visibleItems.map((item) =>
        <Fragment key={item.id}>
          {item.type === 'menu' ? (
            <Menu expandIcon={null} className="globalNavigation__menu" items={[generateMenuItem(item)]} />
          ) : (
            <NavigationItem {...item} isActive={isNavigationItemActive(item)} type="link" />
          )}
        </Fragment>
      )}
    </Center>
  )
}

function generateMenuChild(item: IGlobalNavigationItem): ItemType {
  // TODO: this is not correct, check with gm if we can get disabled on menu
  const isMenuDisabled = item.type === 'menu' && item?.children.every(child => child.disabled);

  const baseItem = {
    key: item.id,
    label: item.label,
  }

  switch (item.type) {
    case 'link':
      return {
        ...baseItem,
        disabled: item.disabled,
        className: `unifiedNavigation__childItem${item.disabled ? ' unifiedNavigation__childItem--disabled' : ''}`,
        label: <Flex align='center' gap={4}>
          {item.disabled && <Icon name='unlock' size='xs' />}
          {buildLinkFromHrefOptions(item.label, item.hrefOptions)}
        </Flex>
      };
    case 'button':
      return {
        ...baseItem,
        className: 'globalNavigation__buttonItem',
        label: <NavigationButtonItem withoutContainer={false} label={item.label} {...item.buttonOptions} />
      };
    case 'menu':
      return {
        ...baseItem,
        type: 'group',
        className: `unifiedNavigation__menu${isMenuDisabled ? ' unifiedNavigation__menu--disabled' : ''}`,
        label: (
          <Flex align='center' gap={4}>
            {isMenuDisabled && <Icon name='unlock' size='xs' />}
            {item.label}
          </Flex>
        ),
        children: item.children.filter(item => item.visible !== false).map(generateMenuChild)
      };
    default:
      return baseItem;
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

  const isActive = isNavigationItemActive(item);
  let itemClassName = 'globalNavigation__item unifiedNavigation__item';
  if (isActive) {
    itemClassName += ' unifiedNavigation__item--active';
  }

  return {
    icon: navigationIcon,
    popupClassName: 'globalNavigation__popup globalNavigation__popup--unifiedNav',
    className: itemClassName,
    key: item.id,
    children: item.type === 'menu' ? item.children.filter(item => item.visible !== false).map(generateMenuChild) : undefined,
  }
}

function isNavigationItemActive(item: IGlobalNavigationItem): boolean {
  if(item.type === "menu" && item.children) {
    return item.children.some(child => isNavigationItemActive(child))
  }
  else if(item.type === "link" && item.hrefOptions) {
    return window.location.href.includes(item.hrefOptions.href);
  }

  return false;
}
