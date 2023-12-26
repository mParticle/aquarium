import React from "react";
import { Notification as AntNotification } from "antd";
import { NotificationProps as AntNotificationProps } from "antd";

export interface INotificationProps extends AntNotificationProps {
}

export const Notification = (props: INotificationProps) => {
  return <>
    <AntNotification {...props}/>
  </>;
};