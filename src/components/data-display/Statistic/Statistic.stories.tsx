import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Statistic } from "src/components/data-display/Statistic/Statistic";

const meta: Meta<typeof Statistic> = {
  title: "Aquarium/Data Display/Statistic",
  component: Statistic,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Statistic>;

export const Primary: Story = {};
