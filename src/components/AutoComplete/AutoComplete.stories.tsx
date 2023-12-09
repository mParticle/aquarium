import React from "react";
import { useState } from "react";
import { AutoComplete } from "src/components/AutoComplete/AutoComplete";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

let baseOptions = [
  { label: "The quick brown fox jumps over the lazy dog" },
  { label: "Waxy and quivering, jocks fumble the pizza" },
  { label: "When zombies arrive, quickly fax judge Pat" },
  { label: "Pack my red box with five dozen quality jugs" },
  { label: "The quick onyx goblin jumps over the lazy dwarf" },
];

const meta: Meta<typeof AutoComplete> = {
  title: "Example/AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    placeholder: "input here",
  },

  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AutoComplete>


const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});


const Template = () => {
  const [value, setValue] = useState("");
  const [anotherOptions, setAnotherOptions] = useState<any>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => { alert("onSelect: " + data); };

  return (
    <>
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={setValue}
        placeholder="control mode"
      />
    </>
  );
};


export const Default = Template.bind({});
// Default.args = {};


// export const Wide = Template.bind({});
// Wide.args = { style: { width: 350 } };
// export const Wide: Story = { args: {} };