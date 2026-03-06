import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
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
  tags: ['play-test-validation'],
  args: {},
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    items,
    defaultActiveKey: '1',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Content of Tab Pane 1')).toBeInTheDocument()

    await userEvent.click(canvas.getByText('Tab 3'))

    await expect(canvas.getByText('Content of Tab Pane 3')).toBeInTheDocument()
  },
}
