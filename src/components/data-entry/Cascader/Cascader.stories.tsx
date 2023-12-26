import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Cascader } from "src/components/data-entry/Cascader/Cascader";

const meta: Meta<typeof Cascader> = {
  title: "Aquarium/Data Entry/Cascader",
  component: Cascader,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Cascader>



export const Primary: Story = {
}; 