import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { Icon } from 'src/components'

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Not Prod Ready/Navigation/NavigationItem',
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
    icon: <Icon name="mpLogo" />,
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
    icon: <Icon name="mpLogo" />,
    items: [
      {
        label: 'Nav Item - Menu',
        type: 'menu',
        children: [
          { label: 'a', type: 'link' },
          { label: 'b', type: 'link' },
          {
            label: 'c',
          },
        ],
      },
    ],
  },
}
