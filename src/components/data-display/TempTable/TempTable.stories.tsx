import { type Meta, type StoryObj } from '@storybook/react'
import { Table } from 'src/components/data-display/TempTable/TempTable'

const meta: Meta<typeof Table> = {
  title: 'Aquarium/Data Display/TempTable',
  component: Table,

  args: {},
}
export default meta

type Story = StoryObj<typeof Table>

export const Primary: Story = {
  args: {
    columns: [
      {
        title: 'Hi',
        type: 'date',
      },
    ],
  },
}
