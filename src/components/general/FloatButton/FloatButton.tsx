import { FloatButton as AntFloatButton } from "antd";
import { FloatButtonProps as AntFloatButtonProps } from "antd";

export interface IFloatButtonProps extends AntFloatButtonProps {
}

export const FloatButton = (props: IFloatButtonProps) => {
  return <>
    <AntFloatButton {...props}/>
  </>;
};