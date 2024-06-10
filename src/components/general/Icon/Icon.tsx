import { DuoIcons, LightIcons } from 'src/constants/Icons'
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
  name//: if type==='duo' then name is keyof typeof DuoIcons, else if type==='light' then name is keyof typeof LightIcons
  color?: IconColor
  size?: IconSize
  type: 'duo' | 'light'
}

export const Icon = (props: IIconProps) => {
  let IconName: IIconProps['name']

  if (props.type === 'duo') {
    IconName = DuoIcons[props.name]
  } else if (props.type === 'light') {
    IconName = LightIcons[props.name]
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