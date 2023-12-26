import React from "react";
import { Progress as AntProgress } from "antd";
import { ProgressProps as AntProgressProps } from "antd";

export interface IProgressProps extends AntProgressProps {
}

export const Progress = (props: IProgressProps) => {
  return <>
    <AntProgress {...props}/>
  </>;
};