import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Tooltip } from "src/components/data-display/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Aquarium/Data Display/Tooltip",
  component: Tooltip,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Tooltip>



export const Primary: Story = {
}; 