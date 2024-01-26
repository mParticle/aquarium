import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'

interface INavigationIconProps {
  type: 'link' | 'menu'
  icon: IconDefinition
  label: string

  children? // menu only
  onClick?: () => void // link only
}

export function NavigationItem(props: INavigationIconProps) {
  return (
    <>
      {props.type === 'link' && <NavigationIcon {...props} />}
      {props.type === 'menu' && <NavigationList {...props} />}
    </>
  )
}