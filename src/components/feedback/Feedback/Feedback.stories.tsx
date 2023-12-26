import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Feedback } from "src/components/feedback/Feedback/Feedback";

const meta: Meta<typeof Feedback> = {
  title: "Aquarium/Feedback/Feedback",
  component: Feedback,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Feedback>



export const Primary: Story = {
}; 