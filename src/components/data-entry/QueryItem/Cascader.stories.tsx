import { type Meta, type StoryObj } from '@storybook/react'
import { type IQueryItemCascaderProps, QueryItem } from 'src/components'

const options: IQueryItemCascaderProps['options'] = [
  {
    value: 'United States1',
    label: 'United States',
    children: [
      {
        value: 'Michigan1',
        label: 'Michigan',
        children: [
          {
            value: 'Detroit1',
            label: 'Detroit',
          },
          {
            value: 'Lansing1',
            label: 'Lansing',
          },
        ],
      },
      {
        value: 'California1',
        label: 'California',
        children: [
          {
            value: 'San Francisco1',
            label: 'San Francisco',
          },
          {
            value: 'San Jose1',
            label: 'San Jose',
          },
        ],
      },
    ],
  },
  {
    value: 'Canada1',
    label: 'Canada',
    children: [
      {
        value: 'Ontario1',
        label: 'Ontario',
        children: [
          {
            value: 'Toronto1',
            label: 'Toronto',
          },
        ],
      },
    ],
  },
]

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

  args: {
    options,
  },
}
export default meta

type Story = StoryObj<typeof QueryItem.ValueSelector.Cascader>

export const Default: Story = {
  args: {
    placeholder: 'Default',
  },
}

export const SimpleList: Story = {
  args: {
    placeholder: 'Simple List',
    options: [
      {
        value: 'United States',
        label: 'United States',
      },
      {
        value: 'Canada',
        label: 'Canada',
      },
    ],
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Error',
    errorMessage: 'test error',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'With Icon',
    icon: 'event',
  },
}

export const OnSelect: Story = {
  args: {
    placeholder: 'On Select',
    onChange: async value => {
      console.log(value)
    },
  },
}

export const PreSelectedValue: Story = {
  args: {
    placeholder: 'PreSelected',
    value: ['Canada1', 'Ontario1', 'Toronto1'],
    onChange: async (values, _) => {
      console.log(values)
    },
  },
}

export const LoadData: Story = {
  args: {
    placeholder: 'Load',
    loadData: async (value: string) => {
      console.log(value)
    },
  },
}

export const Loading: Story = {
  args: {
    placeholder: 'Loading Story',
    options: undefined,
    loadData: async (value: string) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(options)
        }, 3000)
      })
    },
  },
}
