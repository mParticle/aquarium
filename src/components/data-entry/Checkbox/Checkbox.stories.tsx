import {Meta} from "@storybook/react";
import {StoryObj} from "@storybook/react";
import {Checkbox} from "src/components/data-entry/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Aquarium/Data Entry/Checkbox",
    component: Checkbox,

    args: {},
};
export default meta;


type Story = StoryObj<typeof Checkbox>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
    args: {
        autoFocus: false,
        checked: false,
        defaultChecked: false,
        disabled: false,
        indeterminate: false,
    },
};

export const WithAutoFocus: Story = {
    args: {
        autoFocus: true,
        checked: false,
        defaultChecked: false,
        disabled: false,
        indeterminate: false,
    },
};

export const Checked: Story = {
    args: {
        autoFocus: false,
        checked: true,
        defaultChecked: false,
        disabled: false,
        indeterminate: false,
    },
};

export const DefaultChecked: Story = {
    args: {
        autoFocus: false,
        checked: false,
        defaultChecked: true,
        disabled: false,
        indeterminate: false,
    },
};

export const Disabled: Story = {
    args: {
        autoFocus: false,
        checked: false,
        defaultChecked: false,
        disabled: true,
        indeterminate: false,
    },
};

export const Indeterminate: Story = {
    args: {
        autoFocus: false,
        checked: false,
        defaultChecked: false,
        disabled: false,
        indeterminate: true,
    },
};

export const WithOnChange: Story = {
    args: {
        autoFocus: false,
        checked: false,
        defaultChecked: false,
        disabled: false,
        indeterminate: false,
        onChange: (e) => alert('Checkbox Changed'),
    },
};