import React from "react";
import { Mentions as AntMentions } from "antd";
import { MentionProps as AntMentionProps } from "antd";

export interface IMentionsProps extends AntMentionProps {
}

export const Mentions = (props: IMentionsProps) => {
  return <>
    <AntMentions {...props}/>
  </>;
};