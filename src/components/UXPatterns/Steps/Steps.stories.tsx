import { type Meta, type StoryObj } from '@storybook/react'
import { Center } from 'src/components'
import { Steps } from 'src/components/navigation/Steps/Steps'

const items = [
  {
    title: 'Define request',
    description: 'Gather requirements',
  },
  {
    title: 'Review',
    description: 'Validate with stakeholders',
  },
  {
    title: 'Approve',
    description: 'Get program sign-off',
  },
]

const meta: Meta<typeof Steps> = {
  title: 'UX Patterns/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Steps>

export const UXPatternExample: Story = {
  render: () => {
    const currentStep = 3

    return (
      <Center style={{ margin: 'auto' }}>
        <Steps items={items} labelPlacement="vertical" current={currentStep - 1} />
      </Center>
    )
  },
}
