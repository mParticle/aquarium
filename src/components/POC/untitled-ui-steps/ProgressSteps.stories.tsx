import { type Meta, type StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { ProgressSteps } from './ProgressSteps'
import { createStepItem } from './StepItems'
import { PaddingLg } from 'src/styles/style'
import { Flex } from 'src/components'

/**
 * POC: Untitled UI Progress Steps visual style on Ant Design Steps
 *
 * Proving we can achieve https://www.untitledui.com/react/components/progress-steps
 * look using https://5x.ant.design/components/steps with custom StepItem components
 */

const meta: Meta<typeof ProgressSteps> = {
  title: 'POC/ProgressSteps',
  component: ProgressSteps,
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj<typeof ProgressSteps>

export const DynamicSteps: Story = {
  render: () => {
    const [currentStep] = useState(1)

    const steps = [
      { title: 'Set up', id: 0 },
      { title: 'Build a report', id: 1 },
      { title: 'Schedule delivery', id: 2 },
    ]

    const items = steps.map(step =>
      createStepItem({
        title: step.title,
        status: step.id < currentStep ? 'finish' : step.id === currentStep ? 'process' : 'wait',
      }),
    )

    return (
      <Flex vertical style={{ padding: PaddingLg }} gap="middle">
        <ProgressSteps direction="vertical" items={items} />
      </Flex>
    )
  },
}
