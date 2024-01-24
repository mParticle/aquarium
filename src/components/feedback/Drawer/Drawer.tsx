import { Drawer as AntDrawer } from "antd";
import { DrawerProps as AntDrawerProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IDrawerProps extends AntDrawerProps {
}

export const Drawer = (props: IDrawerProps) => {
  return <ConfigProvider>
    <AntDrawer {...props}/>
  </ConfigProvider>;
};