import type { Meta, StoryObj } from '@storybook/react'
import { Message } from 'src/components/feedback/Message/Message'
import { Typography } from 'src/components/general/Typography/Typography'
import { Button } from 'src/components/general/Button/Button'
import { Flex } from 'src/components/layout/Flex/Flex'
import { ColorError, SizeXs, ColorWarning, ColorSuccess, MarginXxs, ColorTextSecondary } from 'src/styles/style'
import './message-notifications.css'

const meta: Meta<typeof Message> = {
  title: 'POC/Message Notifications',
  component: Message,
}

export default meta

type Story = StoryObj<typeof Message>

export const AllStates: Story = {
  render: () => {
    const showAllMessages = () => {
      // Error
      void Message.error({
        content: (
          <Flex vertical gap={SizeXs} align="flex-start">
            <Typography.Text strong>This project has been unpublished</Typography.Text>
            <Typography.Text type="secondary">
              Removing all users has unpublished this project. Add users to republish.
            </Typography.Text>
            <Button type="link" style={{ padding: 0, height: 'auto', color: ColorError, marginTop: MarginXxs }}>
              Undo action
            </Button>
          </Flex>
        ),
        duration: 0,
        className: 'message-notification-custom message-notification-error',
      })

      // Warning
      setTimeout(() => {
        void Message.warning({
          content: (
            <Flex vertical gap={SizeXs} align="flex-start">
              <Typography.Text strong>This project has been unpublished</Typography.Text>
              <Typography.Text type="secondary">
                Removing all users has unpublished this project. Add users to republish.
              </Typography.Text>
              <Button type="link" style={{ padding: 0, height: 'auto', color: ColorWarning, marginTop: MarginXxs }}>
                Undo action
              </Button>
            </Flex>
          ),
          duration: 0,
          className: 'message-notification-custom message-notification-warning',
        })
      }, 100)

      // Success
      setTimeout(() => {
        void Message.success({
          content: (
            <Flex vertical gap={SizeXs} align="flex-start">
              <Typography.Text strong>Successfully updated profile</Typography.Text>
              <Typography.Text type="secondary">
                Your changes have been saved and your profile is live. Your team can make edits.
              </Typography.Text>
              <Flex gap={SizeXs} style={{ marginTop: MarginXxs }}>
                <Button type="link" style={{ padding: 0, height: 'auto', color: ColorTextSecondary }}>
                  Dismiss
                </Button>
                <Button type="link" style={{ padding: 0, height: 'auto', color: ColorSuccess }}>
                  View changes
                </Button>
              </Flex>
            </Flex>
          ),
          duration: 0,
          className: 'message-notification-custom message-notification-success',
        })
      }, 200)
    }

    return <Button onClick={showAllMessages}>Show All Messages</Button>
  },
}
