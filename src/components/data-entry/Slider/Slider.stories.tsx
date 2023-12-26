import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Slider } from "src/components/data-entry/Slider/Slider";

const meta: Meta<typeof Slider> = {
  title: "Aquarium/Data Entry/Slider",
  component: Slider,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Slider>



export const Primary: Story = {
}; 