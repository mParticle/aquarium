import React from 'react'
import { CheckCircleFilled } from '@ant-design/icons'
import {
  ColorSuccess,
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

export interface ISuccessStateIconProps {
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

export const SuccessStateIcon: React.FC<ISuccessStateIconProps> = ({ size = 'lg', className = '', style }) => {
  const iconSize = sizeMap[size]

  return (
    <CheckCircleFilled
      className={className}
      style={{
        fontSize: iconSize,
        color: ColorSuccess,
        ...style,
      }}
      data-testid={`success-state-icon-${size}`}
    />
  )
}
