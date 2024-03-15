import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { Tooltip } from 'src/components'
import { type ReactNode } from 'react'

export interface INavigationItemProps {
  type: 'link' | 'menu'
  icon: ReactNode
  label: string
  hideLabel?: boolean
  items? // menu only
  isActive?: boolean
  onClick?: (e) => void // link only
}

export function NavigationItem(props: INavigationItemProps) {
  return (
    <>
      {props.type === 'link' && (
        <Tooltip title={props.hideLabel ? props.label : undefined} placement="right">
          <NavigationIcon
            className={`globalNavigation__item globalNavigation__link ${
              props.isActive ? ' globalNavigation__item--active' : ''
            }`}
            icon={props.icon}
            label={props.label}
            onClick={props.onClick}
            hideLabel={props.hideLabel}
          />
        </Tooltip>
      )}

      {props.type === 'menu' && <NavigationList items={props.items} />}
    </>
  )
}
