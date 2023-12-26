import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Checkbox } from "src/components/data-entry/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Aquarium/Data Entry/Checkbox",
  component: Checkbox,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Checkbox>



export const Primary: Story = {
}; 