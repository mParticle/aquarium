import { type Meta, type StoryObj } from '@storybook/react'
import { Tabs } from 'src/components/data-display/Tabs/Tabs'

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

export const Primary: Story = {}
