import { type Meta, type StoryObj } from '@storybook/react'
import { Flex, Tooltip, Typography, IconWithTooltip } from 'src/components'
import { Button } from 'src/components'
import { MarginXxs } from 'src/styles/style'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Data Display/Tooltip',
  component: props => (
    <Flex align="center" gap={2}>
      <Tooltip {...props}>
        <Button>Tooltip element</Button>
      </Tooltip>
    </Flex>
  ),
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  args: {
    title: 'Tooltip content',
    placement: 'top',
    trigger: 'hover',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu'],
    },
  },
}

export const WithLink: Story = {
  render: () => {
    return (
      <Flex align="center" gap={2}>
        <Tooltip
          title={
            <>
              <Typography.Text tooltip>
                Help lorem ipsum{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>
            </>
          }>
          <Button>Tooltip with a link</Button>
        </Tooltip>
      </Flex>
    )
  },
}

export const TextWithIcon: Story = {
  render: () => {
    return (
      <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{ wordBreak: 'initial' }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>
    )
  },
}
