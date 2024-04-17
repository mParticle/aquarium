import { Menu } from 'src/components'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'
import { buildLinkFromHrefOptions } from 'src/utils/utils'
import {WorkspaceSignout} from "src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSignout";

export interface INavigationListProps {
  items: IGlobalNavigationItem[]
}

export function NavigationList(props: INavigationListProps) {
  return (
    <Center vertical>
      {props.items.map((item, i) => (
        <Fragment key={i}>
          {item.type === 'menu' ? (
            <Menu key={i} expandIcon={null} className="globalNavigation__menu" items={[generateMenuItem(item, i)]} />
          ) : (
            <NavigationItem {...item} type="link" key={i} />
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
    children.push(
      ...item.children.filter(linkItem => !linkItem.onClick).map((linkItem, j) => ({
        ...linkItem,
        expandIcon: null,
        key: `${String(linkItem.label)}${j}`,
        label: buildLinkFromHrefOptions(linkItem.label, linkItem.hrefOptions),
      })),
    )
    if (item.children.some(child => child.onClick)) {
      children.push({
        key: 'submenu-button',
        label: <WorkspaceSignout signoutOptions={{ label:"test", onSignout: () => {} }} />,
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