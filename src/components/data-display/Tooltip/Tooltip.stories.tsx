import { type Meta, type StoryObj } from '@storybook/react'

import { ConfigProvider, Flex, Segmented, Tooltip } from 'src/components'
import { Button } from 'src/components'
import { useState, useMemo } from 'react'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof Tooltip> = {
  title: 'Aquarium/Data Display/Tooltip',
  component: props => (
    <Tooltip {...props}>
      <Button>Tooltip element</Button>
    </Tooltip>
  ),

  args: {
    title: 'Tooltip content',
    arrow: true,
    autoAdjustOverflow: true,
    color: '',
    defaultOpen: false,
    destroyTooltipOnHide: false,
    fresh: false,
    getPopupContainer: (_node: HTMLElement) => document.body,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayClassName: '',
    overlayStyle: {},
    overlayInnerStyle: {},
    placement: 'top',
    trigger: 'hover',
    zIndex: 0,
    onOpenChange: (_open: boolean) => {},
  },
  argTypes: {
    color: {
      control: 'color',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  render: props => (
    <>
      <Tooltip {...props}>
        <Button>Tooltip element</Button>
      </Tooltip>
      <div style={{ marginTop: 16 }}>
        <strong>Important Note:</strong> Tooltip requires a child node that accepts an onMouseEnter, onMouseLeave,
        onFocus, onClick event. This means the child node must be a built-in component like div or span, or a custom
        component that passes its props to its built-in component child.
      </div>
    </>
  ),
}

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const WithDifferentTitle: Story = {
  args: {
    title: 'Different Tooltip Content',
  },
}

export const WithCustomColor: Story = {
  args: {
    color: '#ffcc00',
  },
}

export const WithCustomPlacement: Story = {
  args: {
    placement: 'bottom',
  },
}

export const WithClickTrigger: Story = {
  args: {
    trigger: 'click',
  },
}

export const WithAlwaysOpenTooltip: Story = {
  args: {
    open: true,
  },
}

export const WithTooltipOnContextMenu: Story = {
  args: {
    trigger: 'contextMenu',
  },
}

export const WithClickTriggerAndActionOnChange: Story = {
  args: {
    trigger: 'click',
    onOpenChange: (open: boolean) => {
      alert(`onOpenChange: ${open}`)
    },
  },
}

const text = <span>prompt text</span>
const buttonWidth = 80
const buttonHeight = 70

export const WithCustomArrowPlacements: Story = {
  render: () => {
    const [arrow, setArrow] = useState('Show')

    const mergedArrow = useMemo(() => {
      if (arrow === 'Hide') {
        return false
      }

      if (arrow === 'Show') {
        return true
      }

      return {
        pointAtCenter: true,
      }
    }, [arrow])

    return (
      <ExampleStory title={'Show, hide or center arrow and change placements of the tooltip'}>
        <ConfigProvider button={{ style: { width: buttonWidth, height: buttonHeight, margin: 4 } }}>
          <Flex justify="center">
            <Segmented
              value={arrow}
              options={['Show', 'Hide', 'Center']}
              onChange={val => {
                setArrow(String(val))
              }}
              style={{ marginBottom: 24 }}
            />
          </Flex>
          <div className="demo">
            <div style={{ marginInlineStart: buttonWidth, whiteSpace: 'nowrap' }}>
              <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
                <Button>TL</Button>
              </Tooltip>
              <Tooltip placement="top" title={text} arrow={mergedArrow}>
                <Button>Top</Button>
              </Tooltip>
              <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
                <Button>TR</Button>
              </Tooltip>
            </div>
            <div style={{ width: buttonWidth, float: 'inline-start' }}>
              <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
                <Button>LT</Button>
              </Tooltip>
              <Tooltip placement="left" title={text} arrow={mergedArrow}>
                <Button>Left</Button>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
                <Button>LB</Button>
              </Tooltip>
            </div>
            <div style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}>
              <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
                <Button>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text} arrow={mergedArrow}>
                <Button>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
                <Button>RB</Button>
              </Tooltip>
            </div>
            <div style={{ marginInlineStart: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
                <Button>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
                <Button>BR</Button>
              </Tooltip>
            </div>
          </div>
        </ConfigProvider>
      </ExampleStory>
    )
  },
}
