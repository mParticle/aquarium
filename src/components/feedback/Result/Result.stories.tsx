import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Icon, Typography } from 'src/components'
import { Result } from 'src/components/feedback/Result/Result'

const meta: Meta<typeof Result> = {
  title: 'Components/Not Prod Ready/Feedback/Result',
  component: Result,

  args: {},
}
export default meta

type Story = StoryObj<typeof Result>

export const Info: Story = {
  args: {
    icon: <Icon name="premium" variant="duo-tone" size="xxxxl" color="brand" />,
    title: (
      <>
        <Typography.Text type="secondary" size="lg" strong>
          Premium Feature.
        </Typography.Text>
        <br />
        <Typography.Title level={2}>Achieve next-level personalization with Predictive Attributes</Typography.Title>
      </>
    ),
    extra: (
      <>
        <Button type="primary">Start Free Trial</Button>
        <Button type="default">Learn More</Button>
      </>
    ),
  },
}

export const Error: Story = {
  args: {
    status: 'error',
    title: 'We were unable to load the prediction details.',
    subTitle: (
      <>
        Please{' '}
        <Button type="link" style={{ padding: 0 }}>
          refresh the page
        </Button>{' '}
        to try again. If the problem persists, <a>contact support</a>.
      </>
    ),
  },
}

export const Primary: Story = {
  args: {
    status: 'success',
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
  },
}
