import { message as AntMessage, type MessageArgsProps as AntMessageArgsProps } from 'antd'
import React, { type ReactNode } from 'react'
import { ConfigProvider } from 'src/components'
export interface IMessageProps extends AntMessageArgsProps {
  children: React.ReactNode
}

export { AntMessage as message }

export const Message = (props: IMessageProps) => {
  const [messageApi, contextHolder] = AntMessage.useMessage()

  const open = (): void => {
    const messageContextId = 'aqua-message-content' as const
    const contentWithId: ReactNode = <span data-testid={messageContextId}>{props.content}</span>

    void messageApi.open({
      ...props,
      content: contentWithId,
    })
  }

  return (
    <ConfigProvider>
      {contextHolder}
      <span onClick={open}>
        {React.cloneElement(props.children as React.ReactElement, { 'data-testid': 'aqua-message' })}
      </span>
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
