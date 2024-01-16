import React from "react";
import {
  Dropdown as AntDropdown,
  type DropdownProps as AntDropdownProps,
} from "antd";

export interface IDropdownProps extends AntDropdownProps {}

export const Dropdown = (props: IDropdownProps) => (
  <>
    <AntDropdown {...props}>{props.children}</AntDropdown>
  </>
);

Dropdown.Button = AntDropdown.Button;
