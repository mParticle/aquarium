import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, screen, userEvent } from '@storybook/test'
import React, { useState } from 'react'
import { Button, Center, Flex, GlobalNavigation, Icon, type INavigationCreateProps, Modal, Space } from 'src/components'
import { Badge } from 'src/components/data-display/Badge/Badge'
import {
  type IGlobalNavigationItem,
  type IGlobalNavigationLogo,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import {
  type INotificationCenterProps,
  NotificationCenterZIndex,
} from 'src/components/navigation/GlobalNavigation/NotificationCenter'
import { generateOrgs } from 'src/components/navigation/GlobalNavigation/stories-utils'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorItems'
import { useNewExperienceReminder } from 'src/hooks/NewExperienceReminder/useNewExperienceReminder'

const defaultLogo: IGlobalNavigationLogo = {
  label: 'Aqua',
  icon: <Icon name="alicorn" size="xxl" color="brand" />,
  type: 'custom-size',
  onSuiteLogoClick: () => {
    alert('Going to Aqua Home!')
  },
}

const defaultTools: IGlobalNavigationItem[] = [
  {
    label: 'Tool 1',
    isActive: true,
    icon: <Icon name="privacy" />,
    type: 'menu',
    children: [
      { label: 'option 1', hrefOptions: { href: '/' } },
      { label: 'option 2', hrefOptions: { href: '/' } },
      { label: 'option 3', hrefOptions: { href: '/' } },
    ],
  },
  {
    label: 'Tool 2',
    icon: <Icon name="favorite" />,
    type: 'menu',
    children: [
      { label: 'option 1', hrefOptions: { href: '/' } },
      { label: 'option 2', hrefOptions: { href: '/' } },
      { label: 'option 3', hrefOptions: { href: '/' } },
    ],
  },
  {
    label: 'Tool 3',
    icon: <Icon name="connections" />,
    hrefOptions: { href: '/' },
  },
]

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
  content: () => <div></div>,
  onClose: () => {},
  onPreferencesClick: () => {},
}

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Components/Navigation/GlobalNavigation',
  component: props => (
    <Center style={{ minHeight: '800px' }}>
      <GlobalNavigation {...props}></GlobalNavigation>
    </Center>
  ),

  args: {
    logo: defaultLogo,
    tools: defaultTools,
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

export const Primary: Story = {
  // This would benefit from test IDs, we have a future task to do that.
  play: async ({ canvasElement }) => {
    const menuItem = canvasElement.querySelector('li.globalNavigation__item')
    if (!menuItem) throw new Error('Menu item not found')

    const nullAnchorEl = menuItem.querySelector('a')
    await expect(nullAnchorEl).toBeNull()

    const linkItem = canvasElement.querySelector('.globalNavigation__link')
    if (!linkItem) throw new Error('Link item not found')

    await expect(linkItem.computedStyleMap().get('cursor')?.toString()).toBe('pointer')

    const anchorEl = linkItem.parentElement
    await expect(anchorEl).toBeTruthy()
    await expect(anchorEl).toHaveProperty('href')
  },
}

const mpLogo: IGlobalNavigationLogo = {
  label: 'Data Platform',
  icon: <Icon name="dataPlatform" />,
}

const mpLogoWithBackground: IGlobalNavigationLogo = {
  label: 'Overview',
  icon: 'overview',
  type: 'background-solid',
  onSuiteLogoClick: () => {
    alert('Going to mP Home!')
  },
}

const mpLogoWithoutCustomSizeLogo: IGlobalNavigationLogo = {
  label: 'Data Platform',
  icon: 'catalog',
  type: 'default',
  onSuiteLogoClick: () => {
    alert('Going to mP Home!')
  },
}

function Beta(label: string) {
  return (
    <Space>
      {label}
      <Badge color="blue" count="Beta" className="globalNavigation__badge" />
    </Space>
  )
}

const mpTools: IGlobalNavigationItem[] = [
  {
    label: 'Activity',
    icon: <Icon name="trends" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Platform Trends' },
      {
        hrefOptions: { href: '/' },
        label: (
          <Space>
            System Alerts
            <Badge color="red" />
          </Space>
        ),
      },
      { hrefOptions: { href: '/' }, label: 'Event Forwarding' },
      { hrefOptions: { href: '/' }, label: Beta('Observability') },
    ],
  },
  {
    label: 'Data Master',
    icon: <Icon name="database" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Catalog' },
      { hrefOptions: { href: '/' }, label: 'Plans' },
      { hrefOptions: { href: '/' }, label: 'Live Stream' },
      { hrefOptions: { href: '/' }, label: Beta('User Groups') },
      { hrefOptions: { href: '/' }, label: 'Calculated Attributes' },
      { hrefOptions: { href: '/' }, label: 'Rules' },
    ],
  },
  {
    label: 'Audiences',
    icon: <Icon name="users" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Real-time' },
      { hrefOptions: { href: '/' }, label: 'Standard' },
      { hrefOptions: { href: '/' }, label: 'Journeys' },
    ],
  },
  {
    label: 'Connections',
    icon: <Icon name="connections" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Connect' },
      { hrefOptions: { href: '/' }, label: 'Platform Filters' },
      { hrefOptions: { href: '/' }, label: 'Feed Filters' },
    ],
  },
  {
    label: 'Setup',
    icon: <Icon name="setup" />,
    type: 'menu',
    children: [
      { hrefOptions: { href: '/' }, label: 'Inputs' },
      { hrefOptions: { href: '/' }, label: 'Outputs' },
      { hrefOptions: { href: '/' }, label: 'Data Warehouse' },
      { hrefOptions: { href: '/' }, label: 'CRM' },
    ],
  },
  {
    label: 'Directory',
    icon: <Icon name="myHub" />,
    hrefOptions: { href: '/' },
  },
]

