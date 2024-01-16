import React from "react";
import { message, type MessageArgsProps as AntMessageArgsProps } from "antd";

export interface IMessageProps extends AntMessageArgsProps {
  children: React.ReactNode;
}

export const Message = (props: IMessageProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const open = () => {
    void messageApi.open({ ...props });
  };

  return (
    <>
      {contextHolder}
      <span onClick={open}>{props.children}</span>
    </>
  );
};
