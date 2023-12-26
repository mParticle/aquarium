import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Notification } from "src/components/feedback/Notification/Notification";

const meta: Meta<typeof Notification> = {
  title: "Aquarium/Feedback/Notification",
  component: Notification,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Notification>



export const Primary: Story = {
}; 