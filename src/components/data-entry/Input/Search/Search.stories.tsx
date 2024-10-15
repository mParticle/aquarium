import { Meta, StoryObj } from '@storybook/react'
import { Input } from 'src/components'

const meta: Meta<typeof Input.Search> = {
  title: 'Aquarium/Data Entry/Input/Search/Search',
  component: Input.Search,

  args: {
    placeholder: 'Input.Search Placeholder',
    enterButton: undefined,
    loading: false,
    onSearch: e => {
      console.log('Search triggered: ' + String(e))
    },
  },
}

export default meta

type Story = StoryObj<typeof Input.Search>

export const Default: Story = {
}

export const EnterButton: Story = {
  args: {
    enterButton: <span>Search</span>,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}


export const LoadingWithEnterButton: Story = {
  args: {
    enterButton: <span>Search</span>,
    loading: true,
  },
}
