import { type MouseEvent, type ReactNode } from 'react'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type IGlobalNavigationItem, Tooltip } from 'src/components'
import { buildLinkFromHrefOptions, type HrefOptions } from 'src/utils/utils'

export interface INavigationItemProps {
  type: 'link' | 'menu'
  icon?: ReactNode
  label?: ReactNode
  hideLabel?: boolean
  items?: IGlobalNavigationItem[]
  isActive?: boolean
  onClick?: (e: MouseEvent) => void // link only
  hrefOptions?: HrefOptions // link only
  disabled?: boolean
}

const noop = () => {}

export function NavigationItem(props: INavigationItemProps) {
  if (props.type === 'menu' && props.items) {
    return <NavigationList items={props.items} disableInteractions={props.disabled} />
  }

  const navigationIcon = (
    <NavigationIcon
      className={`globalNavigation__item globalNavigation__link ${
        props.isActive ? ' globalNavigation__item--active' : ''
      }`}
      icon={props.icon}
      label={props.label}
      onClick={!props.disabled ? props.onClick : noop}
      hideLabel={props.hideLabel}
      disabled={props.disabled}
    />
  )

  const resultNavigationIcon = props.hrefOptions
    ? buildLinkFromHrefOptions(navigationIcon, props.hrefOptions)
    : navigationIcon

  if (props.hideLabel) {
    return (
      <Tooltip title={props.label} placement="right">
        {resultNavigationIcon}
      </Tooltip>
    )
  }

  return resultNavigationIcon
}
