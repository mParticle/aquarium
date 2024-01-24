import { FloatButton as AntFloatButton } from "antd";
import { FloatButtonProps as AntFloatButtonProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IFloatButtonProps extends AntFloatButtonProps {
}

export const FloatButton = (props: IFloatButtonProps) => {
  return <ConfigProvider>
    <AntFloatButton {...props}/>
  </ConfigProvider>;
};