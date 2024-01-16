import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Watermark } from "src/components/feedback/Watermark/Watermark";

const meta: Meta<typeof Watermark> = {
  title: "Aquarium/Feedback/Watermark",
  component: Watermark,

  args: {},
};
export default meta;

type Story = StoryObj<typeof Watermark>;

export const Primary: Story = {};