const mpManagement: IGlobalNavigationItem[] = [
  {
    isActive: true,
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

export const MP: Story = {
  args: {
    onSearchClick: () => {
      alert('Searching!')
    },
    logo: mpLogo,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        alert(link.href)
      },
      onUnauthorizedClick: link => {
        alert(`unauthorized ${link?.href} `)
      },
      unauthorizedLinks: ['dataPlatform'],
      activeLink: 'oversight',
      links: [
        { linkId: 'oversight', href: '/oversight' },
        { linkId: 'dataPlatform', href: '/data-platform' },
        { linkId: 'customer360', href: '/customer-360' },
        { linkId: 'predictions', href: '/predictions' },
        { linkId: 'analytics', href: '/analytics' },
        { linkId: 'segmentation', href: '/segmentation' },
      ],
    },
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      alt: 'avatar',
    },
  },
}

const thousandOrgs = generateOrgs(1000, 4, 4)

export const MPThousandOrgs: Story = {
  render: props => {
    return (
      <div style={{ width: 800 }}>
        <GlobalNavigation
          {...props}
          onSearchClick={() => {
            alert('Searching!')
          }}
          logo={mpLogo}
          tools={mpTools}
          management={mpManagement}
          orgs={thousandOrgs}
          onMpHomeClick={() => {
            alert('going to overview map')
          }}
        />
      </div>
    )
  },
}

const indLogo: IGlobalNavigationLogo = {
  label: 'Analytics',
  icon: <Icon name="analytics" />,
  onSuiteLogoClick: () => {
    alert('Going to Analytics Home!')
  },
}

const indTools: IGlobalNavigationItem[] = [
  {
    label: 'My Hub',
    icon: <Icon name="myHub" />,
    isActive: true,
    hrefOptions: { href: '/' },
  },
  {
    label: 'Saved',
    icon: <Icon name="savedProjects" />,
    hrefOptions: { href: '/' },
  },
  {
    label: 'Manage Data',
    icon: <Icon name="database" />,
    hrefOptions: { href: '/' },
  },
]

const indManagement: IGlobalNavigationItem[] = [
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
    ],
  },
]

