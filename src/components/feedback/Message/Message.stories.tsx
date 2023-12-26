import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Message } from "src/components/feedback/Message/Message";

const meta: Meta<typeof Message> = {
  title: "Aquarium/Feedback/Message",
  component: Message,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Message>



export const Primary: Story = {
}; 