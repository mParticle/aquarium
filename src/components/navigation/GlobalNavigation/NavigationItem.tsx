import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { Tooltip } from 'src/components'
import { type ReactNode } from 'react'

interface INavigationIconProps {
  type: 'link' | 'menu'
  icon: ReactNode
  label: string
  hideLabel?: boolean
  items? // menu only
  onClick?: (e) => void // link only
}

export function NavigationItem(props: INavigationIconProps) {
  return (
    <>
      {props.type === 'link' && (
        <>
          <Tooltip title={props.label} placement="right">
            <NavigationIcon
              className="globalNavigation__item"
              icon={props.icon}
              label={props.label}
              onClick={props.onClick}
              hideLabel={props.hideLabel}
            />
          </Tooltip>
        </>
      )}

      {props.type === 'menu' && <NavigationList items={props.items} />}
    </>
  )
}