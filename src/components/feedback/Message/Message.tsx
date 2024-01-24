import { message } from 'antd'
import { type MessageArgsProps as AntMessageArgsProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IMessageProps extends AntMessageArgsProps {
  children: React.ReactNode
}

export const Message = (props: IMessageProps) => {
  const [messageApi, contextHolder] = message.useMessage()

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
