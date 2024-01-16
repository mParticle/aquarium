import React from "react";
import { useState } from "react";
import { AutoComplete } from "src/components/data-entry/AutoComplete/AutoComplete";
import { IAutoCompleteProps } from "src/components/data-entry/AutoComplete/AutoComplete";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof AutoComplete> = {
  title: "Aquarium/Data Entry/AutoComplete",
  component: AutoComplete,

  args: {
    style: { width: 200 },
    placeholder: "Search AutoComplete",
  },
};
export default meta;

type Story = StoryObj<typeof AutoComplete>;

const PrimaryTemplate = (args: IAutoCompleteProps) => {
  const baseOptions = [
    { label: "The quick brown fox jumps over the lazy dog", value: 1 },
    { label: "Waxy and quivering, jocks fumble the pizza", value: 2 },
    { label: "When zombies arrive, quickly fax judge Pat", value: 3 },
    { label: "Pack my red box with five dozen quality jugs", value: 4 },
    { label: "The quick onyx goblin jumps over the lazy dwarf", value: 5 },
  ];

  const [value, setValue] = useState<IAutoCompleteProps["value"]>("");
  const [options, setOptions] = useState<IAutoCompleteProps["options"]>([]);

  let onSearch = (text: string) => setOptions(getPanelValue(text));
  const onSelect = (value: string) => {
    console.log("you selected value: " + value);
  };

  const getPanelValue = (searchText: string): IAutoCompleteProps["options"] => {
    if (!searchText) return [];
    return baseOptions.filter((o) =>
      o.label.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  return (
    <>
      <AutoComplete
        {...args}
        value={value}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={setValue}
      />
    </>
  );
};

export const Primary: Story = {
  render: PrimaryTemplate,
};

export const Wide: Story = {
  args: { style: { width: 350 } },
  render: PrimaryTemplate,
};
