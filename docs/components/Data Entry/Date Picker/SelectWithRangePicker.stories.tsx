import type { Meta, StoryObj } from '@storybook/react'
import { SelectWithRangePicker as Component } from './SelectWithRangePicker'
import { fn } from '@storybook/test'
import { useArgs } from '@storybook/preview-api'

const meta: Meta<typeof Component> = {
  title: 'Components/Data Entry/Date Picker/Date Range Filter',
  component: Component,
}
export default meta

type Story = StoryObj<typeof Component>

export const DateRangeFilter: Story = {
  args: {
    value: 'last30days',
    onSelect: fn(),
    options: [
      {
        value: 'last24hours',
        label: 'Last 24 hours',
      },
      {
        value: 'last7days',
        label: 'Last 7 days',
      },
      {
        value: 'last30days',
        label: 'Last 30 days',
      },
    ],
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs()
    return (
      <Component
        {...args}
        value={value}
        onChange={value => {
          updateArgs({ value })
        }}
      />
    )
  },
}
