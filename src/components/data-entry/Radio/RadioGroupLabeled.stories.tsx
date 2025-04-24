import { type Meta, type StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import type { IRadioGroupWithLabelProps } from 'src/components/data-entry/Radio/RadioGroupLabeled'
import { RadioGroupLabeled } from 'src/components/data-entry/Radio/RadioGroupLabeled'
import { useState } from 'react'
import { type RadioChangeEvent } from 'antd'
import { userEvent, within, expect } from '@storybook/test'

const GroupWithLabelItems = [
  { label: 'Button 1', value: 'button1' },
  { label: 'Button 2', value: 'button2' },
] as IRadioGroupWithLabelProps['items']

const meta: Meta<typeof RadioGroupLabeled> = {
  title: 'Components/Data Entry/Radio/RadioGroupLabeled',
  component: RadioGroupLabeled,

  args: {
    items: GroupWithLabelItems,
    selectedItem: GroupWithLabelItems[0],
    handleChange: () => {},
    label: 'Label',
  },
}
export default meta

type Story = StoryObj<typeof RadioGroupLabeled>

export const Default: Story = {
  render: props => <RadioGroupLabeled {...props} />,
  args: {
    options: GroupWithLabelItems,
    defaultValue: 'button1',
  },
}

export const Buttons: Story = {
  render: props => <RadioGroupLabeled {...props} />,
  args: {
    options: GroupWithLabelItems,
    defaultValue: 'button1',
    optionType: 'button',
  },
}

const WithState = () => {
  const [selectedItem, setSelectedItem] = useState<IRadioGroupWithLabelProps['selectedItem']>(GroupWithLabelItems[0])

  const handleChange = (e: RadioChangeEvent) => {
    const selectedItem = GroupWithLabelItems.find(item => item.value === e.target.value)
    if (selectedItem) {
      setSelectedItem(selectedItem)
      action('onChange')(selectedItem)
    }
  }

  return (
    <RadioGroupLabeled
      items={GroupWithLabelItems}
      selectedItem={selectedItem}
      handleChange={handleChange}
      label={'Label'}
    />
  )
}

export const SelectionChangesOnToggle: StoryObj<typeof RadioGroupLabeled> = {
  render: () => <WithState />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Initially "Button 1" should be selected
    const eventsRadio = canvas.getByLabelText('Button 1')
    const userAttributesRadio = canvas.getByLabelText('Button 2')
    await expect(eventsRadio).toHaveProperty('checked', true)
    await expect(userAttributesRadio).not.toHaveProperty('checked', true)

    // Click on the "Button 2" radio button
    await userEvent.click(userAttributesRadio)

    // Now "Button 2" should be selected and "Button 1" should not be selected
    await expect(eventsRadio).not.toHaveProperty('checked', true)
    await expect(userAttributesRadio).toHaveProperty('checked', true)
  },
}
