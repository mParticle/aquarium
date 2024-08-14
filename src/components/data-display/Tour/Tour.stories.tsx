import { type Meta, type StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { type ITourProps, Tour } from 'src/components/data-display/Tour/Tour'
import { Button, Icon, SuiteLogo } from 'src/components'

const meta: Meta<typeof Tour> = {
  title: 'Aquarium/Data Display/Tour',
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

export const ExampleNavLogo: Story = {
  render: () => {
    const ref = useRef(null)
    const [open, setOpen] = useState<boolean>(false)

    const steps: ITourProps['steps'] = [
      {
        title: 'Navigate mParticle effortlessly!',
        description: 'Switch between product suites anytime using this selector.',
        placement: 'right',
        target: () => ref.current,
      },
    ]

    return (
      <>
        <div ref={ref}>
          <SuiteLogo
            label="Data Platform"
            icon={<Icon name="siteMap" />}
            onSuiteLogoClick={() => {
              setOpen(true)
            }}
          />
        </div>

        <Tour
          mask={false}
          type="primary"
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
