import { Menu } from 'src/components'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'

export interface INavigationListProps {
  items: Array<IGlobalNavigationManagement | IGlobalNavigationTool>
}

export function NavigationList(props: INavigationListProps) {
  return (
    <Center vertical>
      {props.items.map((item, i) => (
        <Fragment key={i}>
          {item.type === 'menu' ? (
            <Menu
              key={i}
              expandIcon={item.isNestedMenu ?? null}
              className="globalNavigation__menu"
              items={[generateMenuItem(item, i)]}
            />
          ) : (
            <NavigationItem {...item} type="link" key={i} />
          )}
        </Fragment>
      ))}
    </Center>
  )
}

function generateMenuItem(item: IGlobalNavigationManagement | IGlobalNavigationTool, i: number) {
  const children: Array<IGlobalNavigationLink | MenuItemGroupType> = [
    { label: item.label, type: 'group', key: String(item.label) + '_groupTitle' },
  ]

  if (item.type === 'menu') {
    children.push(
      ...item.children.map((linkItem, j) => ({
        ...linkItem,
        expandIcon: linkItem.isNestedMenu ? true : null,
        key: `${String(linkItem.label)}${j}`,
        label: <a href={linkItem.href}>{linkItem.label}</a>,
      })),
    )
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
