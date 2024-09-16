import { Flex, Typography, Space, Button } from 'antd'
import { Icon, type IPopoverProps, Popover } from 'src/components'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'

export type INotificationOptions = Omit<
  IPopoverProps,
  'key' | 'trigger' | 'placement' | 'arrow' | 'overlayClassName' | 'title'
>
export interface INotificationActions {
  onClose?: () => void
  onPreferencesClick?: () => void
}

export interface INotificationCenterProps {
  options?: INotificationOptions
  actions?: INotificationActions
}

export const NotificationCenterZIndex = 9999 as const

export function NotificationCenter(props: INotificationCenterProps) {
  return (
    <Popover
      trigger="click"
      placement="right"
      arrow={false}
      zIndex={props.options?.zIndex ?? NotificationCenterZIndex}
      overlayClassName="notificationCenter__popover"
      title={
        <Flex className="notificationCenter__header" justify="space-between" align="center">
          <Typography.Text strong={true}>Notifications</Typography.Text>
          <Space>
            {props.actions?.onPreferencesClick && (
              <Button
                type="text"
                shape="circle"
                icon={<Icon name="settings" />}
                onClick={props.actions?.onPreferencesClick}
              />
            )}
            {props.actions?.onClose && (
              <Button type="text" shape="circle" icon={<Icon name="remove" />} onClick={props.actions?.onClose} />
            )}
          </Space>
        </Flex>
      }
      {...props.options}>
      <div>
        <NavigationItem
          key="notificationCenter"
          type="link"
          isActive={props.options?.open}
          icon={<Icon name="notification" />}
        />
      </div>
    </Popover>
  )
}
