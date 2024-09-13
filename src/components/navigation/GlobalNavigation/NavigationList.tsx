import { type IMenuProps, Menu } from 'src/components'
import type { MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Center } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { Fragment } from 'react'
import { buildLinkFromHrefOptions } from 'src/utils/utils'
import { NavigationButtonItem } from 'src/components/navigation/GlobalNavigation/NavigationButtonItem'

export interface INavigationListProps {
  items: IGlobalNavigationItem[]
  disableInteractions?: boolean
  onOpenChange?: IMenuProps['onOpenChange']
}

export function NavigationList(props: INavigationListProps) {
  return (
    <Center vertical>
      {props.items.map((item, i) => (
        <Fragment key={i}>
          {item.type === 'menu' ? (
            <Menu
              mode="vertical"
              key={i}
              expandIcon={null}
              className="globalNavigation__menu"
              items={[generateMenuItem(item, i)]}
              disabled={props.disableInteractions}
              onOpenChange={props.onOpenChange}
            />
          ) : (
            <NavigationItem {...item} type="link" key={i} disabled={props.disableInteractions} />
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
    const childrenWithExpandedIcons = item.children.map(({ hrefOptions, ...child }, index) => ({
      ...child,
      key: `${String(child.label)}${index}`,
      label: buildLinkFromHrefOptions(child.label, hrefOptions),
    }))

    childrenWithExpandedIcons.forEach((child, index) => {
      if (child.type !== 'button') {
        children.push(child)
      } else {
        const buttonKey = `submenu-button-${children.filter(c => c.type === 'button').length}-${index}`

        children.push({
          className: 'globalNavigation__buttonItem',
          key: buttonKey,
          label: <NavigationButtonItem withoutContainer={false} label={child.label} {...child.buttonOptions} />,
        })
      }
    })
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
