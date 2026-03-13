import { Popover, type IPopoverProps } from 'src/components/data-display/Popover/Popover'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from 'src/components/general/Button/Button'
import { Tag } from 'src/components/data-display/Tag/Tag'
import { Typography } from 'src/components/general/Typography/Typography'
import { Flex } from 'src/components/layout/Flex/Flex'

const meta: Meta<typeof Popover> = {
  title: 'Components/Data Display/Popover',
  component: Popover,

  args: {},
}
export default meta

type Story = StoryObj<typeof Popover>

const PrimaryTemplate = (args: IPopoverProps) => {
  const content = (
    <div>
      <p>Content</p>
    </div>
  )

  return (
    <>
      <Popover content={content} title="Title" trigger={args.trigger}>
        <Button>{args.children}</Button>
      </Popover>
    </>
  )
}

export const Primary: Story = {
  args: { trigger: 'click', children: 'Button with popover' },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
  },
  render: PrimaryTemplate,
}

const PopoverWithLinksTemplate = (args: IPopoverProps) => {
  const content = (
    <Flex gap="small" vertical>
      <Typography.Link href="#link1">Link Example 1</Typography.Link>
      <Typography.Link href="#link2">Link Example 2</Typography.Link>
      <Typography.Link href="#link3">Link Example 3</Typography.Link>
    </Flex>
  )

  return (
    <>
      <Popover content={content} title="Details" trigger={args.trigger}>
        <Tag style={{ margin: '0', cursor: 'pointer' }}>{args.children ?? '3'}</Tag>
      </Popover>
    </>
  )
}

export const ExampleWithLinks: Story = {
  args: { trigger: 'click', children: '3' },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
  },
  render: PopoverWithLinksTemplate,
}
