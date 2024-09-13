import { useState } from 'react'
import {
  Center,
  GlobalNavigation,
  Icon,
  type IGlobalNavigationItem,
  type IGlobalNavigationLogo,
  type INavigationOrg,
} from 'src/components'
import type { Meta, StoryObj } from '@storybook/react'

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

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Aquarium/Navigation/GlobalNavigationNotificationCenter',
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
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const MPWithDisabledInteractions: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    const management = [
      // {
      //   label: 'Notifications',
      //   hideLabel: true,
      //   icon: <Icon name="notification" />,
      //   type: 'link',
      //   isActive: false,
      //   onClick: () => {
      //     setIsNotificationCenterOpen(prev => !prev)
      //   },
      // } satisfies IGlobalNavigationLink,
      ...defaultManagement,
    ]
    return (
      <div>
        <GlobalNavigation
          {...props}
          notification={{
            options: {
              // open: true,
              open: isNotificationCenterOpen,
              onOpenChange: (newOpen: boolean) => {
                console.log(`change to ${newOpen}... It'll take a while first time :(`)
                setIsNotificationCenterOpen(newOpen)
              },
              content: (
                <div>
                  <div
                    onClick={() => {
                      alert('Close')
                    }}>
                    Content
                  </div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                </div>
              ),
            },
            actions: {
              onClose: () => {
                setIsNotificationCenterOpen(false)
              },
              onPreferencesClick: () => {
                setIsNotificationCenterOpen(false)
              },
            },
          }}
          logo={defaultLogo}
          tools={defaultTools}
          management={management}
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
