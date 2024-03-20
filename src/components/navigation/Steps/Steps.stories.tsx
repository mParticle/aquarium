import { type Meta, type StoryObj } from '@storybook/react'
import { Steps } from 'src/components/navigation/Steps/Steps'

const items = [
  {
    title: 'Finished',
    description: 'description 1',
  },
  {
    title: 'In Progress',
    description: 'description 2',
    subTitle: 'subTitle 2',
  },
  {
    title: 'Waiting',
    description: 'description 3',
  },
]

const meta: Meta<typeof Steps> = {
  title: 'Aquarium/Navigation/Steps',
  component: Steps,

  args: {
    items,
    current: 0,
    initial: 0,
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    percent: undefined,
    progressDot: false,
    responsive: true,
    size: 'default',
    status: 'process',
    type: 'default',
    onChange: current => {
      alert('Step changed : ' + current)
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    labelPlacement: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['default', 'navigation', 'inline'],
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Steps>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const VerticalDirection: Story = {
  args: {
    direction: 'vertical',
  },
}

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
}

export const ProgressDot: Story = {
  args: {
    progressDot: true,
  },
}

export const CustomProgressDot: Story = {
  args: {
    progressDot: (iconDot, { index, status, title, description }) => {
      return <span>{'Custom Dot: ' + index}</span>
    },
  },
}

export const DifferentStatuses: Story = {
  args: {
    items: [{ status: 'wait' }, { status: 'process' }, { status: 'finish' }, { status: 'error' }],
  },
}

export const Navigation: Story = {
  args: {
    type: 'navigation',
  },
}

export const Inline: Story = {
  args: {
    type: 'inline',
  },
}
