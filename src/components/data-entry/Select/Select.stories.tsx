import { type Meta, type StoryObj } from '@storybook/react'
import { expect, screen, userEvent } from 'storybook/test'
import { Select } from 'src/components/data-entry/Select/Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Data Entry/Select',
  component: Select,
  tags: ['play-test-validation'],
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
  play: async context => {
    const selectElement = context.canvasElement.querySelector('.ant-select')
    if (!selectElement) {
      throw new Error('Select element not found')
    }

    await userEvent.click(selectElement)

    const prodOption = await screen.findByText('Prod')
    await expect(prodOption).toBeInTheDocument()

    await userEvent.click(prodOption)
  },
}
