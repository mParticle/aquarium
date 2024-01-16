import { type Meta , type StoryObj } from "@storybook/react";

import { Alert } from "src/components/feedback/Alert/Alert";

const meta: Meta<typeof Alert> = {
  title: "Aquarium/Feedback/Alert",
  component: Alert,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {};
