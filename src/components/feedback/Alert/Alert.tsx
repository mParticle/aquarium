import { Alert as AntAlert, type AlertProps as AntAlertProps } from "antd";

export interface IAlertProps extends AntAlertProps {}

export const Alert = (props: IAlertProps) => {
  return (
    <>
      <AntAlert {...props} />
    </>
  );
};

Alert.ErrorBoundary = AntAlert.ErrorBoundary;
