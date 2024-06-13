import { Mentions as AntMentions } from 'antd'
import { type MentionProps as AntMentionProps } from 'antd'

export interface IMentionsProps extends AntMentionProps {}

export const Mentions = (props: IMentionsProps) => {
  return <AntMentions {...props} />
}

Mentions.getMentions = AntMentions.getMentions
Mentions.Option = AntMentions.Option
