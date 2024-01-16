import React from "react";
import { notification , type NotificationArgsProps } from "antd";


export interface INotificationProps extends NotificationArgsProps {
  children: React.ReactNode;
}

export const Notification = (props: INotificationProps) => {
  const [notificationApi, contextHolder] = notification.useNotification();

  const open = (): void => {
    notificationApi.open({ ...props });
  };

  return (
    <>
      {contextHolder}
      <span onClick={open}>{props.children}</span>
    </>
  );
};
