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

const deprecatedIcons = ['sparkles']

export const Icon = (props: IIconProps) => {
  const { name, color = 'default', size = 'lg', variant = 'light' } = props

  if (deprecatedIcons.includes(name)) {
    console.warn(`Icon with name "${name}" is deprecated. Please use a different icon.`)
  }

  let iconData = icons.find(icon => icon.name === name && icon.variant === variant)

  if (!iconData) {
    const fallbackVariant = variant === 'light' ? 'duo-tone' : 'light'
    iconData = icons.find(icon => icon.name === name && icon.variant === fallbackVariant)
  }

  if (!iconData) {
    console.warn(`Icon with name "${name}" not found with specified or fallback variant. Using any available variant.`)
    iconData = icons.find(icon => icon.name === name)
  }

  if (!iconData) {
    console.error(`Icon with name "${name}" not found in any variant.`)
    return null
  }

  const IconComponent = iconData.component
  const className = `icon-size-${size} icon-color-${color}`
  const iconId = `icon-${name}-${variant}`

  return <IconComponent className={className} data-test={iconId} />
}
