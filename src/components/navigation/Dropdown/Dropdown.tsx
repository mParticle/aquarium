import { Dropdown as AntDropdown } from "antd";
import { DropdownProps as AntDropdownProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IDropdownProps extends AntDropdownProps {
}

export const Dropdown = (props: IDropdownProps) => {
  return <ConfigProvider>
    <AntDropdown {...props}>
      {props.children}
    </AntDropdown>
  </ConfigProvider>;
};

Dropdown.Button = AntDropdown.Button;