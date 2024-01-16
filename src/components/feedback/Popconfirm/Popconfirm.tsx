import { Popconfirm as AntPopconfirm } from "antd";
import { PopconfirmProps as AntPopconfirmProps } from "antd";

export interface IPopconfirmProps extends AntPopconfirmProps {
}

export const Popconfirm = (props: IPopconfirmProps) => {
  return <>
    <AntPopconfirm {...props}/>
  </>;
};