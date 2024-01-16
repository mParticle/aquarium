import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Badge } from "src/components/data-display/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Aquarium/Data Display/Badge",
  component: Badge,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};
