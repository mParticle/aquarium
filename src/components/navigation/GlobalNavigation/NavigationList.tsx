import { Menu } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import React from 'react'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'

interface INavigationListProps {
  items: Array<IGlobalNavigationManagement | IGlobalNavigationTool>
}

export function NavigationList(props: INavigationListProps) {
  function generateMenuItem(item: IGlobalNavigationManagement | IGlobalNavigationTool, i: number) {
    const children: Array<MenuItemType | MenuItemGroupType> = item.children.map((child, j) => ({
      key: `${child.label}${j}`,
      ...child,
    }))

    children.unshift({ label: item.label, type: 'group', key: item.label + '_groupTitle' })

    return {
      label: item.label,
      key: `${item.label}${i}`,
      icon: <NavigationIcon icon={item.icon} />,
      className: 'globalNavigation__item',
      children,
    }
  }

  return (
    <>
      {props.items.map((item, i) => (
        <Menu items={[generateMenuItem(item, i)]} key={i} />
      ))}
    </>
  )
}