import * as React from "react";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { GlobalNavigation } from "src/components";
import { Layout } from "src/components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { IGlobalNavigationTool } from "src/components/navigation/GlobalNavigation/GlobalNavigation";
import { IGlobalNavigationManagement } from "src/components/navigation/GlobalNavigation/GlobalNavigation";


const tools: IGlobalNavigationTool[] = [
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


const management: IGlobalNavigationManagement[] = [
  {
    label: "Account",
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
];


const meta: Meta<typeof GlobalNavigation> = {
  title: "Aquarium/Navigation/GlobalNavigation",
  component: props => <Layout><GlobalNavigation {...props}></GlobalNavigation></Layout>,

  args: {
    tools,
    management,
  },
};
export default meta;


type Story = StoryObj<typeof GlobalNavigation>


export const Primary: Story = {};