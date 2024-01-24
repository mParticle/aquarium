import { Divider as AntDivider } from "antd";
import { DividerProps as AntDividerProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IDividerProps extends AntDividerProps {
}

export const Divider = (props: IDividerProps) => {
  return <ConfigProvider>
    <AntDivider {...props}/>
  </ConfigProvider>;
};