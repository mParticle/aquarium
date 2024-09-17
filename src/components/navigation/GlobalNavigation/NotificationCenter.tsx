import { Flex, Typography, Space, Button } from 'antd'
import { Icon, type IPopoverProps, Popover } from 'src/components'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'

export interface INotificationCenterProps
  extends Omit<IPopoverProps, 'key' | 'trigger' | 'placement' | 'arrow' | 'overlayClassName' | 'title'> {
  onClose?: () => void
  onPreferencesClick?: () => void
}

export const NotificationCenterZIndex = 9999

export function NotificationCenter({ zIndex, onClose, onPreferencesClick, ...props }: INotificationCenterProps) {
  return (
    <Popover
      trigger="click"
      placement="right"
      arrow={false}
      zIndex={zIndex ?? NotificationCenterZIndex}
      overlayClassName="notificationCenter__popover"
      title={
        <Flex className="notificationCenter__header" justify="space-between" align="center">
          <Typography.Text strong>Notifications</Typography.Text>
          <Space>
            {onPreferencesClick && (
              <Button type="text" shape="circle" icon={<Icon name="settings" />} onClick={onPreferencesClick} />
            )}
            {onClose && <Button type="text" shape="circle" icon={<Icon name="remove" />} onClick={onClose} />}
          </Space>
        </Flex>
      }
      {...props}>
      <div>
        <NavigationItem
          key="notificationCenter"
          type="link"
          isActive={props?.open}
          icon={<Icon name="notification" />}
        />
      </div>
    </Popover>
  )
}
