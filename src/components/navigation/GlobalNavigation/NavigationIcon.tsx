import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'src/components'
import { Center } from 'src/components'

interface INavigationIconProps {
  className?: string
  icon: IconDefinition
  label: string
  onClick?: (e) => void
}

export function NavigationIcon(props: INavigationIconProps) {
  return (
    <Center vertical className={'globalNavigation__icon ' + (props.className ?? '')} onClick={props.onClick}>
      <Icon icon={props.icon} />
      <span className="globalNavigation__iconLabel">{props.label}</span>
    </Center>
  )
}