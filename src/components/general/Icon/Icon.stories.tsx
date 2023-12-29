import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Icon } from "src/components/general/Icon/Icon";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Icon> = {
  title: "Aquarium/General/Icon",
  component: Icon,

  args: {
    icon: faFontAwesome,
  },
};
export default meta;


type Story = StoryObj<typeof Icon>


export const Primary: Story = {}; 

export const Hamburger: Story = {
  args:{
    icon: faHamburger,
  }
}; 