const indCreateItems: INavigationCreateProps['createItems'] = [
  {
    type: 'group',
    label: 'Dashboard',
  },
  {
    title: 'Dashboard',
    description: 'Create a new dashboard to organize your saved analysis.',
    onClick: () => {
      alert('Opening New Dashboard Modal')
    },
  },

  {
    label: 'Segmentation',
    type: 'group',
  },
  {
    onClick: () => {
      alert('clicked')
    },
    title: 'Event Segmentation',
    description: 'Measure engagement based on behaviors and attributes.',
  },
  {
    disabled: true,
    tooltip: 'is disabled',
    onClick: () => {
      alert('clicked disabled')
    },
    title: 'User Segmentation',
    description: 'Measure unique users based on behaviors and attributes.',
  },
  {
    title: 'Revenue Analysis',
    description: 'Track revenue over time.',
  },
  {
    title: 'Frequency',
    description: 'Analyze how many distinct times an event is performed within a given interval.',

    tooltip: 'This feature is currently locked',
    onClick: () => {
      alert('Opening paywall modal.')
    },
    isLocked: true,
  },

  {
    label: 'Funnel',
    type: 'group',
  },
  {
    title: 'Conversion and Drop Off',
    description: 'Identify points of friction between funnel steps.',
  },
  {
    title: 'Multipath Funnel',
    description: 'Analyze multiple customer paths to identify the optimal path to conversion.',
  },
  {
    title: 'Conversion Over Time',
    description: 'Track key conversion metrics over time.',
  },
  {
    title: 'Contribution',
    description: "Reverse the funnel to measure each step's contribution to the target action.",
  },

  {
    label: 'Journeys',
    type: 'group',
  },
  {
    isLoading: true,
    tooltip: 'Journeys data is loading, please check back later.',
    title: 'Journeys From an Event',
    description: 'Discover the most common paths users take from a starting point.',
  },
  {
    title: 'Journeys To an Event',
    description: 'Discover the most common paths users take towards a target action.',
  },

  {
    label: 'Cohort',
    type: 'group',
  },
  {
    title: 'Retention',
    description: 'Analyze how often user cohorts return to engage with a target action.',
  },
  {
    title: 'Activation',
    description: 'Analyze when user cohorts engage with a target action for the first time.',
  },

  {
    label: 'Users',
    type: 'group',
  },
  {
    title: 'User Lookup by ID',
    description: 'Find a user by searching for their User ID.',
  },
  {
    title: 'User Lookup by Event',
    description: 'Display a list of users who performed an event.',
  },
  {
    title: 'User Lookup by Segment',
    description: 'Display a list of users who are in a particular User Segment.',
  },
]

const indOrgs: INavigationOrg[] = [
  {
    id: 'org1',
    label: 'Org 1',
    accounts: [
      {
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 1',
            label: 'Project 1',
            isActive: false,
            onClick: () => {
              alert('Selected project 1')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 2',
            label: 'Project2Project2Project2Project2Project2Project2',
            isActive: true,
            onClick: () => {
              alert('Selected project 2')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 3',
            label: 'Project 3',
            isActive: false,
            onClick: () => {
              alert('Selected project 3')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 4',
            label: 'Project 4',
            isActive: false,
            onClick: () => {
              alert('Selected project 4')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 5',
            label: 'Project 5',
            isActive: false,
            onClick: () => {
              alert('Selected project 5')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 6',
            label: 'Project 6',
            isActive: false,
            onClick: () => {
              alert('Selected project 6')
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
        id: '',
        label: '',
        workspaces: [
          {
            id: 'project 7',
            label: 'Project 7',
            isActive: false,
            onClick: () => {
              alert('Selected project 7')
            },
          },
        ],
      },
    ],
  },
]

export const Indicative: Story = {
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
    orgs: indOrgs,
    navigationButtonItemOptions: {
      label: 'Custom Signout Label',
      onClick: () => {
        alert('Signout!')
      },
    },
    onMpHomeClick: () => {
      alert('going to overview map')
    },
  },
}

export const IndicativeWithSuiteSwitcher: Story = {
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
    orgs: indOrgs,
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        if (link.linkId !== 'analytics') alert(link.href)
      },
      links: [
        { linkId: 'oversight', href: '/oversight' },
        { linkId: 'dataPlatform', href: '/data-platform' },
        { linkId: 'customer360', href: '/customer-360' },
        { linkId: 'predictions', href: '/predictions' },
        { linkId: 'analytics', href: '/analytics' },
        { linkId: 'segmentation', href: '/segmentation' },
      ],
      activeLink: 'analytics',
    },
    navigationButtonItemOptions: {
      label: 'Custom Signout Label',
      onClick: () => {
        alert('Signout!')
      },
    },
    onMpHomeClick: () => {
      alert('going to overview map')
    },
  },
}

const cortexLogo: IGlobalNavigationLogo = {
  label: 'Predictions',
  icon: 'predictions',
  type: 'background-solid',
  onSuiteLogoClick: () => {
    alert('Going to Predictions Home!')
  },
}

const cortexTools: IGlobalNavigationItem[] = [
  {
    label: 'Pipelines',
    icon: <Icon name="predictions" variant="duo-tone" />,
    hrefOptions: { href: '/' },
  },
  {
    label: 'Projects',
    icon: <Icon name="journeys" />,
    hrefOptions: { href: '/' },
    isActive: true,
  },
  {
    label: 'Data',
    icon: <Icon name="database" />,
    hrefOptions: { href: '/' },
  },
  {
    label: 'API',
    icon: <Icon name="predictions" variant="duo-tone" />,
    hrefOptions: { href: '/' },
  },
  {
    label: 'Insights',
    icon: <Icon name="insights" />,
    hrefOptions: { href: '/' },
  },
]

const cortexManagement: IGlobalNavigationItem[] = [
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
    ],
  },
]

