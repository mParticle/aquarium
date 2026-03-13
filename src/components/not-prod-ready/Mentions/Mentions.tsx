import { Mentions as AntMentions } from 'antd'
import type { MentionProps as AntMentionProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IMentionsProps extends AntMentionProps {}

const MentionsBase = (props: IMentionsProps) => {
  return (
    <ConfigProvider>
      <AntMentions {...props} />
    </ConfigProvider>
  )
}

type MentionsComponent = typeof MentionsBase & {
  getMentions: (...args: unknown[]) => unknown
  Option: typeof AntMentions.Option
}

export const Mentions = Object.assign(MentionsBase, {
  getMentions: AntMentions.getMentions as (...args: unknown[]) => unknown,
  Option: AntMentions.Option,
}) as MentionsComponent
