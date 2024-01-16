import { type Meta , type StoryObj } from "@storybook/react";

import { Carousel } from "src/components/data-display/Carousel/Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Aquarium/Data Display/Carousel",
  component: Carousel,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {};
