import React from 'react'
import { Tooltip, type ITooltipProps } from 'src/components'

export interface IUnauthorizedTooltipProps extends Omit<ITooltipProps, 'title' | 'children'> {
  isAuthorized: boolean
  children: React.ReactElement
  unauthorizedMessage?: React.ReactNode
  maxWidth?: string
}

export const UnauthorizedTooltip: React.FC<IUnauthorizedTooltipProps> = ({
  isAuthorized,
  children,
  unauthorizedMessage = "You don't have permission to perform this action",
  maxWidth = '200px',
  placement = 'top',
  mouseEnterDelay = 0.2,
  mouseLeaveDelay = 0,
  styles,
  ...tooltipProps
}) => {
  const tooltipStyles = {
    container: {
      maxWidth,
      textAlign: 'center' as const,
      ...(typeof styles === 'object' && styles?.container ? styles.container : {}),
    },
  }

  return (
    <Tooltip
      title={isAuthorized ? null : unauthorizedMessage}
      placement={placement}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      styles={tooltipStyles}
      {...tooltipProps}>
      {children}
    </Tooltip>
  )
}
