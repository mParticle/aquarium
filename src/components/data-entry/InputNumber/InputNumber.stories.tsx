import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { InputNumber } from "src/components/data-entry/InputNumber/InputNumber";

const meta: Meta<typeof InputNumber> = {
  title: "Aquarium/Data Entry/InputNumber",
  component: InputNumber,

  args: {},
};
export default meta;


type Story = StoryObj<typeof InputNumber>



export const Primary: Story = {
}; 