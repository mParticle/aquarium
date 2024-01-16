import { type Meta , type StoryObj } from "@storybook/react";

import { Calendar } from "src/components/data-display/Calendar/Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Aquarium/Data Display/Calendar",
  component: Calendar,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};
