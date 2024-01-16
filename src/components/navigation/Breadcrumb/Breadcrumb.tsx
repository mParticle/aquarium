import React from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { BreadcrumbProps as AntBreadcrumbProps } from "antd";

export interface IBreadcrumbProps extends AntBreadcrumbProps {}

export const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <>
      <AntBreadcrumb {...props} />
    </>
  );
};
