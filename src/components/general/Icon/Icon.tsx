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
  /** Icon name (string for local SVG icons, component for Untitled UI icons) */
  name: IconNames | React.ComponentType<{ className?: string; size?: number; color?: string }>
  color?: IconColor
  size?: IconSize
  variant?: IconVariant
  className?: string
}

export const Icon: React.FC<IIconProps> = ({
  name,
  color = 'default',
  size = 'lg',
  variant,
  className: customClassName = '',
}) => {
  // Untitled UI icons
  if (typeof name !== 'string') {
    const IconComponent = name
    const sizeClassName = `icon-size-${size}`
    const colorClassName = `icon-color-${color}`
    const className = `${sizeClassName} ${colorClassName} ${customClassName}`.trim()

    // Untitled UI icons also accept a 'color' prop directly
    // Using 'currentColor' makes them inherit from the CSS class
    return <IconComponent className={className} color="currentColor" />
  }

  // Local SVG icons
  const iconData: IconOptions = Icons[name]

  if (iconData?.deprecated) {
    if (typeof iconData.deprecated === 'string') {
      console.warn(`Icon with name "${name}" is deprecated. Please use "${iconData.deprecated}" instead.`)
    } else {
      console.warn(`Icon with name "${name}" is deprecated and should not be used.`)
    }
  }

  const iconVariant = variant ?? iconData.default
  const IconComponent = iconData[iconVariant] ?? iconData[iconData.default]

  if (!IconComponent) {
    console.error(`Icon with name "${name}" and variant "${iconVariant}" not found.`)
    return null
  }

  const className = `icon-size-${size} icon-color-${color} ${customClassName}`.trim()
  const iconId = `icon-${name}-${iconVariant}`

  return <IconComponent className={className} data-testid={iconId} />
}
