import { type Meta, type StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { type ITourProps, Tour } from 'src/components/data-display/Tour/Tour'
import { Button } from 'src/components'

const meta: Meta<typeof Tour> = {
  title: 'Components/Not Prod Ready/Data Display/Tour',
  component: Tour,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tour>

export const Primary: Story = {}

export const ExamplePlacement: Story = {
  render: () => {
    const ref = useRef(null)
    const [open, setOpen] = useState<boolean>(false)

    const steps: ITourProps['steps'] = [
      {
        title: 'Center',
        description: 'Displayed in the center of screen.',
        target: null,
      },
      {
        title: 'Right',
        description: 'On the right of target.',
        placement: 'right',
        target: () => ref.current,
      },
      {
        title: 'Top',
        description: 'On the top of target.',
        placement: 'top',
        target: () => ref.current,
      },
    ]

    return (
      <>
        <div ref={ref}>
          <Button
            type="primary"
            onClick={() => {
              setOpen(true)
            }}>
            Begin Tour
          </Button>
        </div>

        <Tour
          open={open}
          onClose={() => {
            setOpen(false)
          }}
          steps={steps}
        />
      </>
    )
  },
}
