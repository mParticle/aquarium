import React from "react";
import { Message as AntMessage } from "antd";
import { MessageProps as AntMessageProps } from "antd";

export interface IMessageProps extends AntMessageProps {
}

export const Message = (props: IMessageProps) => {
  return <>
    <AntMessage {...props}/>
  </>;
};