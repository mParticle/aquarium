import { type ReactNode } from 'react'
import { Button, type IButtonProps, type INotificationProps, notification, Space } from 'src/components'
import { FontWeightStrong } from 'src/styles/style'

export interface ISuitesReminderOptions {
  onClose: INotificationProps['onClose']
  onRemindMeLater: IButtonProps['onClick']
  onTakeMeThere: IButtonProps['onClick']
  duration?: number
  title?: string
  message?: string
}

type OpenNotificationFn = () => void
type ContextHolder = ReactNode

export type SuitesReminderHook = [OpenNotificationFn, ContextHolder]

const DefaultReminderDuration = 4_000
const DefaultTitle = 'Join the new mParticle Experience!'
const DefaultMessage =
  'Managing your data is easier than ever with the new mParticle experience. Try out the latest features with ease, and switch back to the classic experience anytime from the side navigation.'

export const useSuitesReminder = (options: ISuitesReminderOptions): SuitesReminderHook => {
  const [api, contextHolder] = notification.useNotification()

  const {
    onClose,
    onRemindMeLater,
    onTakeMeThere,
    duration = DefaultReminderDuration,
    title = DefaultTitle,
    message = DefaultMessage,
  } = options

  const openNotification = (): void => {
    const key = `notification-${Date.now()}`
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={onRemindMeLater}>
          Remind me later
        </Button>
        <Button type="primary" size="small" onClick={onTakeMeThere}>
          Take me there
        </Button>
      </Space>
    )

    api.open({
      message: <span style={{ fontWeight: FontWeightStrong }}>{title}</span>,
      description: message,
      btn,
      key,
      onClose,
      placement: 'bottomLeft',
      duration,
    })
  }

  return [openNotification, contextHolder]
}
