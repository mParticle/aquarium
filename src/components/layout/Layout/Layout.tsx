import React from "react";
import { Layout as AntLayout } from "antd";
import { LayoutProps as AntLayoutProps } from "antd";

export interface ILayoutProps extends AntLayoutProps {
}

export const Layout = (props: ILayoutProps) => {
  return <>
    <AntLayout {...props}/>
  </>;
};

Layout.Header = AntLayout.Header
Layout.Sider = AntLayout.Sider
Layout.Content = AntLayout.Content
Layout.Footer = AntLayout.Footer