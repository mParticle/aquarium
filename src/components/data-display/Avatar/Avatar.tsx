import { Avatar as AntAvatar, Flex, Typography } from 'antd'
import { type AvatarProps as AntAvatarProps } from 'antd'
import { ConfigProvider } from 'src/components'
import './Avatar.css'

const SUBTITLE_LIMIT = 7

export interface IAvatarProps extends AntAvatarProps {
  subtitle?: string
}

export const validString = (str?: string) => {
  return (str?.trim?.()?.length ?? 0) > 0
}

export const formatString = (str?: string) => {
  const _str = str?.trim() ?? ''
  if (_str.length > SUBTITLE_LIMIT) {
    return `${_str.substring(0, SUBTITLE_LIMIT)}...`
  }
  return _str
}

export const Avatar = ({ className, subtitle, ...props }: IAvatarProps) => {
  return (
    <ConfigProvider>
      <div className="avatar__container">
        <Flex vertical align="center" justify="center">
          <AntAvatar {...props} className={`${className} avatar__avatar`} />
          {validString(subtitle) && <Typography.Text>{formatString(subtitle)}</Typography.Text>}
        </Flex>
      </div>
    </ConfigProvider>
  )
}

Avatar.Group = AntAvatar.Group
