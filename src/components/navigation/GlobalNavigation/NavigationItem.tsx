import { type MouseEvent, type ReactNode } from 'react'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type IGlobalNavigationItem, Tooltip } from 'src/components'

export interface INavigationItemProps {
  type: 'link' | 'menu'
  icon?: ReactNode
  label: ReactNode
  hideLabel?: boolean
  items?: IGlobalNavigationItem[]
  isActive?: boolean
  onClick?: (e: MouseEvent) => void // link only
  href?: string // link only
}

export function NavigationItem(props: INavigationItemProps) {
  if (props.type === 'menu' && props.items) {
    return <NavigationList items={props.items} />
  }

  const navigationIcon = (
    <NavigationIcon
      className={`globalNavigation__item globalNavigation__link ${
        props.isActive ? ' globalNavigation__item--active' : ''
      }`}
      icon={props.icon}
      label={props.label}
      onClick={props.onClick}
      hideLabel={props.hideLabel}
    />
  )

  const resultNavigationIcon = props.href ? <a href={props.href}>{navigationIcon}</a> : navigationIcon

  if (props.hideLabel) {
    return (
      <Tooltip title={props.label} placement="right">
        {resultNavigationIcon}
      </Tooltip>
    )
  }

  return resultNavigationIcon
}
