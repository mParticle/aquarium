import React from "react";
import { Popover } from "src/components/data-display/Popover/Popover";
import { IPopoverProps } from "src/components/data-display/Popover/Popover";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/components/general/Button/Button";

const meta: Meta<typeof Popover> = {
  title: "Aquarium/Data Entry/Popover",
  component: Popover,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Popover>

const PrimaryTemplate = (args: IPopoverProps) => {

  const content = (
    <div>
      <p>Content</p>
    </div>);

  return <>
    <Popover content={content} title="Title" trigger={args.trigger}>
      <Button copy={args.children + ""}/>
    </Popover>
  </>;
};


export const Primary: Story = {
  args: { trigger: "click", children: "Click Me" },
  render: PrimaryTemplate,
};

export const Hover: Story = {
  args: { trigger: "hover", children: "Hover Me" },
  render: PrimaryTemplate,
};

export const Focus: Story = {
  args: { trigger: "focus", children: "Focus Me" },
  render: PrimaryTemplate,
};