const cortexOrgs: INavigationOrg[] = [
  {
    id: '',
    label: '',
    accounts: [
      {
        id: '',
        label: '',
        workspaces: [
          {
            id: 'Account 1',
            label: 'Account 1',
            onClick: () => {
              alert('Selected Account 1')
            },
            isActive: false,
          },
        ],
      },
    ],
  },
  {
    id: '',
    label: '',
    accounts: [
      {
        id: '',
        label: '',
        workspaces: [
          {
            id: 'Account 2',
            label: 'Account 2',
            onClick: () => {
              alert('Selected Account 2')
            },
            isActive: true,
          },
        ],
      },
    ],
  },
  {
    id: '',
    label: '',
    accounts: [
      {
        id: '',
        label: '',
        workspaces: [
          {
            id: 'Account 3',
            label: 'Account 3',
            onClick: () => {
              alert('Selected Account 3')
            },
            isActive: false,
          },
        ],
      },
    ],
  },
  {
    id: '',
    label: '',
    accounts: [
      {
        id: '',
        label: '',
        workspaces: [
          {
            id: 'Account 4',
            label: 'Account 4',
            onClick: () => {
              alert('Selected Account 4')
            },
            isActive: false,
          },
        ],
      },
    ],
  },
]

export const Cortex: Story = {
  args: {
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
    orgs: cortexOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    navigationButtonItemOptions: {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('onSignout click')
      },
    },
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        if (link.linkId !== 'predictions') alert(link.href)
      },
      links: [
        { linkId: 'oversight', href: '/oversight' },
        { linkId: 'dataPlatform', href: '/data-platform' },
        { linkId: 'customer360', href: '/customer-360' },
        { linkId: 'predictions', href: '/predictions' },
        { linkId: 'analytics', href: '/analytics' },
        { linkId: 'segmentation', href: '/segmentation' },
      ],
      activeLink: 'predictions',
    },
  },
}

export const WorkspaceSearchWithNoResults: Meta<typeof GlobalNavigation> = {
  args: {
    orgs: mpOrgs,
  },
  play: async () => {
    const workspaceSelector = screen.getByText('_W2')
    await userEvent.hover(workspaceSelector)

    const searchInput = await screen.findByPlaceholderText('Search')
    await userEvent.type(searchInput, '123{enter}')
  },
}

