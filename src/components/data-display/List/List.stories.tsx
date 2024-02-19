import { type Meta, type StoryObj } from '@storybook/react'
import { List } from 'src/components/data-display/List/List'

const meta: Meta<typeof List> = {
  title: 'Aquarium/Data Display/List',
  component: props => <List {...props}></List>,

  args: {
    dataSource: ['item1', 'item2', 'item3'],
    renderItem: item => <List.Item>{item as string}</List.Item>,
    bordered: false,
    footer: undefined,
    grid: undefined,
    header: undefined,
    itemLayout: 'horizontal',
    loading: false,
    locale: { emptyText: 'No Data' },
    pagination: false,
    size: 'default',
    split: true,
  },
  argTypes: {
    itemLayout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small'],
    },
  },
}
export default meta

type Story = StoryObj<typeof List>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const BorderedList: Story = {
  args: {
    bordered: true,
  },
}

export const VerticalLayout: Story = {
  args: {
    itemLayout: 'vertical',
  },
}

export const LoadingIndicator: Story = {
  args: {
    loading: true,
  },
}

export const CustomPagination: Story = {
  args: {
    pagination: { current: 1, total: 50, pageSize: 10 },
  },
}

export const CustomGrid: Story = {
  args: {
    grid: { gutter: 16, column: 4 },
  },
}

export const LargeSizeList: Story = {
  args: {
    size: 'large',
  },
}

export const CustomFooter: Story = {
  args: {
    footer: <>Custom Footer</>,
  },
}

export const NoSplitUnderListItem: Story = {
  args: {
    split: false,
  },
}