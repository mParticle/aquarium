import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Flex } from 'src/components'
import { Popconfirm } from 'src/components/feedback/Popconfirm/Popconfirm'
import { Typography } from 'src/components/general/Typography/Typography'

const meta: Meta<typeof Popconfirm> = {
  title: 'Components/Feedback/Popconfirm',
  component: Popconfirm,

  args: {},
}
export default meta

type Story = StoryObj<typeof Popconfirm>

export const Primary: Story = {
  args: {
    title: (
      <>
        <Flex gap={8}>
          <Typography.Text strong>Audience Fault</Typography.Text>
          <Typography.Text>Dec 09 2024, 13:04:51</Typography.Text>
        </Flex>
      </>
    ),
    description: 'We were unable to forward this audience because the connection has been marked as faulted.',
    trigger: 'hover',
    placement: 'bottom',
    showCancel: false,
    okText: 'Resume',
    overlayInnerStyle: { maxWidth: '320px' },
    children: <Button>Show popconfirm</Button>,
  },
}
