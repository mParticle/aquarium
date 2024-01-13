import { Divider as AntDivider } from "antd";
import { DividerProps as AntDividerProps } from "antd";

export interface IDividerProps extends AntDividerProps {
}

export const Divider = (props: IDividerProps) => {
  return <>
    <AntDivider {...props}/>
  </>;
};