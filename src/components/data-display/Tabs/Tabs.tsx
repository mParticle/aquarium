import { Tabs as AntTabs, type TabsProps as AntTabsProps } from "antd";

export interface ITabsProps extends AntTabsProps {}

export const Tabs = (props: ITabsProps) => {
  return (
    <>
      <AntTabs {...props} />
    </>
  );
};
