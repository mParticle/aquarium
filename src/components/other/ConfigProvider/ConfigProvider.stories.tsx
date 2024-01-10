import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { ConfigProvider } from "src/components/other/ConfigProvider/ConfigProvider";

const meta: Meta<typeof ConfigProvider> = {
  title: "Aquarium/Other/ConfigProvider",
  component: ConfigProvider,

  args: {},
};
export default meta;


type Story = StoryObj<typeof ConfigProvider>



export const Primary: Story = {
}; 