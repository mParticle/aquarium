import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Menu } from "src/components/navigation/Menu/Menu";

const meta: Meta<typeof Menu> = {
  title: "Aquarium/Navigation/Menu",
  component: Menu,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {};
