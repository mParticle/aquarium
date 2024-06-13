import { Avatar as AntAvatar } from 'antd'
import { type AvatarProps as AntAvatarProps } from 'antd'

export interface IAvatarProps extends AntAvatarProps {}

export const Avatar = (props: IAvatarProps) => {
  return <AntAvatar {...props} />
}

Avatar.Group = AntAvatar.Group
