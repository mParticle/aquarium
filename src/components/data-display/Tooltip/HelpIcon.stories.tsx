import { type Meta, type StoryObj } from '@storybook/react'
import { Flex, Typography, HelpIcon } from 'src/components'
import { MarginXxs } from 'src/styles/style'

const meta: Meta<typeof HelpIcon> = {
  title: 'Components/Data Display/HelpIcon',
  component: HelpIcon,
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
    size: {
      control: 'select',
      options: ['xxxxl', 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'success',
        'warning',
        'error',
        'info',
        'white',
        'black',
        'text',
        'strong',
        'brand',
        'inherit',
      ],
    },
  },
}
export default meta

type Story = StoryObj<typeof HelpIcon>

export const Primary: Story = {
  args: {
    title: 'This is helpful information',
    placement: 'top',
    size: 'sm',
    color: 'default',
  },
}

export const WithLabel: Story = {
  render: () => {
    return (
      <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{ wordBreak: 'initial' }}>Audience Size</Typography.Text>
        <HelpIcon title="The total number of users who match the targeting criteria for this segment." />
      </Flex>
    )
  },
}

export const WithLink: Story = {
  render: () => {
    return (
      <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{ wordBreak: 'initial' }}>Conversion Rate</Typography.Text>
        <HelpIcon
          title={
            <Typography.Text tooltip>
              The percentage of users who completed the desired action.{' '}
              <Typography.Link href="/" tooltip>
                Learn More
              </Typography.Link>
            </Typography.Text>
          }
        />
      </Flex>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    return (
      <Flex align="center" gap="12px">
        <HelpIcon title="Extra small" size="xs" />
        <HelpIcon title="Small (default)" size="sm" />
        <HelpIcon title="Medium" size="md" />
        <HelpIcon title="Large" size="lg" />
      </Flex>
    )
  },
}
