import { type Meta, type StoryObj } from '@storybook/react'
import { Switch } from 'src/components/data-entry/Switch/Switch'
import { ExampleStory } from 'src/utils/ExampleStory'
import { Icon, Space } from 'src/components'
import { useState } from 'react'
import { Button } from 'src/components'

const meta: Meta<typeof Switch> = {
  title: 'Components/Not Prod Ready/Data Entry/Switch',
  component: Switch,

  args: {
    autoFocus: false,
    checked: false,
    checkedChildren: 'On',
    className: '',
    defaultChecked: false,
    defaultValue: false, // Alias for defaultChecked
    disabled: false,
    loading: false,
    size: 'default',
    unCheckedChildren: 'Off',
    value: false, // Alias for checked
    onClick: (checked, event) => {},
    onChange: (checked, event) => {
      alert(`Switch changed: ${checked}`)
    },
  },
}
export default meta

type Story = StoryObj<typeof Switch>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const CustomCopy: Story = {
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const ExampleDisabled: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(true)
    const toggle = () => {
      setDisabled(!disabled)
    }
    return (
      <ExampleStory title="Press button to toggle disabled state.">
        <Space direction="vertical">
          <Switch disabled={disabled} defaultChecked />
          <Button type="primary" onClick={toggle}>
            Toggle disabled
          </Button>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleSizes: Story = {
  render: () => {
    return (
      <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>
    )
  },
}

export const ExampleLoading: Story = {
  render: () => {
    return (
      <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>
    )
  },
}

export const ExampleTextAndIcon: Story = {
  render: () => {
    return (
      <ExampleStory title="With text and icon.">
        <Space direction="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch
            checkedChildren={<Icon name="selected" />}
            unCheckedChildren={<Icon name="support" />}
            defaultChecked
          />
        </Space>
      </ExampleStory>
    )
  },
}
