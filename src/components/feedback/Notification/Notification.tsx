import { notification as AntNotification } from 'antd'
import { type NotificationArgsProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface INotificationProps extends NotificationArgsProps {
  children: React.ReactNode
}

export { AntNotification as notification }

export const Notification = (props: INotificationProps) => {
  const [notificationApi, contextHolder] = AntNotification.useNotification()

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

Notification.useNotification = AntNotification.useNotification
Notification.warning = AntNotification.warning
Notification.open = AntNotification.open
Notification.info = AntNotification.info
Notification.config = AntNotification.config
Notification.destroy = AntNotification.destroy
Notification.error = AntNotification.error
Notification.success = AntNotification.success
