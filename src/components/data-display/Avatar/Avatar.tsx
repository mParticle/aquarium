import { Avatar as AntAvatar, Flex, Typography } from 'antd'
import { type AvatarProps as AntAvatarProps } from 'antd'
import { ConfigProvider } from 'src/components'
import './Avatar.css'
import { formatString, validString } from 'src/utils/utils'

export interface IAvatarProps extends AntAvatarProps {
  subtitleOptions?: {
    text?: string
    /** Length of the subtitle to display before cutoff with ellipses */
    limit?: number
  }
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
