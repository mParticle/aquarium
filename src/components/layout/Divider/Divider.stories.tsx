import { type Meta, type StoryObj } from "@storybook/react";

import { Divider } from "src/components/layout/Divider/Divider";

const meta: Meta<typeof Divider> = {
  title: "Aquarium/Layout/Divider",

  component: (props) => (
    <>
      <span>top text</span>
      <Divider {...props}></Divider>
      <span>bottom text</span>
    </>
  ),

  args: {
    children: "Divider Title",
    dashed: false,
    orientation: "center",
    orientationMargin: undefined,
    plain: true,
    style: undefined,
    type: "horizontal",
  },

  argTypes: {
    orientation: {
      control: "select",
      options: ["left", "right", "center"],
    },
    type: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {};

export const Dashed: Story = {
  args: {
    dashed: true,
  },
};

export const WithOrientation: Story = {
  args: {
    orientation: "right",
  },
};

export const WithOrientationMargin: Story = {
  args: {
    orientation: "left",
    orientationMargin: "20px",
  },
};

export const NotPlain: Story = {
  args: {
    plain: false,
  },
};

export const WithStyle: Story = {
  args: {
    style: { color: "red" },
  },
};

export const VerticalDivider: Story = {
  args: {
    type: "vertical",
  },
};
