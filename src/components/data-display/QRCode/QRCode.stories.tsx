import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { QRCode } from "src/components/data-display/QRCode/QRCode";

const meta: Meta<typeof QRCode> = {
  title: "Aquarium/Data Display/QRCode",
  component: QRCode,

  args: {},
};
export default meta;


type Story = StoryObj<typeof QRCode>



export const Primary: Story = {
}; 