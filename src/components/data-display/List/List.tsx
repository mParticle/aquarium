import React from "react";
import { List as AntList } from "antd";
import { ListProps as AntListProps } from "antd";

export interface IListProps extends AntListProps {
}

export const List = (props: IListProps) => {
  return <>
    <AntList {...props}/>
  </>;
};