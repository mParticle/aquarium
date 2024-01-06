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
  faCircle,
  faSquare,
  faDiagramPredecessor,
  faPizzaSlice,
  faPingPongPaddleBall,
  faChartBar,
  faJournalWhills,
  faUsers,
  faChartSimple,
  faUserCog,
  faTriangleCircleSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { GlobalNavigation } from "src/components";
import { Layout } from "src/components";
import { Space } from "src/components";
import { Badge } from "src/components/data-display/Badge/Badge";
import { IGlobalNavigationTool } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationManagement } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationLogo } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { Center } from "src/components";


const defaultLogo: IGlobalNavigationLogo = {
  label: "Aqua",
  icon: faFishFins,
};
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: "Tool 1",
    icon: faTools,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Tool 2",
    icon: faPersonWalkingDashedLineArrowRight,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Tool 3",
    icon: faAudioDescription,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
];
const defaultManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notification",
    icon: faBell,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Support",
    icon: faLifeRing,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
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
    canCreate: false,
  },
};
export default meta;


type Story = StoryObj<typeof GlobalNavigation>

export const Primary: Story = {};


const mpLogo: IGlobalNavigationLogo = {
  label: "mP",
  icon: faCircle,
};
const mpTools: IGlobalNavigationTool[] = [
  {
    label: "Activity",
    icon: faBlenderPhone,
    children: [
      { label: "Platform Trends" },
      { label: <Space>System Alerts<Badge color="red"/></Space> },
      { label: "Event Forwarding" },
      { label: <Space>Observability<Badge color="blue" count="Beta"/></Space> },
    ],
  },
  {
    label: "Data Master",
    icon: faDatabase,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Audiences",
    icon: faPeopleGroup,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
];
const mpManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notification",
    icon: faBell,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Support",
    icon: faLifeRing,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
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
  icon: faSquare,
};
const indTools: IGlobalNavigationTool[] = [
  {
    label: "Segmentation",
    icon: faChartSimple,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Funnel",
    icon: faChartBar,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Journeys",
    icon: faJournalWhills,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Cohort",
    icon: faUserCog,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Users",
    icon: faUsers,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
];
const indManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
];
export const Indicative: Story = {
  args: {
    canCreate: true,
    logo: indLogo,
    tools: indTools,
    management: indManagement,
  },
};


const cortexLogo: IGlobalNavigationLogo = {
  label: "Cortex",
  icon: faTriangleCircleSquare,
};
const cortexTools: IGlobalNavigationTool[] = [
  {
    label: "Predict",
    icon: faDiagramPredecessor,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Pipelines",
    icon: faPizzaSlice,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Explore",
    icon: faPingPongPaddleBall,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
];
const cortexManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Settings",
    icon: faGear,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
  },
  {
    label: "Account",
    icon: faGuitar,
    children: [{ label: "option 1" }, { label: "option 2" }, { label: "option 3" }],
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