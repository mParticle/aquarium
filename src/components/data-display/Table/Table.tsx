import React from "react";
import { Table as AntTable } from "antd";
import { TableProps as AntTableProps } from "antd";

export interface ITableProps extends AntTableProps {}

export const Table = (props: ITableProps) => {
  return (
    <>
      <AntTable {...props} />
    </>
  );
};
