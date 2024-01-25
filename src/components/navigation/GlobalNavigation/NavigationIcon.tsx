import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from 'src/components'
import useTheme from 'antd/es/config-provider/hooks/useTheme'

interface INavigationIconProps {
  icon: IconDefinition
  onClick?: () => void
}

export function NavigationIcon(props: INavigationIconProps) {
  const theme = useTheme()
  const color = theme?.components?.Menu?.itemColor

  return <Icon icon={props.icon} color={color} className="globalNavigation__icon" onClick={props.onClick} />
}