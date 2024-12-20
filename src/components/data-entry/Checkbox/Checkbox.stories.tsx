import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Checkbox } from 'src/components'
import { useState } from 'react'

export type CheckboxValueType = string | number | boolean

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Data Entry/Checkbox',
  component: props => {
    const [checked, setChecked] = useState<boolean>(props.checked ?? props.defaultChecked ?? false)
    return (
      <Checkbox
        {...props}
        checked={checked}
        onChange={e => {
          setChecked(!checked)
        }}
      />
    )
  },

  args: {
    defaultChecked: true,
    disabled: false,
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  args: {
    disabled: false,
    children: 'Don’t show this message again',
  },
}
