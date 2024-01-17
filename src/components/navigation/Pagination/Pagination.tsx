import {
  Pagination as AntPagination,
  type PaginationProps as AntPaginationProps,
} from "antd";

export interface IPaginationProps extends AntPaginationProps {}

export const Pagination = (props: IPaginationProps) => {
  return (
    <>
      <AntPagination {...props} />
    </>
  );
};
