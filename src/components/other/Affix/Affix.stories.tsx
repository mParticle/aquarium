import { type Meta , type StoryObj } from "@storybook/react";

import { Affix } from "src/components/other/Affix/Affix";

const meta: Meta<typeof Affix> = {
  title: "Aquarium/Other/Affix",
  component: Affix,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Affix>;

export const Primary: Story = {};
