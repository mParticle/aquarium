import { InputNumber as AntInputNumber } from "antd";
import { InputNumberProps as AntInputNumberProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IInputNumberProps extends AntInputNumberProps {
}

export const InputNumber = (props: IInputNumberProps) => {
  return <ConfigProvider>
    <AntInputNumber {...props}/>
  </ConfigProvider>;
};