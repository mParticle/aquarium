import React from "react";
import { Dropdown } from "src/components/navigation/Dropdown/Dropdown";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { SmileOutlined } from "@ant-design/icons";
import { Button } from "src/components/general/Button/Button";

const meta: Meta<typeof Dropdown> = {
  title: "Aquarium/Navigation/Dropdown",
  component: Dropdown,

  args: {
    dropdownButton: "normal",
  },
  
  argTypes: {
    dropdownButton: {
      options: ["normal"],

      mapping: {
        normal: <Button copy="Dropdown Copy"></Button>,
      },
    },
  },
};
export default meta;


type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  args: {
    menu: {
      items: [
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
              1st menu item
            </a>),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
              2nd menu item (disabled)
            </a>),
          icon: <SmileOutlined/>,
          disabled: true,
        },
        {
          key: "3",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
              3rd menu item (disabled)
            </a>),
          disabled: true,
        },
        {
          key: "4",
          danger: true,
          label: "a danger item",
        },
      ],
    },
  },
};