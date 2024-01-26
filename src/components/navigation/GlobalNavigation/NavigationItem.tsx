import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'

interface INavigationIconProps {
  type: 'link' | 'menu'
  icon: IconDefinition
  label: string

  items? // menu only
  onClick?: (e) => void // link only
}

export function NavigationItem(props: INavigationIconProps) {
  return (
    <>
      {props.type === 'link' && (
        <>
          <NavigationIcon
            icon={props.icon}
            label={props.label}
            onClick={props.onClick}
            className="globalNavigation__item"
          />
        </>
      )}

      {props.type === 'menu' && <NavigationList items={props.items} />}
    </>
  )
}