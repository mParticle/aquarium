import React from "react";
import { Anchor as AntAnchor } from "antd";
import { AnchorProps as AntAnchorProps } from "antd";

export interface IAnchorProps extends AntAnchorProps {}

export const Anchor = (props: IAnchorProps) => {
  return (
    <>
      <AntAnchor {...props} />
    </>
  );
};
