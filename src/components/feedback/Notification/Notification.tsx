import { notification } from 'antd'
import { type NotificationArgsProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface INotificationProps extends NotificationArgsProps {
  children: React.ReactNode
}

export const Notification = (props: INotificationProps) => {
  const [notificationApi, contextHolder] = notification.useNotification()

  const open = (): void => {
    notificationApi.open({ ...props })
  }

  return (
    <ConfigProvider>
      {contextHolder}
      <span onClick={open}>{props.children}</span>
    </ConfigProvider>
  )
}
