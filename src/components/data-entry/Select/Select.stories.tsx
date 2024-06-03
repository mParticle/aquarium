import { type Meta, type StoryObj } from '@storybook/react'
import { type ISelectProps, Select } from 'src/components/data-entry/Select/Select'

const options: ISelectProps['options'] = [{ value: 'gold1' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }]


const meta: Meta<typeof Select> = {
  title: 'Aquarium/Data Entry/Select',
  component: Select,

  args: {
    options,
    style: { width: 200 },
    mode: 'tags',
  },
}
export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = {}
