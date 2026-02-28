import { type Meta, type StoryObj } from '@storybook/react'
import { Flex, Tooltip, Typography, IconWithTooltip } from 'src/components'
import { RoktHelpCircle } from 'src/components/icons'
import { Button } from 'src/components'
import { MarginXxs, SizeSm } from 'src/styles/style'

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

export const HelpIcon: Story = {
  render: () => {
    return (
      <Flex align="center" gap={SizeSm}>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{ wordBreak: 'initial' }}>Audience Size</Typography.Text>
          <IconWithTooltip
            title="The total number of users who match the targeting criteria for this segment."
            iconProps={{ name: RoktHelpCircle }}
          />
        </Flex>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{ wordBreak: 'initial' }}>Conversion Rate</Typography.Text>
          <IconWithTooltip
            title={
              <Typography.Text tooltip>
                The percentage of users who completed the desired action.{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>
            }
            iconProps={{ name: RoktHelpCircle }}
          />
        </Flex>
      </Flex>
    )
  },
}
