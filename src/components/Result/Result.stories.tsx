import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Result } from "src/components/Result/Result";

const meta: Meta<typeof Result> = {
  title: "Aquarium/Feedback/Result",
  component: Result,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Result>


export const Primary: Story = {
  args: {
    status: "success",
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
  },
};

export const Info: Story = {
  args: {
    status: "info",
  },
};