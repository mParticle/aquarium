import { type Meta, type StoryObj } from '@storybook/react'
import { Radio } from 'src/components/data-entry/Radio/Radio'

const meta: Meta<typeof Radio.Group> = {
  title: 'Components/Not Prod Ready/Data Entry/Radio/RadioGroup',
  component: Radio.Group,

  args: {
    buttonStyle: undefined,
    defaultValue: undefined,
    disabled: false,
    name: undefined,
    options: undefined,
    optionType: undefined,
    size: 'middle',
    value: undefined,
    onChange: undefined,
    children: undefined,
  },
}
export default meta

type Story = StoryObj<typeof Radio.Group>

export const WithOptionsAndOptionType: Story = {
  args: {
    options: [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', title: 'Orange' },
    ],
    optionType: 'default',
  },
}

export const WithRadioButtons: Story = {
  args: {
    defaultValue: 'a',
    children: [
      <Radio.Button key="a" value="a">
        Hangzhou
      </Radio.Button>,
      <Radio.Button key="b" value="b">
        Shanghai
      </Radio.Button>,
      <Radio.Button key="c" value="c">
        Beijing
      </Radio.Button>,
      <Radio.Button key="d" value="d">
        Chengdu
      </Radio.Button>,
    ],
  },
}
