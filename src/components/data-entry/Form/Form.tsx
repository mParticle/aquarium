import { Form as AntForm } from "antd";
import { FormProps as AntFormProps } from "antd";

export interface IFormProps extends AntFormProps {
  children: React.ReactNode;
}

export const Form = (props: IFormProps) => {
  return <>
    <AntForm {...props}>
      {props.children}
    </AntForm>
  </>;
};