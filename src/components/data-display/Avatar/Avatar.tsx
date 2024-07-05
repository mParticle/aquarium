import { Avatar as AntAvatar, Flex, Typography } from 'antd'
import { type AvatarProps as AntAvatarProps } from 'antd'
import { ConfigProvider } from 'src/components'
import './Avatar.css'

export interface IAvatarProps extends AntAvatarProps {
  subtitleOptions?: {
    text?: string
    /** Length of the subtitle to display before cutoff with ellipses */
    limit?: number
  }
}

export const validString = (str?: string) => {
  return (str?.trim?.()?.length ?? 0) > 0
}

export const formatString = (str?: string, limit?: number) => {
  const _str = str?.trim() ?? ''
  if (limit !== undefined && _str.length > limit) {
    return `${_str.substring(0, limit)}...`
  }
  return _str
}

export const Avatar = ({ className, subtitleOptions, ...props }: IAvatarProps) => {
  return (
    <ConfigProvider>
      <div className="avatar__container">
        <Flex vertical align="center" justify="center">
          <AntAvatar {...props} className={`${className} avatar__avatar`} />
          {validString(subtitleOptions?.text) && (
            <Typography.Text>{formatString(subtitleOptions?.text, subtitleOptions?.limit)}</Typography.Text>
          )}
        </Flex>
      </div>
    </ConfigProvider>
  )
}

Avatar.Group = AntAvatar.Group
