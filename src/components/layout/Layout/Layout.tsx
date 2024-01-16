import React from "react";
import { Layout as AntLayout } from "antd";
import { LayoutProps as AntLayoutProps } from "antd";

export interface ILayoutProps extends AntLayoutProps {}

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <AntLayout {...props} />
    </>
  );
};
