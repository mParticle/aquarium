import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Empty } from "src/components/data-display/Empty/Empty";

const meta: Meta<typeof Empty> = {
  title: "Aquarium/Data Display/Empty",
  component: Empty,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Empty>



export const Primary: Story = {
}; 