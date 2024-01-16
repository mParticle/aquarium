import { type Meta , type StoryObj } from "@storybook/react";

import { Radio } from "src/components/data-entry/Radio/Radio";

const meta: Meta<typeof Radio> = {
  title: "Aquarium/Data Entry/Radio",
  component: Radio,

  args: {
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    value: undefined,
    onChange: undefined,
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {};

export const WithAutoFocus: Story = {
  args: {
    autoFocus: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithOnChange: Story = {
  args: {
    onChange: () => { alert("Radio Changed"); },
  },
};
