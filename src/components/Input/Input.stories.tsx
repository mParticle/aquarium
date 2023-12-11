import { Input } from "src/components/Input/Input";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Aquarium/Data Entry/Input",
  component: Input,

  args: {
    placeholder: "Input Placeholder",
  },

  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>


export const Primary: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Middle: Story = {
  args: {
    size: "middle",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};