import { Menu } from 'src/components'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

export interface INavigationListProps {
  items: Array<IGlobalNavigationManagement | IGlobalNavigationTool>
}

export function NavigationList(props: INavigationListProps) {
  return (
    <Center vertical>
      {props.items.map((item, i) => (
        <>
          {item.type === 'link' && <NavigationItem {...item} key={i} />}
          {item.type === 'menu' && (
            <Menu
              key={i}
              expandIcon={item.isNestedMenu ? true : null}
              items={[generateMenuItem(item, i)]}
              className="globalNavigation__menu"
            />
          )}
        </>
      ))}
    </Center>
  )
}

function generateMenuItem(item: IGlobalNavigationManagement | IGlobalNavigationTool, i: number) {
  let children: Array<MenuItemType | MenuItemGroupType> | undefined

  if (item.type === 'menu' && item.children) {
    children = item.children.map((child, j) => ({
      expandIcon: child.isNestedMenu ? true : null,
      key: `${String(child.label)}${j}`,
      ...child,
    }))

    children.unshift({ label: item.label, type: 'group', key: item.label + '_groupTitle' })
  }

  return {
    icon: (
      <NavigationIcon
        icon={item.icon}
        label={item.label}
        onClick={(item as IGlobalNavigationLink).onClick}
        hideLabel={item.hideLabel}
      />
    ),
    popupClassName: 'globalNavigation__popup',
    className: 'globalNavigation__item' + (item.isActive ? ' globalNavigation__item--active' : ''),
    key: `${item.label}${i}`,
    children,
  }
}