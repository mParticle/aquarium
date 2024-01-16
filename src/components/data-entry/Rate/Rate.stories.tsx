import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Rate } from "src/components/data-entry/Rate/Rate";

const meta: Meta<typeof Rate> = {
  title: "Aquarium/Data Entry/Rate",
  component: Rate,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Rate>;

export const Primary: Story = {};
