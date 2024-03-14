import React from 'react'
import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import {
  ChartLineIcon,
  ConnectionsIcon,
  DatabaseIcon,
  GearIcon,
  GlobalNavigation,
  GridIcon,
  MessageQuestionIcon,
  UsersIcon,
  WrenchIcon,
  MpLogoIcon,
} from 'src/components'
import { Space } from 'src/components'
import { Center } from 'src/components'
import { Button } from 'src/components'
import { type INavigationCreateProps } from 'src/components'
import { FolderClosedIcon } from 'src/components'
import { ShieldKeyholeIcon } from 'src/components'
import { HeartIcon } from 'src/components'
import { AlicornIcon } from 'src/components'
import { CloudIcon } from 'src/components'
import { Badge } from 'src/components/data-display/Badge/Badge'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorItems'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { SparklesIcon } from 'src/components'
import { CircleNodesIcon } from 'src/components'
import { SplitIcon } from 'src/components'
import { LightBulbIcon } from 'src/components'
import { generateOrgs } from 'src/components/navigation/GlobalNavigation/stories-utils'

const defaultLogo: IGlobalNavigationLogo = {
  label: 'Aqua',
  icon: <AlicornIcon />,
  onSuiteLogoClick: () => {
    alert('Going to Aqua Home!')
  },
}
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: 'Tool 1',
    isActive: true,
    icon: <ShieldKeyholeIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Tool 2',
    icon: <HeartIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Tool 3',
    icon: <ConnectionsIcon />,
    type: 'link',
  },
]
const defaultManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Notifications',
    hideLabel: true,
    icon: <CloudIcon />,
    type: 'link',
  },
  {
    label: 'Support',
    hideLabel: true,
    icon: <MessageQuestionIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <GearIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
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
            label: 'Workspace 1',
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
  title: 'Aquarium/Navigation/GlobalNavigation',
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
    signoutOptions: {
      onSignout: () => {
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

export const Primary: Story = {}

const mpLogo: IGlobalNavigationLogo = {
  label: 'Data Platform',
  icon: <MpLogoIcon />,
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

const mpTools: IGlobalNavigationTool[] = [
  {
    label: 'Activity',
    icon: <ChartLineIcon />,
    type: 'menu',
    children: [
      { label: 'Platform Trends' },
      {
        label: (
          <Space>
            System Alerts
            <Badge color="red" />
          </Space>
        ),
      },
      { label: 'Event Forwarding' },
      { label: Beta('Observability') },
    ],
  },
  {
    label: 'Data Master',
    icon: <DatabaseIcon />,
    type: 'menu',
    children: [
      { label: 'Catalog' },
      { label: 'Plans' },
      { label: 'Live Stream' },
      { label: Beta('User Groups') },
      { label: 'Calculated Attributes' },
      { label: 'Rules' },
    ],
  },
  {
    label: 'Audiences',
    icon: <UsersIcon />,
    type: 'menu',
    children: [{ label: 'Real-time' }, { label: 'Standard' }, { label: 'Journeys' }],
  },
  {
    label: 'Connections',
    icon: <ConnectionsIcon />,
    type: 'menu',
    children: [{ label: 'Connect' }, { label: 'Platform Filters' }, { label: 'Feed Filters' }],
  },
  {
    label: 'Setup',
    icon: <WrenchIcon />,
    type: 'menu',
    children: [{ label: 'Inputs' }, { label: 'Outputs' }, { label: 'Data Warehouse' }, { label: 'CRM' }],
  },
  {
    label: 'Directory',
    icon: <GridIcon />,
    type: 'link',
  },
]
const mpManagement: IGlobalNavigationManagement[] = [
  {
    isActive: true,
    label: 'Support',
    hideLabel: true,
    icon: <MessageQuestionIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <GearIcon />,
    type: 'menu',
    children: [
      { label: 'Platform Settings' },
      { label: 'User Settings' },
      { label: <Button type="primary">Switch to Legacy UI</Button> },
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
    onMpHomeClick: () => {
      alert('going to overview map')
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
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
  icon: <MpLogoIcon />,
  onSuiteLogoClick: () => {
    alert('Going to Analytics Home!')
  },
}
const indTools: IGlobalNavigationTool[] = [
  {
    label: 'My Hub',
    icon: <GridIcon />,
    type: 'link',
    isActive: true,
  },
  {
    label: 'Saved',
    icon: <FolderClosedIcon />,
    type: 'link',
  },
  {
    label: 'Manage Data',
    icon: <DatabaseIcon />,
    type: 'link',
  },
]
const indManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Support',
    hideLabel: true,
    icon: <MessageQuestionIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <GearIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
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
    signoutOptions: {
      label: 'Custom Signout Label',
      onSignout: () => {
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
  icon: <SparklesIcon />,
  onSuiteLogoClick: () => {
    alert('Going to Predictions Home!')
  },
}
const cortexTools: IGlobalNavigationTool[] = [
  {
    label: 'Pipelines',
    icon: <CircleNodesIcon />,
    type: 'link',
  },
  {
    label: 'Projects',
    icon: <SplitIcon />,
    type: 'link',
    isActive: true,
  },
  {
    label: 'Data',
    icon: <DatabaseIcon />,
    type: 'link',
  },
  {
    label: 'API',
    icon: <CloudIcon />,
    type: 'link',
  },
  {
    label: 'Insights',
    icon: <LightBulbIcon />,
    type: 'link',
  },
]
const cortexManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Support',
    hideLabel: true,
    icon: <MessageQuestionIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <GearIcon />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
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
    signoutOptions: undefined,
    onMpHomeClick: () => {
      alert('going to overview map')
    },
  },
}