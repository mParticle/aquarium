import { Progress as AntProgress } from "antd";
import { ProgressProps as AntProgressProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IProgressProps extends AntProgressProps {
}

export const Progress = (props: IProgressProps) => {
  return <ConfigProvider>
    <AntProgress {...props}/>
  </ConfigProvider>;
};