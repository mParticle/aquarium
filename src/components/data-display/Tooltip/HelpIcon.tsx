import { Flex } from 'src/components/layout/Flex/Flex'
import { Icon, type IconColor } from 'src/components/general/Icon/Icon'
import { Tooltip, type ITooltipProps } from './Tooltip'
import { RoktHelpCircle } from 'src/components/icons'
import type { ReactNode } from 'react'

type IconSize = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IHelpIconProps extends Omit<ITooltipProps, 'title' | 'children'> {
  /** Tooltip content displayed on hover */
  title: ReactNode
  /** Icon size */
  size?: IconSize
  /** Icon color */
  color?: IconColor
  className?: string
}

export const HelpIcon = ({ title, size = 'sm', color = 'default', className, ...tooltipProps }: IHelpIconProps) => {
  return (
    <Tooltip title={title} {...tooltipProps}>
      <Flex align="center" justify="center" className={className}>
        <Icon name={RoktHelpCircle} size={size} color={color} />
      </Flex>
    </Tooltip>
  )
}
