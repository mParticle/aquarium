import React from "react";
import { Rate as AntRate } from "antd";
import { RateProps as AntRateProps } from "antd";

export interface IRateProps extends AntRateProps {
}

export const Rate = (props: IRateProps) => {
  return <>
    <AntRate {...props}/>
  </>;
};