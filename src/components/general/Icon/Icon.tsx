import { icons } from 'src/constants/Icons'
import './icon.css'

type IconSize = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type IconColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'white'
  | 'black'
  | 'text'
  | 'strong'
  | 'brand'

export type IconVariant = 'light' | 'duo-tone'

export interface IIconProps {
  name: string
  color?: IconColor
  size?: IconSize
  variant?: IconVariant
}

export const Icon = (props: IIconProps) => {
  const { name, color = 'default', size = 'lg', variant = 'light' } = props

  let iconData = icons.find(icon => icon.name === name && icon.variant === variant)

  if (!iconData) {
    const fallbackVariant = variant === 'light' ? 'duo-tone' : 'light'
    console.log(`Icon not found with variant ${variant}. Falling back to ${fallbackVariant}`)
    iconData = icons.find(icon => icon.name === name && icon.variant === fallbackVariant)
  }

  if (!iconData) {
    return null
  }

  const IconComponent = iconData.component
  const className = `icon-size-${size} icon-color-${color}`
  const iconId = `icon-${name}-${variant}`

  return <IconComponent className={className} data-test={iconId} />
}
