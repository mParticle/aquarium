import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from 'src/components/feedback/Drawer/Drawer'
import { Button } from 'src/components/general/Button/Button'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Feedback/Drawer',
  component: Drawer,

  args: {},
}
export default meta

type Story = StoryObj<typeof Drawer>

export const Primary: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)}>
          <p>Drawer content</p>
        </Drawer>
      </>
    )
  },
}
