import React from "react";
import { Dropdown as AntDropdown } from "antd";
import { DropdownProps as AntDropdownProps } from "antd";

interface IDropdownProps extends AntDropdownProps {
  dropdownButton: AntDropdownProps["children"];
}

export const Dropdown = (props: IDropdownProps) => <>
  <AntDropdown {...props}>
    {props.dropdownButton}
  </AntDropdown>
</>;