import React from "react";
import { Pagination as AntPagination } from "antd";
import { PaginationProps as AntPaginationProps } from "antd";

export interface IPaginationProps extends AntPaginationProps {
}

export const Pagination = (props: IPaginationProps) => {
  return <>
    <AntPagination {...props}/>
  </>;
};