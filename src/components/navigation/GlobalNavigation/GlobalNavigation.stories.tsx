import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import { Center, GlobalNavigation, Icon } from 'src/components'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorItems'

const cdpPlatformManagement: IGlobalNavigationItem[] = [
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

const cdpPlatformOrgs: INavigationOrg[] = [
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
]

const cdpPlatformNavigationItems: IGlobalNavigationItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    type: 'link',
    icon: <Icon name="overview" variant="light" />,
    hrefOptions: { href: '/mp/overview' },
  },
  {
    id: 'oversight',
    label: 'Oversight',
    type: 'menu',
    icon: <Icon name="oversight" variant="light" />,
    children: [
      {
        id: 'oversight_systemAlerts',
        label: 'System Alerts',
        type: 'link',
        hrefOptions: { href: '/oversight/system-alerts' },
      },
      {
        id: 'oversight_observability',
        label: 'Observability',
        type: 'menu',
        children: [
          {
            id: 'oversight_observability_traceActivity',
            label: 'Trace Activity',
            type: 'link',
            hrefOptions: { href: '/oversight/observability/trace/activity' },
          },
          {
            id: 'oversight_observability_traceConfigurations',
            label: 'Trace Configurations',
            type: 'link',
            hrefOptions: { href: '/oversight/observability/trace/configurations' },
          },
        ],
      },
      {
        id: 'oversight_privacy',
        label: 'Privacy',
        type: 'menu',
        children: [
          {
            id: 'oversight_privacy_dsrs',
            label: 'Data Subject Requests',
            type: 'link',
            hrefOptions: { href: '/oversight/data-subject-requests' },
          },
          {
            id: 'oversight_privacy_privacySettings',
            label: 'Privacy Settings',
            type: 'link',
            hrefOptions: { href: '/oversight/privacy-settings' },
          },
        ],
      },
    ],
  },
  {
    id: 'dataPlatform',
    label: 'Data Platform',
    type: 'menu',
    icon: <Icon name="dataPlatform" variant="light" />,
    children: [
      {
        id: 'dataPlatform_trends',
        label: 'Trends',
        type: 'link',
        hrefOptions: { href: '/data-platform/trends' },
      },
      {
        id: 'dataPlatform_setup',
        label: 'Setup',
        type: 'menu',
        children: [
          {
            id: 'dataPlatform_setup_connections',
            label: 'Connections',
            type: 'link',
            hrefOptions: { href: '/data-platform/setup/connections' },
          },
          {
            id: 'dataPlatform_setup_inputs',
            label: 'Inputs',
            type: 'link',
            hrefOptions: { href: '/data-platform/setup/inputs' },
          },
          {
            id: 'dataPlatform_setup_outputs',
            label: 'Outputs',
            type: 'link',
            hrefOptions: { href: '/data-platform/setup/outputs' },
          },
          {
            id: 'dataPlatform_setup_directory',
            label: 'Directory',
            type: 'link',
            hrefOptions: { href: '/data-platform/setup/directory' },
          },
        ],
      },
      {
        id: 'dataPlatform_liveStream',
        label: 'Live Stream',
        type: 'link',
        hrefOptions: { href: '/data-platform/livestream' },
      },
      {
        id: 'dataPlatform_dataCatalog',
        label: 'Data Catalog',
        type: 'link',
        hrefOptions: { href: '/data-platform/data-catalog' },
      },
      {
        id: 'dataPlatform_transformations_rules',
        label: 'Rules',
        type: 'link',
        hrefOptions: { href: '/data-platform/transformations/rules' },
      },
      {
        id: 'dataPlatform_transformations_plans',
        label: 'Plans',
        type: 'link',
        hrefOptions: { href: '/data-platform/transformations/plans' },
      },
      {
        id: 'dataPlatform_transformations_filters',
        label: 'Filters',
        type: 'menu',
        children: [
          {
            id: 'dataPlatform_transformations_filters_platformFilters',
            label: 'Platform Filters',
            type: 'link',
            hrefOptions: { href: '/data-platform/transformations/filters/platform' },
          },
          {
            id: 'dataPlatform_transformations_filters_feedFilters',
            label: 'Feed Filters',
            type: 'link',
            hrefOptions: { href: '/data-platform/transformations/filters/feed' },
          },
        ],
      },
      {
        id: 'dataPlatform_eventForwarding',
        label: 'Event Forwarding',
        type: 'link',
        hrefOptions: { href: '/data-platform/event-forwarding' },
      },
    ],
  },
  {
    id: 'dataWarehouse',
    label: 'Data Warehouse',
    type: 'menu',
    icon: <Icon name="database" variant="light" />,
    children: [
      {
        id: 'dataWarehouse_connections',
        label: 'Connections',
        type: 'link',
        hrefOptions: { href: '/data-warehouse/activation/connections' },
      },
      {
        id: 'dataWarehouse_dataModels',
        label: 'Data Models',
        type: 'link',
        hrefOptions: { href: '/data-warehouse/activation/data-models' },
      },
      {
        id: 'dataWarehouse_pipelines',
        label: 'Pipelines',
        type: 'link',
        hrefOptions: { href: '/data-warehouse/activation/pipelines' },
      },
    ],
  },
  {
    id: 'customer360',
    label: 'Customer 360',
    type: 'menu',
    icon: <Icon name="C360" variant="light" />,
    children: [
      {
        id: 'customer360_userProfiles',
        label: 'User Profiles',
        type: 'link',
        hrefOptions: { href: '/customer-360/user-profile' },
      },
      {
        id: 'customer360_groupIdentity',
        label: 'Group Identity',
        type: 'link',
        hrefOptions: { href: '/customer-360/identity/group-identities' },
      },
      {
        id: 'customer360_enrichment_calculatedAttributes',
        label: 'Calculated Attributes',
        type: 'link',
        hrefOptions: { href: '/customer-360/enrichment/calculated-attributes' },
      },
      {
        id: 'customer360_enrichment_predictiveAttributes',
        label: 'Predictive Attributes',
        type: 'link',
        hrefOptions: { href: '/customer-360/enrichment/predictive-attributes' },
      },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    type: 'menu',
    icon: <Icon name="analytics" variant="light" />,
    children: [
      {
        id: 'analytics_myHub',
        label: 'My Hub',
        type: 'link',
        hrefOptions: { href: '#/info' },
      },
      {
        id: 'analytics_saved',
        label: 'Saved',
        type: 'link',
        hrefOptions: { href: '#/saved' },
      },
      {
        id: 'analytics_data',
        label: 'Data',
        type: 'link',
        hrefOptions: { href: '#/data' },
      },
      {
        id: 'analytics_favorites',
        label: 'Favorites',
        type: 'link',
        hrefOptions: { href: '#/saved/favorites' },
      },
    ],
  },
  {
    id: 'segmentation',
    label: 'Segmentation',
    type: 'menu',
    icon: <Icon name="audiences" variant="light" />,
    children: [
      {
        id: 'segmentation_journeys',
        label: 'Audiences',
        type: 'link',
        hrefOptions: { href: '/segmentation/journeys' },
      },
      {
        id: 'segmentation_audiences',
        label: 'Classic Audiences',
        type: 'menu',
        children: [
          {
            id: 'segmentation_audiences_standard',
            label: 'Standard Audiences',
            type: 'link',
            hrefOptions: { href: '/segmentation/audiences/standard' },
          },
          {
            id: 'segmentation_audiences_sharedByAccount',
            label: 'Shared Audiences',
            type: 'link',
            hrefOptions: { href: '/segmentation/audiences/sharedbyaccount' },
          },
          {
            id: 'segmentation_audiences_realTime',
            label: 'Real-time Audiences',
            type: 'link',
            hrefOptions: { href: '/segmentation/audiences/real-time' },
          },
        ],
      },
    ],
  },
]

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Components/Navigation/GlobalNavigation',
  component: props => (
    <Center style={{ minHeight: '800px' }}>
      <GlobalNavigation {...props}></GlobalNavigation>
    </Center>
  ),
  args: {
    showUnifiedNavigation: true,
    onSearchClick: () => {
      alert('Searching!')
    },
    tools: cdpPlatformNavigationItems,
    management: cdpPlatformManagement,
    orgs: cdpPlatformOrgs,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      alt: 'avatar',
    },
  },
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const CDPPlatformNavigation: Story = {}
