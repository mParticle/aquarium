import { Layout as AntLayout, type LayoutProps as AntLayoutProps } from "antd";

export interface ILayoutProps extends AntLayoutProps {}

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <AntLayout {...props} />
    </>
  );
};

Layout.Sider = AntLayout.Sider;
Layout.Footer = AntLayout.Footer;
Layout.Content = AntLayout.Content;
Layout.Header = AntLayout.Header;
