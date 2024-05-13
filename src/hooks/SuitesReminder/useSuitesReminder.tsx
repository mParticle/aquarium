import 'src/styles/_variables.css'
import './suites-reminder.css'

import { type ReactNode } from 'react'
import { Button, notification, Space } from 'src/components'
import { FontWeightStrong } from 'src/styles/style'

export interface ISuitesReminderOptions {
  onClose: () => void
  onRemindMeLater: () => void
  onTakeMeThere: () => void
  duration?: number
  title?: string
  message?: string
}

type OpenNotificationFn = () => void
type ContextHolder = ReactNode

export type SuitesReminderHook = [OpenNotificationFn, ContextHolder]

const DefaultReminderDuration = 4.5 as const // same as antd notification default duration
const DefaultTitle = 'Join the new mParticle Experience!' as const
const DefaultMessage =
  'Managing your data is easier than ever with the new mParticle experience. Try out the latest features with ease, and switch back to the classic experience anytime from the side navigation.' as const

export const useSuitesReminder = (options: ISuitesReminderOptions): SuitesReminderHook => {
  const {
    onClose,
    onRemindMeLater,
    onTakeMeThere,
    duration = DefaultReminderDuration,
    title = DefaultTitle,
    message = DefaultMessage,
  } = options

  const [notificationApi, contextHolder] = notification.useNotification({
    prefixCls: 'globalNavigation__suitesReminder',
    duration,
    placement: 'bottomLeft',
  })

  const openNotification = (): void => {
    const key = `notification-${Date.now()}`
    const btn = (
      <Space>
        <Button
          type="link"
          size="small"
          onClick={_event => {
            onRemindMeLater()
            notificationApi.destroy(key)
          }}>
          Remind me later
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={_event => {
            onTakeMeThere()
            notificationApi.destroy(key)
          }}>
          Take me there
        </Button>
      </Space>
    )

    notificationApi.open({
      message: <span style={{ fontWeight: FontWeightStrong }}>{title}</span>,
      description: message,
      btn,
      key,
      onClose,
    })
  }

  return [openNotification, contextHolder]
}
