import { Sender as AntSender, type SenderProps as AntSenderProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

export type ISenderProps = AntSenderProps

export const Sender = (props: ISenderProps) => {
  return (
    <ConfigProvider>
      <AntSender {...props} />
    </ConfigProvider>
  )
}

Sender.Header = AntSender.Header
