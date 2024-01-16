import { type Meta , type StoryObj } from "@storybook/react";

import { Grid } from "src/components/layout/Grid/Grid";

const meta: Meta<typeof Grid> = {
  title: "Aquarium/Layout/Grid",
  component: Grid,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {};
