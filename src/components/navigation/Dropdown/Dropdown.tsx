import { Dropdown as AntDropdown } from 'antd'
import { type DropdownProps as AntDropdownProps } from 'antd'

export interface IDropdownProps extends AntDropdownProps {}

export const Dropdown = (props: IDropdownProps) => {
  return <AntDropdown {...props}>{props.children}</AntDropdown>
}

Dropdown.Button = AntDropdown.Button
