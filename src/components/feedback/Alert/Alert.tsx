import { Alert as AntAlert } from "antd";
import { AlertProps as AntAlertProps } from "antd";

export interface IAlertProps extends AntAlertProps {
}

export const Alert = (props: IAlertProps) => {
  return <>
    <AntAlert {...props}/>
  </>;
};