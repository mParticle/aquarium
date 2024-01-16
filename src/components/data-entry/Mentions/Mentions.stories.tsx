import { type Meta , type StoryObj } from "@storybook/react";

import { Mentions } from "src/components/data-entry/Mentions/Mentions";

const meta: Meta<typeof Mentions> = {
  title: "Aquarium/Data Entry/Mentions",
  component: Mentions,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Mentions>;

export const Primary: Story = {};
