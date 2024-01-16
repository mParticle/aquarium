import React from "react";
import { Descriptions as AntDescriptions , type DescriptionsProps as AntDescriptionsProps } from "antd";


export interface IDescriptionsProps extends AntDescriptionsProps {}

export const Descriptions = (props: IDescriptionsProps) => {
  return (
    <>
      <AntDescriptions {...props} />
    </>
  );
};
