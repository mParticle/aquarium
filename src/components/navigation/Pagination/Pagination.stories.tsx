import { type Meta , type StoryObj } from "@storybook/react";

import { Pagination } from "src/components/navigation/Pagination/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Aquarium/Navigation/Pagination",
  component: Pagination,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {};
