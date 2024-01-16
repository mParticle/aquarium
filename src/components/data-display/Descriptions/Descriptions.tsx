import { Descriptions as AntDescriptions } from "antd";
import { DescriptionsProps as AntDescriptionsProps } from "antd";

export interface IDescriptionsProps extends AntDescriptionsProps {
}

export const Descriptions = (props: IDescriptionsProps) => {
  return <>
    <AntDescriptions {...props}/>
  </>;
};