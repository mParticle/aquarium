import React from "react";
import { Segmented as AntSegmented } from "antd";
import { SegmentedProps as AntSegmentedProps } from "antd";

export interface ISegmentedProps extends AntSegmentedProps {
}

export const Segmented = (props: ISegmentedProps) => {
  return <>
    <AntSegmented {...props}/>
  </>;
};