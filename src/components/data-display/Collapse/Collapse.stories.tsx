import { type Meta , type StoryObj } from "@storybook/react";

import { Collapse } from "src/components/data-display/Collapse/Collapse";

const meta: Meta<typeof Collapse> = {
  title: "Aquarium/Data Display/Collapse",
  component: Collapse,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Collapse>;

export const Primary: Story = {};
