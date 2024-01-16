import React from "react";
import { Tree as AntTree , type TreeProps as AntTreeProps } from "antd";


export interface ITreeProps extends AntTreeProps {}

export const Tree = (props: ITreeProps) => {
  return (
    <>
      <AntTree {...props} />
    </>
  );
};
