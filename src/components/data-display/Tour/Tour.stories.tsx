import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Tour } from "src/components/data-display/Tour/Tour";

const meta: Meta<typeof Tour> = {
  title: "Aquarium/Data Display/Tour",
  component: Tour,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Tour>



export const Primary: Story = {
}; 