import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from 'src/components/data-entry/Switch/Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Data Entry/Switch',
  component: Switch,

  args: {
    disabled: false,
    loading: false,
    onClick: (checked, event) => {},
    onChange: (checked, event) => {
      console.log(`Switch changed: ${checked}`)
    },
  },
}
export default meta

type Story = StoryObj<typeof Switch>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false)

    const handleChange = (checkedValue: boolean, event: React.MouseEvent<HTMLButtonElement>) => {
      setChecked(checkedValue)
      if (args.onChange) {
        args.onChange(checkedValue, event)
      }
    }

    return <Switch {...args} checked={checked} onChange={handleChange} />
  },
}
