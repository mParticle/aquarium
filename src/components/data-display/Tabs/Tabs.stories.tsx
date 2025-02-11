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
  args: {
    defaultActiveKey: '1',
    items: [
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    items,
    defaultActiveKey: '1',
  },
}
