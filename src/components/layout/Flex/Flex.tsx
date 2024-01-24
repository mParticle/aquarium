import { Flex as AntFlex } from "antd";
import { FlexProps as AntFlexProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IFlexProps extends AntFlexProps {
}

export const Flex = (props: IFlexProps) => {
  return <ConfigProvider>
    <AntFlex {...props}/>
  </ConfigProvider>;
};