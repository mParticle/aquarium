import { Badge as AntBadge } from 'antd'
import { type BadgeProps as AntBadgeProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IBadgeProps extends AntBadgeProps {}

export const Badge = (props: IBadgeProps) => {
  return (
    <ConfigProvider>
      <AntBadge {...props} />
    </ConfigProvider>
  )
}

Badge.Ribbon = AntBadge.Ribbon
