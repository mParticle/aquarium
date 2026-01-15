import { Flex } from 'src/components/layout/Flex/Flex'
import { Icon, type IIconProps } from 'src/components/general/Icon/Icon'
import { Tooltip, type ITooltipProps } from './Tooltip'
import type { IconNames } from 'src/types/icons'
import type { ReactNode } from 'react'

export interface IIconWithTooltipProps extends Omit<ITooltipProps, 'title'> {
  title: ReactNode
  iconName?: IconNames
  iconProps?: Omit<IIconProps, 'name'>
}

export const IconWithTooltip = ({ title, iconName = 'help', iconProps, ...rest }: IIconWithTooltipProps) => {
  const iconPropsWithDefaults: IIconProps = {
    name: iconName,
    size: 'sm',
    color: 'default',
    ...iconProps,
  }

  return (
    <Tooltip title={title} {...rest}>
      <Flex align="center" justify="center">
        <Icon {...iconPropsWithDefaults} />
      </Flex>
    </Tooltip>
  )
}
