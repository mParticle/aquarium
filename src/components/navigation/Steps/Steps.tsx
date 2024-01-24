import { Steps as AntSteps } from "antd";
import { StepsProps as AntStepsProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IStepsProps extends AntStepsProps {
}

export const Steps = (props: IStepsProps) => {
  return <ConfigProvider>
    <AntSteps {...props}/>
  </ConfigProvider>;
};