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
import { Modal } from 'antd'
import {
  type INotificationCenterProps,
  NotificationCenterZIndex,
} from 'src/components/navigation/GlobalNavigation/NotificationCenter'

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
  options: {
    open: false,
    content: (
      <div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    ),
  },
  actions: {
    onClose: () => {},
    onPreferencesClick: () => {},
  },
}

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Aquarium/Navigation/GlobalNavigationNotificationCenter',
  component: props => (
    <Center style={{ minHeight: '800px' }}>
      <GlobalNavigation {...props}></GlobalNavigation>
    </Center>
  ),

  args: {
    notificationCenter: defaultNotificationCenter,
  },
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const MP: Story = {
  render: props => {
    return (
      <div>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            options: {
              open: true,
              content: (
                <div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                </div>
              ),
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

export const MPWithLongContent: Story = {
  render: props => {
    return (
      <div>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            options: {
              open: true,
              content: (
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

export const MPWithToggleShow: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    return (
      <div>
        <GlobalNavigation
          {...props}
          notificationCenter={{
            options: {
              open: isNotificationCenterOpen,
              onOpenChange: (newOpen: boolean) => {
                setIsNotificationCenterOpen(newOpen)
              },
              content: (
                <div>
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

export const MPWithOpenModal: Story = {
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [zIndex, setZIndex] = useState<number>(NotificationCenterZIndex)
    return (
      <div>
        <Modal
          open={isModalOpen}
          maskClosable={false}
          destroyOnClose={true}
          onCancel={() => {
            setZIndex(NotificationCenterZIndex)
            setIsModalOpen(false)
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
            options: {
              open: isNotificationCenterOpen,
              zIndex: zIndex,
              onOpenChange: (newOpen: boolean) => {
                if (isModalOpen) {
                  return
                }
                setIsNotificationCenterOpen(newOpen)
              },
              content: (
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
