import { Sender as AntSender, type SenderProps as AntSenderProps } from '@ant-design/x'
import { type ComponentProps } from 'react'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export type ISenderProps = AntSenderProps

export const Sender = (props: ISenderProps) => {
  return (
    <ConfigProvider>
      <AntSender {...props} />
    </ConfigProvider>
  )
}

const SenderHeader = (props: ComponentProps<typeof AntSender.Header>) => {
  return (
    <ConfigProvider>
      <AntSender.Header {...props} />
    </ConfigProvider>
  )
}

Sender.Header = SenderHeader
