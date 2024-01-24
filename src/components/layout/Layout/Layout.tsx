import { Layout as AntLayout } from "antd";
import { LayoutProps as AntLayoutProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ILayoutProps extends AntLayoutProps {
}

export const Layout = (props: ILayoutProps) => {
  return <ConfigProvider>
    <AntLayout {...props}/>
  </ConfigProvider>;
};

Layout.Sider = AntLayout.Sider
Layout.Footer = AntLayout.Footer
Layout.Content = AntLayout.Content
Layout.Header = AntLayout.Header