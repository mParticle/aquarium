import { Meta, StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.ValueSelector.Cascader> = {
  title: 'Aquarium/Data Entry/QueryItem/ValueSelector/Cascader',
  component: QueryItem.ValueSelector.Cascader,
  parameters: {
    docs: {
      description: {
        component:
          'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.',
      },
    },
  },

  args: {},
}
export default meta

type Story = StoryObj<typeof QueryItem.ValueSelector.Cascader>

const exampleOptions = [
  {
    value: "United States1",
    label: "United States",
    children: [
      {
        value: "Michigan1",
        label: "Michigan",
        children: [
          {
            value: "Detroit1",
            label: "Detroit",
          },
          {
            value: "Lansing1",
            label: "Lansing",
          },
        ],
      },
      {
        value: "California1",
        label: "California",
        children: [
          {
            value: "San Francisco1",
            label: "San Francisco",
          },
          {
            value: "San Jose1",
            label: "San Jose",
          },
        ],
      },
    ],
  },
  {
    value: "Canada1",
    label: "Canada",
    children: [
      {
        value: "Ontario1",
        label: "Ontario",
        children: [
          {
            value: "Toronto1",
            label: "Toronto",
          },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    placeholder: "QueryItem.ValueSelector.Cascader Default",
    options: exampleOptions
  },
}

export const SimpleList: Story = {
  args: {
    placeholder: "QueryItem.ValueSelector.Cascader Simple",
    options: [
      {
        value: 'United States',
        label: 'United States',
      },
      {
        value: 'Canada',
        label: 'Canada',
      },
    ]
  },
}

export const Error: Story = {
  args: {
    placeholder: "QueryItem.ValueSelector.Cascader Error",
    options: exampleOptions,
    errorMessage: 'test error',
  },
}

export const OnSelect: Story = {
  args: {
    placeholder: "QueryItem.ValueSelector.Cascader Error",
    options: exampleOptions,
    onChange: (value) => console.log(value),
  },
}
