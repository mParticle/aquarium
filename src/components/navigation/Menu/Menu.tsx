import { Menu as AntMenu } from "antd";
import { MenuProps as AntMenuProps } from "antd";

export interface IMenuProps extends AntMenuProps {
}

export const Menu = (props: IMenuProps) => {
  return <>
    <AntMenu {...props}/>
  </>;
};