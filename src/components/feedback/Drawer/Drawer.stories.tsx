import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from 'src/components/feedback/Drawer/Drawer'
import { Button, Icon, Tooltip } from 'src/components'
import { Flex } from 'antd'
import {
  ColorFillTertiary,
  ColorBorderSecondary,
  BorderRadius,
  ColorTextTertiary,
  PaddingXxs,
  ControlHeight,
} from 'src/styles/style'

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
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} >
          <Flex
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: ColorFillTertiary,
              border: `1px solid ${ColorBorderSecondary}`,
              borderRadius: BorderRadius,
              color: ColorTextTertiary,
            }}
            align="center"
            justify="center">
            Content
          </Flex>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer perfect for settings panels.',
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
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width='large' placement="right">
          <Flex
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: ColorFillTertiary,
              border: `1px solid ${ColorBorderSecondary}`,
              borderRadius: BorderRadius,
              color: ColorTextTertiary,
            }}
            align="center"
            justify="center">
            Content
          </Flex>
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

export const DrawerWithLink: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    const handleCopyLink = () => {
      // Copy functionality would go here
      console.log('Copy link clicked')
    }

    const customHeader = (
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <span>Drawer Title</span>
        <Tooltip title="Copy Link">
          <Button
            type="text"
            size="small"
            onClick={handleCopyLink}
            style={{
              padding: PaddingXxs,
              minWidth: ControlHeight,
              height: ControlHeight,
            }}>
            <Icon name="link" size="sm" />
          </Button>
        </Tooltip>
      </Flex>
    )

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} placement="right">
          <Flex
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: ColorFillTertiary,
              border: `1px solid ${ColorBorderSecondary}`,
              borderRadius: BorderRadius,
              color: ColorTextTertiary,
            }}
            align="center"
            justify="center">
            Content
          </Flex>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer with a link icon in the header for sharing or bookmarking.',
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
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <span>Drawer Title</span>
        <Flex gap="small">
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Flex>
      </Flex>
    )

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} placement="right">
          <Flex
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: ColorFillTertiary,
              border: `1px solid ${ColorBorderSecondary}`,
              borderRadius: BorderRadius,
              color: ColorTextTertiary,
            }}
            align="center"
            justify="center">
            Content
          </Flex>
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
