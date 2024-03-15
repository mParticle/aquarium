import { type Meta, type StoryObj } from '@storybook/react'
import { Calendar } from 'src/components/data-display/Calendar/Calendar'
import dayjs from 'dayjs'

const meta: Meta<typeof Calendar> = {
  title: 'Aquarium/Data Display/Calendar',
  component: Calendar,

  args: {
    value: dayjs('1/2/2024'),
  },
}
export default meta

type Story = StoryObj<typeof Calendar>

export const Primary: Story = {}
