import { Avatar as AntAvatar } from 'antd'
import { type AvatarProps as AntAvatarProps } from 'antd'
import { ConfigProvider } from 'src/components'
import './avatar.css'

export type IAvatarProps = AntAvatarProps

export const Avatar = (props: IAvatarProps) => {
  return (
    <ConfigProvider>
      <AntAvatar {...props} />
    </ConfigProvider>
  )
}

Avatar.Group = AntAvatar.Group
