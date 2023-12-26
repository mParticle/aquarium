import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { List } from "src/components/data-display/List/List";

const meta: Meta<typeof List> = {
  title: "Aquarium/Data Display/List",
  component: List,

  args: {},
};
export default meta;


type Story = StoryObj<typeof List>



export const Primary: Story = {
}; 