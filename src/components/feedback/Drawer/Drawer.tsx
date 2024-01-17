import { Drawer as AntDrawer, type DrawerProps as AntDrawerProps } from "antd";

export interface IDrawerProps extends AntDrawerProps {}

export const Drawer = (props: IDrawerProps) => {
  return (
    <>
      <AntDrawer {...props} />
    </>
  );
};
