import React from "react";
import { notification } from "antd";
import { NotificationArgsProps } from "antd";

export interface INotificationProps extends NotificationArgsProps {
  children: React.ReactNode;
}

export const Notification = (props: INotificationProps) => {
  const [notificationApi, contextHolder] = notification.useNotification();

  const openNotification = () => {
    notificationApi.open({
                           ...props,
                           message: props.message,
                           description: props.description,
                           duration: props.duration ?? 0,
                         });
  };

  return (<>
    {contextHolder}
    <span onClick={openNotification}>
      {props.children}
    </span>
  </>);

};