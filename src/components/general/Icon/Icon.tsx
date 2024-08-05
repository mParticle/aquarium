import React from 'react'
import { Icons } from 'src/constants/Icons'
import { IconOptions, IconVariant, IconNames } from 'src/types/iconTypes'
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

export interface IIconProps {
  name: IconNames
  color?: IconColor
  size?: IconSize
  variant?: IconVariant
}

export const Icon: React.FC<IIconProps> = ({ name, color = 'default', size = 'lg', variant }) => {
  const iconVariants = Icons[name] as IconOptions

  if (iconVariants?.deprecated) {
    console.warn(`Icon with name "${name}" is deprecated. Please use "predictions" instead.`)
  }

  const iconVariant = variant || iconVariants.default
  const IconComponent = iconVariants[iconVariant] || iconVariants[iconVariants.default]

  if (!IconComponent) {
    console.error(`Icon with name "${name}" and variant "${iconVariant}" not found.`)
    return null
  }

  const className = `icon-size-${size} icon-color-${color}`
  const iconId = `icon-${name}-${iconVariant}`

  return <IconComponent className={className} data-test={iconId} />
}
