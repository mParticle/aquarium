import { type Meta , type StoryObj } from "@storybook/react";

import { Timeline } from "src/components/data-display/Timeline/Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Aquarium/Data Display/Timeline",
  component: Timeline,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {};
