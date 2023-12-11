import { Button } from "src/components/Button/Button";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Aquarium/General/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  args: {
    copy: "Button Copy",
  },

  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const Default: Story = {
  args: {
    type: "default",
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
  },
};

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Link: Story = {
  args: {
    type: "link",
  },
};