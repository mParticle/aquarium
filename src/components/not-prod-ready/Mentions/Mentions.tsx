import React from 'react'
import { Mentions as AntMentions } from 'antd'
import { type MentionProps as AntMentionProps } from 'antd'
import { ConfigProvider } from 'src/components'

export type IMentionsProps = AntMentionProps

interface MentionsComponent extends React.FC<IMentionsProps> {
  getMentions: (typeof AntMentions)['getMentions']
  Option: (typeof AntMentions)['Option']
}

export const Mentions: MentionsComponent = Object.assign(
  (props: IMentionsProps) => {
    return (
      <ConfigProvider>
        <AntMentions {...props} />
      </ConfigProvider>
    )
  },
  {
    getMentions: AntMentions.getMentions,
    Option: AntMentions.Option,
  },
)
