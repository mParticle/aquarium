import { type Meta , type StoryObj } from "@storybook/react";

import { Descriptions } from "src/components/data-display/Descriptions/Descriptions";

const meta: Meta<typeof Descriptions> = {
  title: "Aquarium/Data Display/Descriptions",
  component: Descriptions,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Descriptions>;

export const Primary: Story = {};
