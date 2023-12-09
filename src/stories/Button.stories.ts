import { Button } from "src/components/Button";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    type: "primary",
    copy: "Button Copy",
  },
};

export const Default: Story = {
  args: {
    type: "default",
    copy: "Button Copy",
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
    copy: "Button Copy",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    copy: "Button Copy",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    copy: "Button Copy",
  },
};