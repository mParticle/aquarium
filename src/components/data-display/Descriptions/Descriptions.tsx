import { Descriptions as AntDescriptions } from "antd";
import { DescriptionsProps as AntDescriptionsProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IDescriptionsProps extends AntDescriptionsProps {
}

export const Descriptions = (props: IDescriptionsProps) => {
  return <ConfigProvider>
    <AntDescriptions {...props}/>
  </ConfigProvider>;
};