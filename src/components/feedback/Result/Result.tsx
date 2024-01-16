import React from "react";
import { Result as AntResult } from "antd";
import { ResultProps as AntResultProps } from "antd";

export interface IResultProps extends AntResultProps {}

export const Result = (props: IResultProps) => {
  return (
    <>
      <AntResult {...props} />
    </>
  );
};
