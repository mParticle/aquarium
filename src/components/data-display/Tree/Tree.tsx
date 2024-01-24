import { Tree as AntTree } from "antd";
import { TreeProps as AntTreeProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ITreeProps extends AntTreeProps {
}

export const Tree = (props: ITreeProps) => {
  return <ConfigProvider>
    <AntTree {...props}/>
  </ConfigProvider>;
};