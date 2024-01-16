import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Select } from "src/components/data-entry/Select/Select";

const meta: Meta<typeof Select> = {
  title: "Aquarium/Data Entry/Select",
  component: Select,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
