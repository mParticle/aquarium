import { Badge as AntBadge } from 'antd'
import { type BadgeProps as AntBadgeProps } from 'antd'
import { ConfigProvider } from 'src/components'
import './Badge.css'

export type BadgeVariant = 'default' | 'filled'
export type BadgeSize = 'sm' | 'md' | 'lg'
export type BadgeShape = 'pill' | 'square'

export interface IBadgeProps extends Omit<AntBadgeProps, 'size'> {
  variant?: BadgeVariant
  size?: BadgeSize
  shape?: BadgeShape
}

export const Badge = ({ variant = 'default', size = 'md', shape = 'pill', ...props }: IBadgeProps) => {
  if (variant === 'filled' && props.status && props.text) {
    const classNames = [
      'mp-badge-filled',
      `mp-badge-filled--${props.status}`,
      `mp-badge-filled--${size}`,
      `mp-badge-filled--${shape}`,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <ConfigProvider>
        <span className={classNames}>
          <AntBadge {...props} />
        </span>
      </ConfigProvider>
    )
  }

  return (
    <ConfigProvider>
      <AntBadge {...props} />
    </ConfigProvider>
  )
}

Badge.Ribbon = AntBadge.Ribbon
