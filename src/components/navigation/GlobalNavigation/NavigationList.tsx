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
    const childrenWithExpandedIcons = item.children.map((child, index) => ({
      ...child,
      expandIcon: null,
      key: `${child.label}${index}`,
      label: buildLinkFromHrefOptions(child.label, child.hrefOptions),
    }));

    const regularItems = childrenWithExpandedIcons.filter(child => child.type !== 'button');
    const actionItems = childrenWithExpandedIcons.filter(child => child.type === 'button');

    children.push(...regularItems);

    actionItems.forEach((actionItem, index) => {
      console.log(actionItem,"action item")
      children.push({
        className: "submenu__button-item",
        key: `submenu-button-${index}`,
        label: (
            <NavigationButtonItem
                options={{ withoutContainer: true }}
                {...actionItem.buttonOptions}
            />
        ),
      });
    });
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