import { type ReactNode } from 'react'
import { DuoIcons, type Icons, LightIcons } from 'src/constants/Icons'
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

export interface IBaseIconProps {
  name: keyof Icons // : IIconProps['name']
  color?: IconColor
  size?: IconSize
  type: 'duo' | 'light'
}

export interface ILightIconProps extends IBaseIconProps {
  name: keyof typeof LightIcons
  type: 'light'
}

export interface IDuoIconProps extends IBaseIconProps {
  name: keyof typeof DuoIcons
  type: 'duo'
}

export type IIconProps = ILightIconProps | IDuoIconProps

export const Icon = (props: IIconProps) => {
  let IconName: any

  if (props.type === 'duo') {
    props.name = props.name as keyof typeof DuoIcons
    IconName = DuoIcons[props.name] as unknown as ReactNode
  }

  if (props.type === 'light') {
    props.name = props.name as keyof typeof LightIcons
    IconName = LightIcons[props.name] as unknown as ReactNode
  }

  const className = `icon-size-${props.size} icon-color-${props.color}`
  const iconId = `icon-${props.name}`

  return <IconName className={className} data-test={iconId} />
}

Icon.defaultProps = {
  color: 'default',
  size: 'lg',
  type: 'light',
} satisfies Partial<IIconProps>