import type { Meta, StoryObj } from '@storybook/react'
import { expect, screen, userEvent, within } from 'storybook/test'
import { useState } from 'react'
import { CustomDropdown, type ICustomDropdownProps } from './CustomDropdown'

const defaultOptions: ICustomDropdownProps['options'] = [
  { value: 'wishlist', label: 'Wishlist Users' },
  { value: 'premium', label: 'Premium Users' },
  { value: 'inactive', label: 'Inactive Users', disabled: true },
]

const meta: Meta<typeof CustomDropdown> = {
  title: 'UX Patterns/CustomDropdown',
  component: CustomDropdown,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Dropdown',
    options: defaultOptions,
    value: [],
    disabled: false,
    showFooter: false,
  },
}
export default meta

type Story = StoryObj<typeof CustomDropdown>

export const Default: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value ?? [])
    return <CustomDropdown {...args} value={value} onChange={setValue} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', { name: /Dropdown/i }))

    const firstOption = await screen.findByText('Wishlist Users')
    await expect(firstOption).toBeVisible()

    await userEvent.click(firstOption)
  },
}

export const WithFooter: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value ?? [])
    return <CustomDropdown {...args} value={value} onChange={setValue} />
  },
  args: {
    showFooter: true,
    value: ['wishlist'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', { name: /Dropdown/i }))

    const showResultsBtn = await screen.findByRole('button', { name: 'Show results' })
    await expect(showResultsBtn).toBeVisible()

    await userEvent.click(showResultsBtn)
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
