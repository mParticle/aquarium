import * as React from "react";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { GlobalNavigation } from "src/components";
import { Layout } from "src/components";
import { IGlobalNavigationTool } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationManagement } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationLogo } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import {
  faTools,
  faPersonWalkingDashedLineArrowRight,
  faAudioDescription,
  faBell,
  faLifeRing,
  faGear,
  faGuitar,
  faFishFins,
  faBars,
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


const defaultLogo: IGlobalNavigationLogo = {
  label: "Aqua",
  icon: faFishFins,
};
const defaultTools: IGlobalNavigationTool[] = [
  {
    label: "Tool 1",
    icon: faTools,
  },
  {
    label: "Tool 2",
    icon: faPersonWalkingDashedLineArrowRight,
  },
  {
    label: "Tool 3",
    icon: faAudioDescription,
  },
];
const defaultManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notification",
    icon: faBell,
  },
  {
    label: "Support",
    icon: faLifeRing,
  },
  {
    label: "Settings",
    icon: faGear,
  },
  {
    label: "Account",
    icon: faGuitar,
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
    icon: faBars,
  },
  {
    label: "Data Master",
    icon: faDatabase,
  },
  {
    label: "Audiences",
    icon: faPeopleGroup,
  },
];
const mpManagement: IGlobalNavigationManagement[] = [
  {
    label: "Notification",
    icon: faBell,
  },
  {
    label: "Support",
    icon: faLifeRing,
  },
  {
    label: "Settings",
    icon: faGear,
  },
  {
    label: "Account",
    icon: faGuitar,
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
  },
  {
    label: "Funnel",
    icon: faChartBar,
  },
  {
    label: "Journeys",
    icon: faJournalWhills,
  },
  {
    label: "Cohort",
    icon: faUserCog,
  },
  {
    label: "Users",
    icon: faUsers,
  },
];
const indManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
  },
  {
    label: "Settings",
    icon: faGear,
  },
  {
    label: "Account",
    icon: faGuitar,
  },
];
export const Indicative: Story = {
  args: {
    canSearch: false,
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
  },
  {
    label: "Pipelines",
    icon: faPizzaSlice,
  },
  {
    label: "Explore",
    icon: faPingPongPaddleBall,
  },
];
const cortexManagement: IGlobalNavigationManagement[] = [
  {
    label: "Support",
    icon: faLifeRing,
  },
  {
    label: "Settings",
    icon: faGear,
  },
  {
    label: "Account",
    icon: faGuitar,
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