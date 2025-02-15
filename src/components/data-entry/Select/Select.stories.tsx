import { type Meta, type StoryObj } from '@storybook/react'
import { Select } from 'src/components/data-entry/Select/Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Data Entry/Select',
  component: Select,

  args: {},
}
export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    placeholder: 'Select Environment',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Prod', value: 'prod' },
      { label: 'Dev', value: 'dev' },
    ],
    style: { width: '180px' },
  },
}
