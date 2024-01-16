import React from "react";
import { Tabs as AntTabs } from "antd";
import { TabsProps as AntTabsProps } from "antd";

export interface ITabsProps extends AntTabsProps {}

export const Tabs = (props: ITabsProps) => {
  return (
    <>
      <AntTabs {...props} />
    </>
  );
};
