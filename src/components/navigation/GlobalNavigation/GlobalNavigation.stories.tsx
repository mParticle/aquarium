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
import { Layout } from 'src/components'
import { Space } from 'src/components'
import { Flex } from 'src/components'
import { Badge } from 'src/components/data-display/Badge/Badge'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { Icon } from 'src/components/general/Icon/Icon'
import { type MenuItemType } from 'antd/es/menu/hooks/useItems'
import { type MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { Avatar } from 'src/components'
import { Button } from "src/components";

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
  component: props => (
    <Layout>
      <GlobalNavigation {...props}></GlobalNavigation>
    </Layout>
  ),

  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
    canSearch: false,
    createOptions: { canCreate: false, createItems: [] },
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
    children: [{ label: 'Platform Settings' }, { label: 'User Settings' }, { label: <Button type="primary">Switch to Legacy UI</Button> }],
  },
  {
    label: 'Account',
    hideLabel: true,
    icon: <Avatar>WS</Avatar>,
    type: 'link',
  },
]
export const MP: Story = {
  args: {
    canSearch: true,
    logo: mpLogo,
    tools: mpTools,
    management: mpManagement,
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
    createOptions: {
      canCreate: true,
      createItems: indCreateItems,
    },
    logo: indLogo,
    tools: indTools,
    management: indManagement,
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
  {
    label: 'Account',
    hideLabel: true,
    icon: <Avatar>WS</Avatar>,
    type: 'link',
  },
]
export const Cortex: Story = {
  args: {
    canSearch: false,
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
  },
}