import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { TreeSelect } from "src/components/data-entry/TreeSelect/TreeSelect";

const meta: Meta<typeof TreeSelect> = {
  title: "Aquarium/Data Entry/TreeSelect",
  component: TreeSelect,

  args: {},
};
export default meta;

type Story = StoryObj<typeof TreeSelect>;

export const Primary: Story = {};
