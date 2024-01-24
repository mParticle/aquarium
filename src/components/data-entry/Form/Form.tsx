import { Form as AntForm } from "antd";
import { FormProps as AntFormProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IFormProps extends AntFormProps {
  children: React.ReactNode;
}

export const Form = (props: IFormProps) => {
  return <ConfigProvider>
    <AntForm {...props}>
      {props.children}
    </AntForm>
  </ConfigProvider>;
};