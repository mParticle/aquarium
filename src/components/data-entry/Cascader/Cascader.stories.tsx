import React from "react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Icon } from "src/components";
import { Cascader } from "src/components";
import { useState } from "react";
import { Space } from "src/components";
import { ICascaderProps } from "src/components/data-entry/Cascader/Cascader";


const options: ICascaderProps["options"] = [
  {
    value: "A",
    label: "A",
    children: [
      {
        value: "B",
        label: "B",
        children: [
          {
            value: "C",
            label: "C",
          },
        ],
      },
    ],
  },
  {
    value: "D",
    label: "D",
    children: [
      {
        value: "E",
        label: "E",
        children: [
          {
            value: "F",
            label: "F",
          },
        ],
      },
    ],
  },
];


const meta: Meta<typeof Cascader> = {
  title: "Aquarium/Data Entry/Cascader",
  component: Cascader,

  args: {
    allowClear: true,
    autoClearSearchValue: true,
    autoFocus: false,
    bordered: true,
    changeOnSelect: false,
    className: "",
    defaultValue: [],
    disabled: false,
    tagRender: undefined,
    popupClassName: "",
    dropdownRender: undefined,
    expandIcon: undefined,
    expandTrigger: "click",
    loadData: undefined,
    maxTagCount: undefined,
    maxTagPlaceholder: undefined,
    maxTagTextLength: undefined,
    notFoundContent: "Not Found",
    open: undefined,
    options,
    placeholder: "Placeholder Text",
    placement: "bottomLeft",
    showSearch: false,
    size: undefined,
    status: undefined,
    style: {},
    suffixIcon: undefined,
    value: undefined,
    multiple: false,
    removeIcon: undefined,
    searchValue: undefined,
    dropdownMenuColumnStyle: undefined,
    loadingIcon: undefined,
    showCheckedStrategy: Cascader.SHOW_PARENT,
    fieldNames: { label: "label", value: "value", children: "children" },
    displayRender: (label, selectedOptions) => label.join("/"),
    onSearch: (search) => { console.log(`Search Value: ${search}`); },
    onDropdownVisibleChange: (visible) => { console.log(`Dropdown Visible: ${visible}`); },
    onChange: (value, selectedOptions) => { alert(`Selected Value: ${value}, Selected Options: ${JSON.stringify(selectedOptions)}`); },
    getPopupContainer: (triggerNode) => document.body,
  },

  argTypes: {
    placement: {
      control: "select",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
    },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
    status: {
      control: "select",
      options: ["error", "warning"],
    },

    showCheckedStrategy: {
      control: "select",
      options: [Cascader.SHOW_PARENT, Cascader.SHOW_CHILD],
    },
  },
};
export default meta;


type Story = StoryObj<typeof Cascader>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/
export const Primary: Story = {};

export const AllowClear: Story = {
  args: {
    allowClear: true,
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
  },
};

export const HoverExpand: Story = {
  args: {
    expandTrigger: "hover",
  },
};

export const NoBorder: Story = {
  args: {
    bordered: false,
  },
};

export const MultipleCascader: Story = {
  args: {
    multiple: true,
  },
};

export const SearchIcon: Story = {
  args: {
    showSearch: true,
  },
};

export const CustomDropdownStyle: Story = {
  args: {
    dropdownMenuColumnStyle: { minWidth: "15px", color: "blueviolet" },
  },
};

export const SuffixIcon: Story = {
  args: {
    suffixIcon: <Icon icon={faIcons}/>,
  },
};

export const DisplayRender: Story = {
  args: {
    displayRender: (label, selectedOptions) => label.join(" -> "),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledOption: Story = {
  args: {
    options: [
      {
        value: "A",
        label: "A",
        children: [
          {
            value: "B",
            label: "B",
            children: [
              {
                value: "C",
                label: "C",
              },
            ],
          },
        ],
      },
      {
        value: "D",
        label: "D",
        children: [
          {
            value: "E",
            label: "E",
            disabled: true,
            children: [
              {
                value: "F",
                label: "F",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: ["A", "B", "C"],
  },
};

export const ExampleCustomTrigger: Story = {
  render: () => {
    const [text, setText] = useState("Unselect");
    return <>
      <Space direction="vertical">
        <span>
          {text}
          &nbsp;
          <Cascader options={options} onChange={(_, selectedOptions) => {
            setText(selectedOptions.map((o) => o.label).join(", "));
          }}>
            <a>Change city</a>
          </Cascader>
        </span>
        Separate trigger button and result.
      </Space>
    </>;
  },
};


export const ExampleLazyLoad: Story = {
  render: () => {
    
    const optionLists: ICascaderProps["options"] = [
      {
        value: "A",
        label: "A",
        isLeaf: false,
      },
      {
        value: "B",
        label: "B",
        isLeaf: false,
      },
    ];
    const [options, setOptions] = useState<ICascaderProps["options"]>(optionLists);
    const onChange = (value: (string | number)[], selectedOptions: ICascaderProps["options"]) => { console.log(value, selectedOptions); };

    const loadData = (selectedOptions: ICascaderProps["options"]) => {
      const targetOption = selectedOptions?.[selectedOptions.length - 1];

      // load options lazily
      setTimeout(() => {
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: "dynamic1",
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: "dynamic2",
          },
        ];
        setOptions([...(options as [])]);
      }, 1000);
    };


    return <>
      <Space direction="vertical">
        <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect/>
        Load options lazily with loadData.
      </Space>
    </>;
  },

};