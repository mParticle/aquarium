import React from "react";
import { Feedback as AntFeedback } from "antd";
import { FeedbackProps as AntFeedbackProps } from "antd";

export interface IFeedbackProps extends AntFeedbackProps {
}

export const Feedback = (props: IFeedbackProps) => {
  return <>
    <AntFeedback {...props}/>
  </>;
};