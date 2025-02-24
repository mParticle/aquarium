import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import { Center, GlobalNavigation, Icon } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type INotificationCenterProps } from 'src/components/navigation/GlobalNavigation/NotificationCenter'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorItems'
import { NavigationItemsService } from 'src/shared/services/NavigationItemsService'

const defaultManagement: IGlobalNavigationItem[] = [
  {
    label: 'Notifications',
    hideLabel: true,
    icon: <Icon name="api" />,
    hrefOptions: { href: '/' },
  },
  {
    label: 'Support',
    hideLabel: true,
    icon: <Icon name="support" />,
    type: 'menu',
    children: [
      { label: 'option 1', hrefOptions: { href: '/' } },
      { label: 'option 2', hrefOptions: { href: '/' } },
      { label: 'option 3', hrefOptions: { href: '/' } },
    ],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon name="settings" />,
    type: 'menu',
    children: [
      { label: 'option 1', hrefOptions: { href: '/' } },
      { label: 'option 2', hrefOptions: { href: '/' } },
      { label: 'option 3', hrefOptions: { href: '/' } },
      {
        label: 'button',
        type: 'button',
        buttonOptions: {
          onClick: () => {
            alert('go')
          },
        },
      },
      { type: 'button', label: 'go', buttonOptions: { href: '/', target: '_blank' } },
    ],
  },
]

const defaultOrgs: INavigationOrg[] = [
  {
    id: 'org1',
    label: 'Org 1',
    accounts: [
      {
        id: 'account1',
        label: 'account 1',
        workspaces: [
          {
            id: 'workspace1',
            label: 'Workspace 111111111',
            isActive: true,
            onClick: () => {
              alert('Selected Workspace 1')
            },
          },
        ],
      },
    ],
  },
]

const defaultNotificationCenter: INotificationCenterProps = {
  open: false,
  unreadMessages: 0,
  content: () => <div></div>,
  onClose: () => {},
  onPreferencesClick: () => {},
}

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Components/Navigation/Not Prod Ready/GlobalNavigation',
  component: props => (
    <Center style={{ minHeight: '800px' }}>
      <GlobalNavigation {...props}></GlobalNavigation>
    </Center>
  ),

  args: {
    tools: NavigationItemsService.navigationItems,
    management: defaultManagement,
    orgs: defaultOrgs,
    notificationCenter: defaultNotificationCenter,
    navigationButtonItemOptions: {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('signing out!')
      },
    },
    onMpHomeClick: () => {
      alert('Going to mP!')
    },
  },

  argTypes: {
    notificationCenter: {
      content: {
        control: 'string',
        table: {
          type: { summary: 'ReactNode or RenderFunction to render the content' },
        },
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

const mpManagement: IGlobalNavigationItem[] = [
  {
    // disabled: true,
    label: 'Support',
    hideLabel: true,
    icon: <Icon name="support" />,
    type: 'menu',
    children: [
      { label: 'option 1', hrefOptions: { href: '/' } },
      { label: 'option 2', hrefOptions: { href: '/' } },
      { label: 'option 3', hrefOptions: { href: '/' } },
    ],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon name="settings" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Platform Settings' },
      { hrefOptions: { href: '/' }, label: 'User Settings' },
      {
        hrefOptions: { href: '/' },
        type: 'button',
        label: 'Switch to Legacy UI',
      },
    ],
  },
]

const mpOrgs: INavigationOrg[] = [
  {
    id: 'org1',
    label: 'Org 1',
    accounts: [
      {
        id: 'account1',
        label: 'Account 1',
        workspaces: [
          {
            id: 'workspace1',
            label: 'Workspace 1',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 1')
            },
          },
          {
            id: 'workspace1a',
            label: 'Workspace 1a',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 1a')
            },
          },
          {
            id: 'workspace1b',
            label: 'Workspace 1b',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 1b')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org2',
    label: 'Org 2',
    accounts: [
      {
        id: 'account2',
        label: 'Account 2',
        workspaces: [
          {
            id: 'workspace2',
            label: 'Workspace 2',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 2')
            },
          },
        ],
      },
      {
        id: 'account2a',
        label: 'Account 2a',
        workspaces: [
          {
            id: 'workspace2a',
            label: 'Workspace 2a',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 2')
            },
          },
          {
            id: 'workspace2ab',
            label: '_Workspace 2ab',
            isActive: true,
            onClick: () => {
              alert('Selected workspace 2')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org3',
    label: 'Org 3',
    accounts: [
      {
        id: 'account3',
        label: 'Account 3',
        workspaces: [
          {
            id: 'workspace3',
            label: 'Workspace 3',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 3')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org4',
    label: 'Org 4',
    accounts: [
      {
        id: 'account4',
        label: 'Account 4',
        workspaces: [
          {
            id: 'workspace4',
            label: 'Workspace 4',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 4')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org5',
    label: 'Org 5',
    accounts: [
      {
        id: 'account5',
        label: 'Account 5',
        workspaces: [
          {
            id: 'workspace5',
            label: 'Workspace 5',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 5')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org6',
    label: 'Org 6',
    accounts: [
      {
        id: 'account6',
        label: 'Account 6',
        workspaces: [
          {
            id: 'workspace6',
            label: 'Workspace 6',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 6')
            },
          },
        ],
      },
    ],
  },
  {
    id: 'org7',
    label: 'Org 7',
    accounts: [
      {
        id: 'account7',
        label: 'Account 7',
        workspaces: [
          {
            id: 'workspace7',
            label: 'Workspace 7',
            isActive: false,
            onClick: () => {
              alert('Selected workspace 7')
            },
          },
        ],
      },
    ],
  },
]

export const Unified: Story = {
  args: {
    showUnifiedNavigation: true,
    onSearchClick: () => {
      alert('Searching!')
    },
    tools: NavigationItemsService.navigationItems,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      alt: 'avatar',
    },
  },
}
