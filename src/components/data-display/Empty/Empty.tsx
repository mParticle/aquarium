import React from "react";
import { Empty as AntEmpty } from "antd";
import { EmptyProps as AntEmptyProps } from "antd";

export interface IEmptyProps extends AntEmptyProps {
}

export const Empty = (props: IEmptyProps) => {
  return <>
    <AntEmpty {...props}/>
  </>;
};