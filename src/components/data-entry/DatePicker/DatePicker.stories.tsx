import { DatePicker } from "src/components/data-entry/DatePicker/DatePicker";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof DatePicker> = {
  title: "Aquarium/Data Entry/Date Picker",
  component: DatePicker,

  args: {},
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {};