export const UseNewExperienceReminderHook: Story = {
  play: async () => {
    const alert = fn().mockImplementation(() => {})
    global.alert = alert

    const showNotificationBtn = screen.getByText('Show Notification')
    await userEvent.click(showNotificationBtn)

    // Remind me later
    const remindMeLaterBtn = await screen.findByText('Remind me later')
    await userEvent.click(remindMeLaterBtn)

    await expect(alert).toBeCalledWith('Remind me later')

    // Take me there
    await userEvent.click(showNotificationBtn)

    const takeMeThereBtn = await screen.findByText('Take me there')
    await userEvent.click(takeMeThereBtn)

    await expect(alert).toBeCalledWith('Take me there')
  },
  render: props => {
    const [openNotification, contextHolder] = useNewExperienceReminder({
      onClose: () => {
        alert('Notification closed')
      },
      onRemindMeLater: () => {
        alert('Remind me later')
      },
      onTakeMeThere: () => {
        alert('Take me there')
      },
    })

    return (
      <Flex style={{ minHeight: 800, width: 600, border: '1px solid black' }} justify="space-between" vertical={false}>
        {contextHolder}
        <div>
          <GlobalNavigation {...props}></GlobalNavigation>
        </div>
        <Button onClick={openNotification}>Show Notification</Button>
      </Flex>
    )
  },
  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
    orgs: defaultOrgs,
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
}

export const MPWithoutLogo: Story = {
  args: {
    onSearchClick: () => {
      alert('Searching!')
    },
    logo: {
      onSuiteLogoClick: () => {},
      label: '',
    },
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar',
    },
    showSuiteLogo: false,
  },
}

export const MPWithBackgroundLogo: Story = {
  args: {
    onSearchClick: () => {
      alert('Searching!')
    },
    logo: mpLogoWithBackground,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar',
    },
    showSuiteLogo: true,
  },
}

export const MPWithoutCustomSizeLogo: Story = {
  args: {
    onSearchClick: () => {
      alert('Searching!')
    },
    logo: mpLogoWithoutCustomSizeLogo,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar',
    },
    showSuiteLogo: true,
  },
}

export const MPWithNavSwitcherTour: Story = {
  render: () => {
    const [open, setOpen] = useState<boolean>(false)

    const navigationButtonItemOptions = {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('Signout!')
      },
    }

    const mpLogoWithTour: IGlobalNavigationLogo = {
      label: 'Data Platform',
      icon: 'catalog',
      type: 'background-solid',
      onSuiteLogoClick: () => {
        setOpen(currentOpen => !currentOpen)
      },
      navSwitcherTourOptions: {
        open,
        onClose: () => {
          setOpen(false)
        },
      },
    }

    return (
      <div style={{ width: 800 }}>
        <GlobalNavigation
          onSearchClick={() => {
            alert('Searching!')
          }}
          logo={mpLogoWithTour}
          tools={mpTools}
          management={mpManagement}
          orgs={mpOrgs}
          onMpHomeClick={() => {
            alert('going to overview map')
          }}
          navigationButtonItemOptions={navigationButtonItemOptions}
        />
      </div>
    )
  },
}

export const MPWithSuiteSelector: Story = {
  args: {
    onSearchClick: () => {
      alert('Searching!')
    },
    logo: mpLogoWithBackground,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar',
    },
    showSuiteLogo: true,
    suiteSelectorOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        alert(link.href)
      },
      onUnauthorizedClick: link => {
        alert(`unauthorized ${link?.href} `)
      },
      unauthorizedLinks: ['dataPlatform'],
      activeLink: 'oversight',
      links: [
        { linkId: 'oversight', href: '/oversight' },
        { linkId: 'dataPlatform', href: '/data-platform' },
        { linkId: 'customer360', href: '/customer-360' },
        { linkId: 'predictions', href: '/predictions' },
        { linkId: 'analytics', href: '/analytics' },
        { linkId: 'segmentation', href: '/segmentation' },
      ],
    },
  },
}

