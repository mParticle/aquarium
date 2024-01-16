import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Progress } from "src/components/feedback/Progress/Progress";

const meta: Meta<typeof Progress> = {
  title: "Aquarium/Feedback/Progress",
  component: Progress,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Primary: Story = {};
