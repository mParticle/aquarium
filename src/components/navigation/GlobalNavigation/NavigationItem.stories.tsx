import * as React from 'react'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

const meta: Meta<typeof NavigationItem> = {
  title: 'Aquarium/Navigation/NavigationItem',
  component: props => <NavigationItem {...props}></NavigationItem>,

  args: {
    label: 'Label',
  },
}
export default meta

type Story = StoryObj<typeof NavigationItem>

export const Primary: Story = {}

export const NavIcon: Story = {
  args: {
    icon: faShapes,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!')
    },
  },
}

export const NavList: Story = {
  args: {
    label: 'List Label',
    type: 'menu',
    icon: faList,
    items: [],
  },
}