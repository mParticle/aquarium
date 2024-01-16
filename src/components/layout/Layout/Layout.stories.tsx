import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Layout } from "src/components/layout/Layout/Layout";

const meta: Meta<typeof Layout> = {
  title: "Aquarium/Layout/Layout",
  component: Layout,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {};
