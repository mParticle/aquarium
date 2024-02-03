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
  faChartBar,
  faJournalWhills,
  faUsers,
  faChartSimple,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons'
import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { faBoxes } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { GlobalNavigation } from 'src/components'
import { Space } from 'src/components'
import { Flex } from 'src/components'
import { Avatar } from 'src/components'
import { Button } from 'src/components'
import { Badge } from 'src/components/data-display/Badge/Badge'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { Icon } from 'src/components/general/Icon/Icon'
import { type MenuItemType } from 'antd/es/menu/hooks/useItems'
import { type MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector'

const defaultLogo: IGlobalNavigationLogo = {
  label: 'Aqua',
  icon: <Icon icon={faFishFins} />,
}
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: 'Tool 1',
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
  {
    label: 'Account',
    hideLabel: true,
    icon: <Avatar>WS</Avatar>,
    type: 'link',
  },
]

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Aquarium/Navigation/GlobalNavigation',
  component: props => <GlobalNavigation {...props}></GlobalNavigation>,

  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
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
    accounts: [{ id: 'account1', label: 'Account 1', workspaces: [{ id: 'workspace1', label: 'workspace 1' }] }],
  },
  {
    id: 'org2',
    label: 'Org 2',
    accounts: [{ id: 'account2', label: 'Account 2', workspaces: [{ id: 'workspace2', label: 'workspace 2' }] }],
  },
  {
    id: 'org3',
    label: 'Org 3',
    accounts: [{ id: 'account3', label: 'Account 3', workspaces: [{ id: 'workspace3', label: 'workspace 3' }] }],
  },
  {
    id: 'org4',
    label: 'Org 4',
    accounts: [{ id: 'account4', label: 'Account 4', workspaces: [{ id: 'workspace4', label: 'workspace 4' }] }],
  },
  {
    id: 'org5',
    label: 'Org 5',
    accounts: [{ id: 'account5', label: 'Account 5', workspaces: [{ id: 'workspace5', label: 'workspace 5' }] }],
  },
  {
    id: 'org6',
    label: 'Org 6',
    accounts: [{ id: 'account6', label: 'Account 6', workspaces: [{ id: 'workspace6', label: 'workspace 6' }] }],
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
  },
}

const indLogo: IGlobalNavigationLogo = {
  label: 'Analytics',
  icon: <Icon icon={faShapes} />,
}
const indTools: IGlobalNavigationTool[] = [
  {
    label: 'Segmentation',
    icon: <Icon icon={faChartSimple} />,
    type: 'link',
  },
  {
    label: 'Funnel',
    icon: <Icon icon={faChartBar} />,
    type: 'link',
  },
  {
    label: 'Journeys',
    icon: <Icon icon={faJournalWhills} />,
    type: 'link',
  },
  {
    label: 'Cohort',
    icon: <Icon icon={faUserCog} />,
    type: 'link',
  },
  {
    label: 'Users',
    icon: <Icon icon={faUsers} />,
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
  {
    label: 'Account',
    hideLabel: true,
    icon: <Avatar>WS</Avatar>,
    type: 'link',
  },
]
const indCreateItems: Array<MenuItemType | MenuItemGroupType> = [
  {
    label: 'Dashboard',
    key: 'Dashboard',
    type: 'group',
  },
  {
    className: 'globalNavigation__create',
    label: (
      <>
        <Flex style={{}} vertical gap="middle" justify="center">
          <Space>
            <Icon icon={faDashboard} />
            Dashboard
          </Space>
          <span>Create a new dashboard to organize your saved analysis.</span>
        </Flex>
      </>
    ),
    key: 'Dashboard',
  },

  {
    label: 'Segmentation',
    key: 'Segmentation',
    type: 'group',
  },
  {
    label: 'Event Segmentation',
    key: 'Event Segmentation',
    icon: <Icon icon={faUserGraduate} />,
  },
  {
    label: 'User Segmentation',
    key: 'User Segmentation',
    icon: <Icon icon={faUserGraduate} />,
  },
  {
    label: 'Revenue Analysis',
    key: 'Revenue Analysis',
    icon: <Icon icon={faUserGraduate} />,
  },
  {
    label: 'Frequency',
    key: 'Frequency',
    icon: <Icon icon={faUserGraduate} />,
  },

  {
    label: 'Funnel',
    key: 'Funnel',
    type: 'group',
  },
  {
    label: 'Conversion and Drop Off',
    key: 'Conversion and Drop Off',
    icon: <Icon icon={faFunnelDollar} />,
  },
  {
    label: 'Multipath Funnel',
    key: 'Multipath Funnel',
    icon: <Icon icon={faFunnelDollar} />,
  },
  {
    label: 'Conversion Over Time',
    key: 'Conversion Over Time',
    icon: <Icon icon={faFunnelDollar} />,
  },
  {
    label: 'Contribution',
    key: 'Contribution',
    icon: <Icon icon={faFunnelDollar} />,
  },

  {
    label: 'Journeys',
    key: 'Journeys',
    type: 'group',
  },
  {
    label: 'Journeys From an Event',
    key: 'Journeys From an Event',
    icon: <Icon icon={faJournalWhills} />,
  },
  {
    label: 'Journeys To an Event',
    key: 'Journeys To an Event',
    icon: <Icon icon={faJournalWhills} />,
  },

  {
    label: 'Cohort',
    key: 'Cohort',
    type: 'group',
  },
  {
    label: 'Retention',
    key: 'Retention',
    icon: <Icon icon={faCogs} />,
  },
  {
    label: 'Activation',
    key: 'Activation',
    icon: <Icon icon={faCogs} />,
  },

  {
    label: 'Users',
    key: 'Users',
    type: 'group',
  },
  {
    label: 'User Lookup by ID',
    key: 'User Lookup by ID',
    icon: <Icon icon={faUser} />,
  },
  {
    label: 'User Lookup by Event',
    key: 'User Lookup by Event',
    icon: <Icon icon={faUser} />,
  },
  {
    label: 'User Lookup by Segment',
    key: 'User Lookup by Segment',
    icon: <Icon icon={faUser} />,
  },
]

export const Indicative: Story = {
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
  },
}

const cortexLogo: IGlobalNavigationLogo = {
  label: 'Predictions',
  icon: <Icon icon={faShapes} />,
}
const cortexTools: IGlobalNavigationTool[] = [
  {
    label: 'Pipelines',
    hideLabel: true,
    icon: <Icon icon={faPizzaSlice} />,
    type: 'link',
  },
  {
    label: 'Projects',
    hideLabel: true,
    icon: <Icon icon={faDiagramPredecessor} />,
    type: 'link',
  },
  {
    label: 'Data',
    hideLabel: true,
    icon: <Icon icon={faPingPongPaddleBall} />,
    type: 'link',
  },
  {
    label: 'API',
    hideLabel: true,
    icon: <Icon icon={faRoadSpikes} />,
    type: 'link',
  },
  {
    label: 'Insights',
    hideLabel: true,
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
  {
    label: 'Account',
    hideLabel: true,
    icon: <Avatar>WS</Avatar>,
    type: 'link',
  },
]
export const Cortex: Story = {
  args: {
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
  },
}