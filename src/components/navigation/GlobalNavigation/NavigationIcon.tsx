import { Center } from 'src/components'
import { type ReactNode } from 'react'

interface INavigationIconProps {
  className?: string
  icon: ReactNode
  label: ReactNode
  hideLabel?: boolean
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}

const noop = () => {}

export function NavigationIcon(props: INavigationIconProps) {
  return (
    <Center
      vertical
      className={'globalNavigation__icon ' + (props.className ?? '')}
      onClick={!props.disabled ? props.onClick : noop}>
      {props.icon}
      {!props.hideLabel && <span className="globalNavigation__iconLabel">{props.label}</span>}
    </Center>
  )
}
