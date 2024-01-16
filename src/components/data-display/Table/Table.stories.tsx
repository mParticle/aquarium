import { type Meta , type StoryObj } from "@storybook/react";

import { Table } from "src/components/data-display/Table/Table";

const meta: Meta<typeof Table> = {
  title: "Aquarium/Data Display/Table",
  component: Table,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {};
