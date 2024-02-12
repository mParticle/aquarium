import {
  faTools,
  faPersonWalkingDashedLineArrowRight,
  faAudioDescription,
  faBell,
  faLifeRing,
  faGear,
  faFishFins,
  faDatabase,
  faPeopleGroup,
  faDiagramPredecessor,
  faRoadSpikes,
  faPaintbrush,
  faPizzaSlice,
  faPingPongPaddleBall,
} from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faBlenderPhone } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faArrowsToDot } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faKitchenSet } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faBoxes } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faShapes } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faHome } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { faSave } from '@awesome.me/kit-f3b115a3e2/icons/classic/light'
import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { GlobalNavigation } from 'src/components'
import { Space } from 'src/components'
import { Button } from 'src/components'
import { type INavigationCreateProps } from 'src/components'
import { Badge } from 'src/components/data-display/Badge/Badge'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { Icon } from 'src/components/general/Icon/Icon'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'

const defaultLogo: IGlobalNavigationLogo = {
  label: 'Aqua',
  icon: <Icon icon={faFishFins} />,
}
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: 'Tool 1',
    isActive: true,
    icon: <Icon icon={faTools} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Tool 2',
    icon: <Icon icon={faPersonWalkingDashedLineArrowRight} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Tool 3',
    icon: <Icon icon={faAudioDescription} />,
    type: 'link',
  },
]
const defaultManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Notifications',
    hideLabel: true,
    icon: <Icon icon={faBell} />,
    type: 'link',
  },
  {
    label: 'Support',
    hideLabel: true,
    icon: <Icon icon={faLifeRing} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon icon={faGear} />,
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
            onClick: e => {
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
  component: props => <GlobalNavigation {...props}></GlobalNavigation>,

  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
    orgs: defaultOrgs,
  },
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const Primary: Story = {}

const mpLogo: IGlobalNavigationLogo = {
  label: 'Data Platform',
  icon: <Icon icon={faShapes} />,
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
    icon: <Icon icon={faBlenderPhone} />,
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
    icon: <Icon icon={faDatabase} />,
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
    icon: <Icon icon={faPeopleGroup} />,
    type: 'menu',
    children: [{ label: 'Real-time' }, { label: 'Standard' }, { label: 'Journeys' }],
  },
  {
    label: 'Observability',
    icon: <Icon icon={faArrowsToDot} />,
    type: 'menu',
    children: [
      { label: 'Connect' },
      {
        label: 'Filter',
        children: [{ label: 'Platforms' }, { label: 'Feeds' }],
      },
    ],
  },
  {
    label: 'Setup',
    icon: <Icon icon={faKitchenSet} />,
    type: 'menu',
    children: [{ label: 'Inputs' }, { label: 'Outputs' }, { label: 'Data Warehouse' }, { label: 'CRM' }],
  },
  {
    label: 'Directory',
    icon: <Icon icon={faBoxes} />,
    type: 'link',
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
            onClick: e => {
              alert('Selected workspace 1')
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
            isActive: true,
            onClick: e => {
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
            onClick: e => {
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
            onClick: e => {
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
            onClick: e => {
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
            onClick: e => {
              alert('Selected workspace 6')
            },
          },
        ],
      },
    ],
  },
]
const mpManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Notifications',
    hideLabel: true,
    icon: <Icon icon={faBell} />,
    type: 'link',
  },
  {
    isActive: true,
    label: 'Support',
    hideLabel: true,
    icon: <Icon icon={faLifeRing} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon icon={faGear} />,
    type: 'menu',
    children: [
      { label: 'Platform Settings' },
      { label: 'User Settings' },
      { label: <Button type="primary">Switch to Legacy UI</Button> },
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
    onMpHomeClick:() => { alert('going to overview map') }
  },
}

const indLogo: IGlobalNavigationLogo = {
  label: 'Analytics',
  icon: <Icon icon={faShapes} />,
}
const indTools: IGlobalNavigationTool[] = [
  {
    label: 'My Hub',
    icon: <Icon icon={faHome} />,
    type: 'link',
    isActive: true,
  },
  {
    label: 'Saved',
    icon: <Icon icon={faSave} />,
    type: 'link',
  },
  {
    label: 'Manage Data',
    icon: <Icon icon={faDatabase} />,
    type: 'link',
  },
]
const indManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Support',
    hideLabel: true,
    icon: <Icon icon={faLifeRing} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon icon={faGear} />,
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
    title: 'Event Segmentation',
    description: 'Measure engagement based on behaviors and attributes.',
  },
  {
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
    isPaywalled: true,
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
            id: 'project',
            label: 'project 1',
            isActive: false,
            onClick: e => {
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
            id: 'project',
            label: 'project 2',
            isActive: true,
            onClick: e => {
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
            id: 'project',
            label: 'project 3',
            isActive: false,
            onClick: e => {
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
            id: 'project',
            label: 'project 4',
            isActive: false,
            onClick: e => {
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
            id: 'project',
            label: 'project 5',
            isActive: false,
            onClick: e => {
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
            id: 'project',
            label: 'project 6',
            isActive: false,
            onClick: e => {
              alert('Selected project 6')
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
    onMpHomeClick:() => { alert('going to overview map') }
  },
}

const cortexLogo: IGlobalNavigationLogo = {
  label: 'Predictions',
  icon: <Icon icon={faShapes} />,
}
const cortexTools: IGlobalNavigationTool[] = [
  {
    label: 'Pipelines',
    icon: <Icon icon={faPizzaSlice} />,
    type: 'link',
  },
  {
    label: 'Projects',
    icon: <Icon icon={faDiagramPredecessor} />,
    type: 'link',
    isActive: true,
  },
  {
    label: 'Data',
    icon: <Icon icon={faPingPongPaddleBall} />,
    type: 'link',
  },
  {
    label: 'API',
    icon: <Icon icon={faRoadSpikes} />,
    type: 'link',
  },
  {
    label: 'Insights',
    icon: <Icon icon={faPaintbrush} />,
    type: 'link',
  },
]
const cortexManagement: IGlobalNavigationManagement[] = [
  {
    label: 'Support',
    hideLabel: true,
    icon: <Icon icon={faLifeRing} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <Icon icon={faGear} />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
]
export const Cortex: Story = {
  args: {
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
    onMpHomeClick:() => { alert('going to overview map') }
  },
}