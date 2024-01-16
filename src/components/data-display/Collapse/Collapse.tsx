import React from "react";
import { Collapse as AntCollapse } from "antd";
import { CollapseProps as AntCollapseProps } from "antd";

export interface ICollapseProps extends AntCollapseProps {}

export const Collapse = (props: ICollapseProps) => {
  return (
    <>
      <AntCollapse {...props} />
    </>
  );
};
