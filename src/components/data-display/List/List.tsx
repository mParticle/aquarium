import React from "react";
import { List as AntList } from "antd";
import { ListProps as AntListProps } from "antd";

export interface IListProps<T> extends AntListProps<T> {
}

export const List = <T extends any>(props: IListProps<T>) => <>
  <AntList {...props}/>
</>;

List.Item = AntList.Item