import { type ReactNode } from "react";
import { type Meta, type StoryObj } from "@storybook/react";

import { SmileOutlined } from "@ant-design/icons";
import { Button } from "src/components/general/Button/Button";
import {
  Dropdown,
  type IDropdownProps,
} from "src/components/navigation/Dropdown/Dropdown";

const menu: IDropdownProps["menu"] = {
  items: [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ],
} as const;

const meta: Meta<typeof Dropdown> = {
  title: "Aquarium/Navigation/Dropdown",
  component: Dropdown,

  args: {
    children: "normal",
    menu,

    arrow: false,
    autoAdjustOverflow: true,
    autoFocus: false,
    disabled: false,
    destroyPopupOnHide: false,
    dropdownRender: undefined,
    overlayClassName: undefined,
    overlayStyle: undefined,
    placement: "bottomLeft",
    trigger: ["hover"],
  },

  argTypes: {
    children: {
      options: ["normal"],

      mapping: {
        normal: <Button>Dropdown Copy</Button>,
      },
    },
    placement: {
      control: "select",
      options: [
        "bottom",
        "bottomLeft",
        "bottomRight",
        "top",
        "topLeft",
        "topRight",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {};

export const WithArrow: Story = {
  args: {
    arrow: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomDropdownRender: Story = {
  args: {
    dropdownRender: (menus: ReactNode) => {
      // Customize dropdown content as needed
      return <div> Custom Components Go Here</div>;
    },
  },
};

export const AutoAdjustOverflow: Story = {
  args: {
    autoAdjustOverflow: false,
  },
};

export const DestroyPopupOnHide: Story = {
  args: {
    destroyPopupOnHide: true,
  },
};

export const WithOverlayStyle: Story = {
  args: {
    overlayStyle: { color: "red" },
  },
};

export const CustomPlacement: Story = {
  args: {
    placement: "topRight",
  },
};

export const TriggerClick: Story = {
  args: {
    trigger: ["click"],
  },
};

export const OpenDropdown: Story = {
  args: {
    open: true,
  },
};

export const OnOpenChangeCallback: Story = {
  args: {
    onOpenChange: (open: boolean, info: { source: "trigger" | "menu" }) => {
      alert("Dropdown Open: " + open);
    },
  },
};
