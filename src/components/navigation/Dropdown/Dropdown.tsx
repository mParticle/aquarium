import React from "react";
import { Dropdown as AntDropdown } from "antd";
import { DropdownProps as AntDropdownProps } from "antd";

export interface IDropdownProps extends AntDropdownProps {
  dropdownButton: AntDropdownProps["children"];
}

export const Dropdown = (props: IDropdownProps) => <>
  <AntDropdown {...props}>
    {props.dropdownButton}
  </AntDropdown>
</>;

Dropdown.Button = AntDropdown.Button;