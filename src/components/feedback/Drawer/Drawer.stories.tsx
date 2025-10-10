import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from 'src/components/feedback/Drawer/Drawer'
import { Button, Icon, Tooltip } from 'src/components'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Feedback/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: 'A panel which slides in from the edge of the screen.',
      },
    },
  },
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
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f5f5f5',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}>
            Content
          </div>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer (378px width) perfect for settings panels and forms.',
      },
    },
  },
}

export const LargeDrawer: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width={736} placement="right">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f5f5f5',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}>
            Content
          </div>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A large drawer (736px width) ideal for detailed forms, project management interfaces, or content-heavy layouts.',
      },
    },
  },
}

export const DefaultDrawerWithIcon: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    const handleCopyLink = () => {
      // Copy functionality would go here
      console.log('Copy link clicked')
    }

    const customHeader = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <span>Drawer Title</span>
        <Tooltip title="Copy Link">
          <Button
            type="text"
            size="small"
            onClick={handleCopyLink}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              minWidth: '32px',
              height: '32px',
            }}>
            <Icon name="link" size="sm" />
          </Button>
        </Tooltip>
      </div>
    )

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f5f5f5',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}>
            Content
          </div>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer with a link icon in the header.',
      },
    },
  },
}

export const DrawerWithButtons: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    const handleReset = () => {
      console.log('Reset clicked')
    }

    const handleSave = () => {
      console.log('Save clicked')
    }

    const customHeader = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <span>Drawer Title</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    )

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f5f5f5',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}>
            Content
          </div>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A drawer with action buttons (Reset and Save) in the header.',
      },
    },
  },
}
