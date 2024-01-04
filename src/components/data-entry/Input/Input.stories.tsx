import { Input } from "src/components/data-entry/Input/Input";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Aquarium/Data Entry/Input",
  component: Input,

  args: {
    placeholder: "Input Placeholder",
    addonAfter: undefined,
    addonBefore: undefined,
    allowClear: false,
    bordered: true,
    classNames: {},
    count: undefined,
    defaultValue: '',
    disabled: false,
    id: undefined,
    maxLength: undefined,
    prefix: undefined,
    showCount: false,
    status: undefined,
    styles: {},
    size: 'middle',
    suffix: undefined,
    type: 'text',
    value: '',
    onChange: (e) => console.log('Input changed: '+ e.target.value),
    onPressEnter: (e) => console.log('Enter key pressed: '+ e),
  },
  
  argTypes:{
    status:{
      control: "select",
      options: ["warning", "error"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;


type Story = StoryObj<typeof Input>


/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/


export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const TextArea: Story = {
  args: {
    type: 'textarea',
  },
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

export const Primary: Story = {};

export const WithHttpsBefore: Story = {
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL',
  },
};

export const WithDotComAfter: Story = {
  args: {
    addonAfter: '.com',
    placeholder: 'Domain',
  },
};

export const AllowClear: Story = {
  args: {
    allowClear: true,
    placeholder: 'Clearable Input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithMaxLength: Story = {
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters',
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: '@',
    suffix: '.com',
    placeholder: 'Email',
  },
};