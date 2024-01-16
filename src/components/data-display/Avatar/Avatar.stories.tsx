import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Avatar } from "src/components/data-display/Avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Aquarium/Data Display/Avatar",
  component: Avatar,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
