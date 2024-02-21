import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import MpLogo from 'src/assets/svg/mpLogo.svg?react'

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
    icon: <MpLogo/>,
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
    icon: <MpLogo/>,
    items: [
      {
        label: 'Nav Item - Menu',
        type: 'menu',
        children: [
          { label: 'a', type: 'link' },
          { label: 'b', type: 'link' },
          {
            label: 'c',
            type: 'menu',
            children: [
              { label: 'sub1', type: 'link' },
              { label: 'sub2', type: 'link' },
            ],
          },
        ],
      },
    ],
  },
}