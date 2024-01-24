import { Switch as AntSwitch } from "antd";
import { SwitchProps as AntSwitchProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ISwitchProps extends AntSwitchProps {
}

export const Switch = (props: ISwitchProps) => {
  return <ConfigProvider>
    <AntSwitch {...props}/>
  </ConfigProvider>;
};