export const MPWithNotificationCenter: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    return (
      <div>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            open: isNotificationCenterOpen,
            onOpenChange: (newOpen: boolean) => {
              setIsNotificationCenterOpen(newOpen)
            },
            content: () => (
              <div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
              </div>
            ),
          }}
          logo={defaultLogo}
          tools={defaultTools}
          management={defaultManagement}
          orgs={defaultOrgs}
          showSuiteLogo={true}
          onSearchClick={() => {
            alert('Searching!')
          }}
          suiteSelectorOptions={{
            overviewHref: '/',
            onLinkClick: link => {
              alert(link.href)
            },
            onUnauthorizedClick: link => {
              alert(`unauthorized ${link?.href} `)
            },
            unauthorizedLinks: ['dataPlatform'],
            activeLink: 'oversight',
            links: [
              { linkId: 'oversight', href: '/oversight' },
              { linkId: 'dataPlatform', href: '/data-platform' },
              { linkId: 'customer360', href: '/customer-360' },
              { linkId: 'predictions', href: '/predictions' },
              { linkId: 'analytics', href: '/analytics' },
              { linkId: 'segmentation', href: '/segmentation' },
            ],
          }}
        />
      </div>
    )
  },
}

export const MPWithNotificationCenterLongContent: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    return (
      <div>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            open: isNotificationCenterOpen,
            onOpenChange: (newOpen: boolean) => {
              setIsNotificationCenterOpen(newOpen)
            },
            content: () => (
              <div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content End</div>
              </div>
            ),
          }}
          logo={defaultLogo}
          tools={defaultTools}
          management={defaultManagement}
          orgs={defaultOrgs}
          showSuiteLogo={true}
          onSearchClick={() => {
            alert('Searching!')
          }}
          suiteSelectorOptions={{
            overviewHref: '/',
            onLinkClick: link => {
              alert(link.href)
            },
            onUnauthorizedClick: link => {
              alert(`unauthorized ${link?.href} `)
            },
            unauthorizedLinks: ['dataPlatform'],
            activeLink: 'oversight',
            links: [
              { linkId: 'oversight', href: '/oversight' },
              { linkId: 'dataPlatform', href: '/data-platform' },
              { linkId: 'customer360', href: '/customer-360' },
              { linkId: 'predictions', href: '/predictions' },
              { linkId: 'analytics', href: '/analytics' },
              { linkId: 'segmentation', href: '/segmentation' },
            ],
          }}
        />
      </div>
    )
  },
}

export const MPWithNotificationCenterMessageModal: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [zIndex, setZIndex] = useState(NotificationCenterZIndex)
    return (
      <div>
        <Modal
          open={isModalOpen}
          maskClosable={false}
          destroyOnClose={true}
          onCancel={() => {
            setIsModalOpen(false)
          }}
          onOk={() => {
            setIsModalOpen(false)
          }}
          afterClose={() => {
            setZIndex(NotificationCenterZIndex)
          }}
          centered={true}>
          <div>
            <p>Message Title</p>
            <p>Message Description</p>
          </div>
        </Modal>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            open: isNotificationCenterOpen,
            zIndex: zIndex,
            onOpenChange: (newOpen: boolean) => {
              if (isModalOpen) {
                return
              }
              setIsNotificationCenterOpen(newOpen)
            },
            content: () => (
              <div>
                <div
                  onClick={() => {
                    setZIndex(0)
                    setIsModalOpen(true)
                  }}>
                  Open Modal
                </div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
              </div>
            ),
            onClose: () => {
              setIsNotificationCenterOpen(false)
            },
            onPreferencesClick: () => {
              setIsNotificationCenterOpen(false)
            },
          }}
          logo={defaultLogo}
          tools={defaultTools}
          management={defaultManagement}
          orgs={defaultOrgs}
          showSuiteLogo={true}
          onSearchClick={() => {
            alert('Searching!')
          }}
          suiteSelectorOptions={{
            overviewHref: '/',
            onLinkClick: link => {
              alert(link.href)
            },
            onUnauthorizedClick: link => {
              alert(`unauthorized ${link?.href} `)
            },
            unauthorizedLinks: ['dataPlatform'],
            activeLink: 'oversight',
            links: [
              { linkId: 'oversight', href: '/oversight' },
              { linkId: 'dataPlatform', href: '/data-platform' },
              { linkId: 'customer360', href: '/customer-360' },
              { linkId: 'predictions', href: '/predictions' },
              { linkId: 'analytics', href: '/analytics' },
              { linkId: 'segmentation', href: '/segmentation' },
            ],
          }}
        />
      </div>
    )
  },
}
