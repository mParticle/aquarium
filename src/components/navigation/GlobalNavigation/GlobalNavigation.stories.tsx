import * as React from 'react'
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { GlobalNavigation } from "src/components";
import { Layout } from "src/components";

const meta: Meta<typeof GlobalNavigation> = {
  title: "Aquarium/Navigation/GlobalNavigation",
  component: props => <Layout><GlobalNavigation {...props}></GlobalNavigation></Layout>,

  args: {},
};
export default meta;


type Story = StoryObj<typeof GlobalNavigation>


export const Primary: Story = {};