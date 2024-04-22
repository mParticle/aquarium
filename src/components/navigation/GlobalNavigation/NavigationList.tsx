import { Menu } from 'src/components'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'
import { buildLinkFromHrefOptions } from 'src/utils/utils'
import {NavigationButtonItem} from "src/components/navigation/GlobalNavigation/NavigationButtonItem";

export interface INavigationListProps {
  items: IGlobalNavigationItem[]
}

export function NavigationList(props: INavigationListProps) {
  return (
    <Center vertical>
      {props.items.map((item, i) => (
        <Fragment key={i}>
          {item.type === 'menu' ? (
            <Menu key={i} expandIcon={null} className="globalNavigation__menu" items={[generateMenuItem(item, i)]} /> // this is a menu item
          ) : (
            <NavigationItem {...item} type="link" key={i} /> // this is a link
          )}
        </Fragment>
      ))}
    </Center>
  )
}

function generateMenuItem(item: IGlobalNavigationItem, i: number) {
  const children: Array<IGlobalNavigationLink | MenuItemGroupType> = [
    { label: item.label, type: 'group', key: String(item.label) + '_groupTitle' },
  ]
  if (item.type === 'menu') {
    const submenuItems = item.children.map((linkItem, j) => ({
      ...linkItem,
      expandIcon: null,
      key: `${String(linkItem.label)}${j}`,
      label: buildLinkFromHrefOptions(linkItem.label, linkItem.hrefOptions),
    }));

    const regularItems = submenuItems.filter(linkItem => linkItem.type !== 'button');
    const actionItems = submenuItems.filter(linkItem => linkItem.type === 'button');

    children.push(...regularItems);

    if (actionItems.length > 0) {
      children.push({
        className:"submenu__button-item",
        key: `submenu-button-${i}`,
        label:  <NavigationButtonItem label="test" onClick={() => {
          alert("clicked")
        }} options={{withoutContainer: true}} />,
      });
    }
  }
  const navigationIcon = (
    <NavigationIcon
      icon={item.icon}
      label={item.label}
      onClick={(item as IGlobalNavigationLink).onClick}
      hideLabel={item.hideLabel}
    />
  )

  return {
    icon: navigationIcon,
    popupClassName: 'globalNavigation__popup',
    className: 'globalNavigation__item' + (item.isActive ? ' globalNavigation__item--active' : ''),
    key: `${String(item.label)}${i}`,
    children,
  }
}