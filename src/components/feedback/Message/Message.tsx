import { message as AntMessage } from 'antd'
import { type MessageArgsProps as AntMessageArgsProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IMessageProps extends AntMessageArgsProps {
  children: React.ReactNode
}

export { AntMessage as message }

export const Message = (props: IMessageProps) => {
  const [messageApi, contextHolder] = AntMessage.useMessage()

  const open = (): void => {
    void messageApi.open({ ...props })
  }

  return (
    <ConfigProvider>
      {contextHolder}
      <span onClick={open}>{props.children}</span>
    </ConfigProvider>
  )
}

Message.useMessage = AntMessage.useMessage
Message.info = AntMessage.info
Message.error = AntMessage.error
Message.destroy = AntMessage.destroy
Message.config = AntMessage.config
Message.success = AntMessage.success
Message.open = AntMessage.open
Message.loading = AntMessage.loading
Message.warning = AntMessage.warning
