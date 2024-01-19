import { Badge as AntBadge, type BadgeProps as AntBadgeProps } from 'antd'

export interface IBadgeProps extends AntBadgeProps {}

export const Badge = (props: IBadgeProps) => {
  return <AntBadge {...props} />
}
