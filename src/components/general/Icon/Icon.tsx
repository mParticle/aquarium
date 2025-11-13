import React from 'react'
import { Icons } from 'src/constants/Icons'
import type { IconOptions, IconVariant, IconNames } from 'src/types/icons'
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
  | 'inherit'

export interface IIconProps {
  name: IconNames
  color?: IconColor
  size?: IconSize
  variant?: IconVariant
}

export const Icon: React.FC<IIconProps> = ({ name, color = 'default', size = 'lg', variant }) => {
  const icon: IconOptions = Icons[name]

  if (icon?.deprecated) {
    if (typeof icon.deprecated === 'string') {
      console.warn(`Icon with name "${name}" is deprecated. Please use "${icon.deprecated}" instead.`)
    } else {
      console.warn(`Icon with name "${name}" is deprecated and should not be used.`)
    }
  }

  const iconVariant = variant ?? icon.default
  const IconComponent = icon[iconVariant] ?? icon[icon.default]

  if (!IconComponent) {
    console.error(`Icon with name "${name}" and variant "${iconVariant}" not found.`)
    return null
  }

  const className = `icon-size-${size} icon-color-${color}`
  const iconId = `icon-${name}-${iconVariant}`

  return <IconComponent className={className} data-testid={iconId} />
}
