import { type Meta, type StoryObj } from '@storybook/react'
import { Form } from 'src/components/data-entry/Form/Form'

const meta: Meta<typeof Form> = {
  title: 'Aquarium/Data Entry/Form',
  component: Form,

  args: {},
}
export default meta

type Story = StoryObj<typeof Form>

export const Primary: Story = {}