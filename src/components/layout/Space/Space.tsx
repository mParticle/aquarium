import { Space as AntSpace } from "antd";
import { SpaceProps as AntSpaceProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ISpaceProps extends AntSpaceProps {
}

export const Space = (props: ISpaceProps) => {
  return <ConfigProvider>
    <AntSpace {...props}/>
  </ConfigProvider>;
};