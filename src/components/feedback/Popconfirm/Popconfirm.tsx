import { Popconfirm as AntPopconfirm } from "antd";
import { PopconfirmProps as AntPopconfirmProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IPopconfirmProps extends AntPopconfirmProps {
}

export const Popconfirm = (props: IPopconfirmProps) => {
  return <ConfigProvider>
    <AntPopconfirm {...props}/>
  </ConfigProvider>;
};