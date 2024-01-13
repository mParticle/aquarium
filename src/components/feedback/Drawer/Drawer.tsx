import { Drawer as AntDrawer } from "antd";
import { DrawerProps as AntDrawerProps } from "antd";

export interface IDrawerProps extends AntDrawerProps {
}

export const Drawer = (props: IDrawerProps) => {
  return <>
    <AntDrawer {...props}/>
  </>;
};