import { Mentions as AntMentions, type MentionProps as AntMentionProps } from 'antd'

export interface IMentionsProps extends AntMentionProps {}

export const Mentions = (props: IMentionsProps) => {
  return <AntMentions {...props} />
}
