import { Conversations as AntConversations, type ConversationsProps as AntConversationsProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

export type IConversationsProps = AntConversationsProps

export const Conversations = (props: IConversationsProps) => {
  return (
    <ConfigProvider>
      <AntConversations {...props} />
    </ConfigProvider>
  )
}
