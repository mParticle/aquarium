import { type Meta, type StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { type ITourProps, Tour } from 'src/components/data-display/Tour/Tour'
import { Icon, SuiteLogo } from 'src/components'

const meta: Meta<typeof Tour> = {
  title: 'Components/Data Display/Tour',
  component: Tour,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tour>

export const ExampleNavLogo: Story = {
  render: () => {
    const ref = useRef(null)
    const [open, setOpen] = useState<boolean>(true)

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
