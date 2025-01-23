import { Popover, type IPopoverProps } from 'src/components/data-display/Popover/Popover'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from 'src/components/general/Button/Button'

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
