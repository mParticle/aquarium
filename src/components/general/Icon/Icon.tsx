import { Icons } from 'src/constants/Icons'
import './icon.css'

type IconColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'white' | 'text'
type IconSize = 'xxl' | 'xl' | 'lg' | 'md' | 'ms' | 'sm' | 'xs' | 'xxs'

export interface IIconProps {
  iconName: keyof typeof Icons
  color?: IconColor
  size?: IconSize
}

export const Icon = (props: IIconProps) => {
  const IconName = Icons[props.iconName]
  const iconId = `icon-${props.iconName.toLowerCase()}`

  let className = `${iconId} icon-size-${props.size ?? 'lg'}`

  if (props.color) {
    className += ` icon-color-${props.color.toLowerCase()}`
  }

  return <IconName className={className} data-test={iconId}/>
}