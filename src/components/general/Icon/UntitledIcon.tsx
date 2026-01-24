import React from 'react'
import type { IconColor } from './Icon'
import './icon.css'

type IconSize = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IUntitledIconProps {
  name: React.ComponentType<{ className?: string; size?: number; color?: string }>
  color?: IconColor
  size?: IconSize
  className?: string
}

/**
 * Wrapper component for Untitled UI icons that provides consistent sizing and coloring
 * with the Aquarium design system.
 */
export const UntitledIcon: React.FC<IUntitledIconProps> = ({
  name: IconComponent,
  color = 'default',
  size = 'lg',
  className = '',
}) => {
  const sizeClassName = `icon-size-${size}`
  const colorClassName = `icon-color-${color}`
  const combinedClassName = `${sizeClassName} ${colorClassName} ${className}`.trim()

  return <IconComponent className={combinedClassName} />
}
