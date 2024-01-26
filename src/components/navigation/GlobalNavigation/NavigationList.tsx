import { Center } from 'src/components'
import { Menu } from 'src/components'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'

export function NavigationList({ items }: { items: Array<IGlobalNavigationManagement | IGlobalNavigationTool> }) {
  return (
    <span>
      {items.map((item, i) => (
        <>
          {item.type === 'link' && (
            <Center vertical>
              {' '}
              <NavigationIcon icon={item.icon} /> {item.label}{' '}
            </Center>
          )}
          {item.type === 'menu' && <Menu items={[generateMenuItem(item, i)]} />}
        </>
      ))}
    </span>
  )
}

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