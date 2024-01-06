import * as React from "react";
import {
  faTools,
  faPersonWalkingDashedLineArrowRight,
  faAudioDescription,
  faBell,
  faLifeRing,
  faGear,
  faGuitar,
  faFishFins,
  faDatabase,
  faPeopleGroup,
  faDiagramPredecessor,
  faPizzaSlice,
  faPingPongPaddleBall,
  faChartBar,
  faJournalWhills,
  faUsers,
  faChartSimple,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { GlobalNavigation } from "src/components";
import { Layout } from "src/components";
import { Space } from "src/components";
import { Badge } from "src/components/data-display/Badge/Badge";
import { IGlobalNavigationTool } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationManagement } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationLogo } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { Icon } from "src/components/general/Icon/Icon";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faFunnelDollar } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const defaultLogo: IGlobalNavigationLogo = {
  label: "Aqua",
  icon: faFishFins,
};
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: "Tool 1",
    icon: faTools,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Tool 2",
    icon: faPersonWalkingDashedLineArrowRight,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Tool 3",
    icon: faAudioDescription,
    type: "link",
  },
];
const defaultManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notifications",
    icon: faBell,
    type: "link",
  },
  {
    label: "Support",
    icon: faLifeRing,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    type: "link",
  },
];


const meta: Meta<typeof GlobalNavigation> = {
  title: "Aquarium/Navigation/GlobalNavigation",
  component: props => <Layout><GlobalNavigation {...props}></GlobalNavigation></Layout>,

  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
    canSearch: false,
    createOptions: { canCreate: false, createItems: [] },
  },
};
export default meta;


type Story = StoryObj<typeof GlobalNavigation>

export const Primary: Story = {};


const mpLogo: IGlobalNavigationLogo = {
  label: "mP",
  icon: faShapes,
};

function Beta(label: string) {
  return <Space>{label}<Badge color="blue" count="Beta"/></Space>;
}


const mpTools: IGlobalNavigationTool[] = [
  {
    label: "Activity",
    icon: faBlenderPhone,
    type: "menu",
    children: [
      { label: "Platform Trends" },
      { label: <Space>System Alerts<Badge color="red"/></Space> },
      { label: "Event Forwarding" },
      { label: Beta("Observability") },
    ],
  },
  {
    label: "Data Master",
    icon: faDatabase,
    type: "menu",
    children: [
      { label: "Catalog" },
      { label: "Plans" },
      { label: "Live Stream" },
      { label: Beta("User Groups") },
      { label: "Calculated Attributes" },
      { label: "Rules" },
    ],
  },
  {
    label: "Audiences",
    icon: faPeopleGroup,
    type: "menu",
    children: [
      { label: "Real-time" },
      { label: "Standard" },
      { label: "Journeys" },
    ],
  },
  {
    label: "Connections",
    icon: faArrowsToDot,
    type: "menu",
    children: [
      { label: "Connect" },
      {
        label: "Filter", children: [{ label: "Platforms" }, { label: "Feeds" }],
      },
    ],
  },
  {
    label: "Setup",
    icon: faKitchenSet,
    type: "menu",
    children: [
      { label: "Inputs" },
      { label: "Outputs" },
      { label: "Data Warehouse" },
      { label: "CRM" },
    ],
  },
  {
    label: "Directory",
    icon: faBoxes,
    type: "link",
  },
];


const mpManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notification",
    icon: faBell,
    type: "link",
  },
  {
    label: "Support",
    icon: faLifeRing,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    type: "link",
  },
];
export const MP: Story = {
  args: {
    canSearch: true,
    logo: mpLogo,
    tools: mpTools,
    management: mpManagement,
  },
};


const indLogo: IGlobalNavigationLogo = {
  label: "Ind",
  icon: faShapes,
};
const indTools: IGlobalNavigationTool[] = [
  {
    label: "Segmentation",
    icon: faChartSimple,
    type: "link",
  },
  {
    label: "Funnel",
    icon: faChartBar,
    type: "link",
  },
  {
    label: "Journeys",
    icon: faJournalWhills,
    type: "link",
  },
  {
    label: "Cohort",
    icon: faUserCog,
    type: "link",
  },
  {
    label: "Users",
    icon: faUsers,
    type: "link",
  },
];
const indManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    type: "link",
  },
];
const indCreateItems = [
  {
    label: "Dashboards",
    key: "Dashboards",
    type: "group",
  },
  {
    label: "Dashboards",
    key: "Dashboards",
    icon: <Icon icon={faDashboard}/>,
  },

  {
    label: "Segmentation",
    key: "Segmentation",
    type: "group",
  },
  {
    label: "Event Segmentation",
    key: "Event Segmentation",
    icon: <Icon icon={faUserGraduate}/>,
  },
  {
    label: "User Segmentation",
    key: "User Segmentation",
    icon: <Icon icon={faUserGraduate}/>,
  },
  {
    label: "Revenue Analysis",
    key: "Revenue Analysis",
    icon: <Icon icon={faUserGraduate}/>,
  },
  {
    label: "Frequency",
    key: "Frequency",
    icon: <Icon icon={faUserGraduate}/>,
  },

  {
    label: "Funnel",
    key: "Funnel",
    type: "group",
  },
  {
    label: "Conversion and Drop Off",
    key: "Conversion and Drop Off",
    icon: <Icon icon={faFunnelDollar}/>,
  },
  {
    label: "Multipath Funnel",
    key: "Multipath Funnel",
    icon: <Icon icon={faFunnelDollar}/>,
  },
  {
    label: "Conversion Over Time",
    key: "Conversion Over Time",
    icon: <Icon icon={faFunnelDollar}/>,
  },
  {
    label: "Contribution",
    key: "Contribution",
    icon: <Icon icon={faFunnelDollar}/>,
  },

  {
    label: "Journeys",
    key: "Journeys",
    type: "group",
  },
  {
    label: "Journeys From an Event",
    key: "Journeys From an Event",
    icon: <Icon icon={faJournalWhills}/>,
  },
  {
    label: "Journeys To an Event",
    key: "Journeys To an Event",
    icon: <Icon icon={faJournalWhills}/>,
  },

  {
    label: "Cohort",
    key: "Cohort",
    type: "group",
  },
  {
    label: "Retention",
    key: "Retention",
    icon: <Icon icon={faCogs}/>,
  },
  {
    label: "Activation",
    key: "Activation",
    icon: <Icon icon={faCogs}/>,
  },

  {
    label: "Users",
    key: "Users",
    type: "group",
  },
  {
    label: "User Lookup by ID",
    key: "User Lookup by ID",
    icon: <Icon icon={faUser}/>,
  },
  {
    label: "User Lookup by Event",
    key: "User Lookup by Event",
    icon: <Icon icon={faUser}/>,
  },
  {
    label: "User Lookup by Segment",
    key: "User Lookup by Segment",
    icon: <Icon icon={faUser}/>,
  },
];

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
};


const cortexLogo: IGlobalNavigationLogo = {
  label: "Cortex",
  icon: faShapes,
};
const cortexTools: IGlobalNavigationTool[] = [
  {
    label: "Predict",
    icon: faDiagramPredecessor,
    type: "link",
  },
  {
    label: "Pipelines",
    icon: faPizzaSlice,
    type: "link",
  },
  {
    label: "Explore",
    icon: faPingPongPaddleBall,
    type: "link",
  },
];
const cortexManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    type: "menu",
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    type: "link",
  },
];
export const Cortex: Story = {
  args: {
    canSearch: false,
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
  },
};