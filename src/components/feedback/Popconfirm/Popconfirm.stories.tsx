import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Popconfirm } from "src/components/feedback/Popconfirm/Popconfirm";

const meta: Meta<typeof Popconfirm> = {
  title: "Aquarium/Feedback/Popconfirm",
  component: Popconfirm,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const Primary: Story = {};
