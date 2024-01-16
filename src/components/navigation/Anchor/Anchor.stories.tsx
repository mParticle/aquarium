import { type Meta , type StoryObj } from "@storybook/react";

import { Anchor } from "src/components/navigation/Anchor/Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Aquarium/Navigation/Anchor",
  component: Anchor,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Anchor>;

export const Primary: Story = {};
