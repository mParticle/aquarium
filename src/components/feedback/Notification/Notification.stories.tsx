import { type Meta, type StoryObj } from '@storybook/react'
import { Notification, notification } from 'src/components/feedback/Notification/Notification'
import { Button } from 'src/components/general/Button/Button'
import { Alert } from 'src/components/feedback/Alert/Alert'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Typography } from 'src/components/general/Typography/Typography'
import { ColorWhite, BorderRadiusLg, SizeXs } from 'src/styles/style'

const meta: Meta<typeof Notification> = {
  title: 'Components/Feedback/Notification',
  component: Notification,

  args: {
    type: 'info',
    children: <Button type="primary">Show Notification</Button>,
    message: 'Message',
    description: 'Description goes here',
    duration: 0,
    placement: 'topRight',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Notification>

export const StorybookNote: Story = {
  render: () => {
    return (
      <div
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)',
          borderRadius: BorderRadiusLg,
          width: '100%',
        }}>
        <Alert
          message={
            <Flex align="center" gap={SizeXs}>
              <Typography.Text size="xl">💡</Typography.Text>
              <Typography.Text size="base">
                Use a{' '}
                <Typography.Link href="?path=/docs/components-feedback-message--docs" color="ColorText">
                  Message
                </Typography.Link>{' '}
                for brief, auto-dismissing feedback. Use an{' '}
                <Typography.Link href="?path=/docs/components-feedback-alert--docs" color="ColorText">
                  Alert
                </Typography.Link>{' '}
                for persistent inline messages that are part of the page.
              </Typography.Text>
            </Flex>
          }
          showIcon={false}
          type="info"
          style={{
            backgroundColor: ColorWhite,
            border: 'none',
            borderRadius: BorderRadiusLg,
            width: '100%',
            marginBottom: 0,
          }}
        />
      </div>
    )
  },
}

export const ActionSuccess: Story = {
  name: 'Action Success',
  render: () => {
    const handleSuccess = () => {
      notification.success({
        message: 'Configuration saved',
        description: 'Your changes have been applied and are now active.',
        duration: 3,
      })
    }

    return <Button onClick={handleSuccess}>Save Configuration</Button>
  },
}

export const ActionError: Story = {
  name: 'Action Error',
  render: () => {
    const handleError = () => {
      notification.error({
        message: 'Failed to save',
        description: 'An error occurred while saving your changes. Please try again.',
        duration: 0,
      })
    }

    return <Button onClick={handleError}>Trigger Error</Button>
  },
}

export const ActionWarning: Story = {
  name: 'Action Warning',
  render: () => {
    const handleWarning = () => {
      notification.warning({
        message: 'Review required',
        description: 'Some settings may affect existing data. Review before continuing.',
        duration: 3,
      })
    }

    return <Button onClick={handleWarning}>Trigger Warning</Button>
  },
}

export const ActionInfo: Story = {
  name: 'Action Info',
  render: () => {
    const handleInfo = () => {
      notification.info({
        message: 'New update available',
        description: 'A new version is available. Refresh the page to get the latest features.',
        duration: 3,
      })
    }

    return <Button onClick={handleInfo}>Show Info</Button>
  },
}

export const WithActionButton: Story = {
  name: 'With Action Button',
  render: () => {
    const handleNotification = () => {
      notification.success({
        message: 'Export complete',
        description: 'Your data export is ready to download.',
        duration: 0,
        btn: (
          <Button size="small" type="primary">
            Download
          </Button>
        ),
      })
    }

    return <Button onClick={handleNotification}>Export Data</Button>
  },
}

export const TitleOnly: Story = {
  name: 'Title Only',
  render: () => {
    const handleNotification = () => {
      notification.success({
        message: 'Profile updated',
        duration: 3,
      })
    }

    return <Button onClick={handleNotification}>Update Profile</Button>
  },
}
