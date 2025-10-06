import React from 'react'
import { WarningFilled } from '@ant-design/icons'
import {
  ColorWarning,
  MpIconSizeXs,
  MpIconSizeSm,
  MpIconSizeMd,
  MpIconSizeLg,
  MpIconSizeXl,
  MpIconSizeXxl,
  MpIconSizeXxxl,
  MpIconSizeXxxxl,
} from 'src/styles/style'

type IconSize = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IWarningStateIconProps {
  size?: IconSize
  className?: string
  style?: React.CSSProperties
}

// Size mapping using imported style constants
const sizeMap: Record<IconSize, string> = {
  xxxxl: MpIconSizeXxxxl,
  xxxl: MpIconSizeXxxl,
  xxl: MpIconSizeXxl,
  xl: MpIconSizeXl,
  lg: MpIconSizeLg,
  md: MpIconSizeMd,
  sm: MpIconSizeSm,
  xs: MpIconSizeXs,
}

export const WarningStateIcon: React.FC<IWarningStateIconProps> = ({ size = 'lg', className = '', style }) => {
  const iconSize = sizeMap[size]

  return (
    <WarningFilled
      className={className}
      style={{
        fontSize: iconSize,
        color: ColorWarning,
        ...style,
      }}
      data-testid={`warning-state-icon-${size}`}
    />
  )
}
