import { type Meta, type StoryObj } from '@storybook/react'
import { type ITabsProps, Tabs } from 'src/components/data-display/Tabs/Tabs'

const items: ITabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
    disabled: true,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
]

const meta: Meta<typeof Tabs> = {
  title: 'Components/Data Display/Tabs',
  component: Tabs,

  args: {},
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  args: {
    items,
    defaultActiveKey: '1',
    type: 'line',
    size: 'middle',
    tabPosition: 'top',
    centered: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card'],
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    centered: { control: 'select', options: [false, true] },
  },
}

export const Primary: Story = {
  args: {
    items,
    defaultActiveKey: '1',
  },
}
