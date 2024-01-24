import { App as AntApp } from "antd";
import { AppProps as AntAppProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IAppProps extends AntAppProps {
}

export const App = (props: IAppProps) => {
  return <ConfigProvider>
    <AntApp {...props}/>
  </ConfigProvider>;
};