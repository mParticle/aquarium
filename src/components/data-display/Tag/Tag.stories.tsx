import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Tag } from "src/components/data-display/Tag/Tag";

const meta: Meta<typeof Tag> = {
  title: "Aquarium/Data Display/Tag",
  component: Tag,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Tag>



export const Primary: Story = {
}; 