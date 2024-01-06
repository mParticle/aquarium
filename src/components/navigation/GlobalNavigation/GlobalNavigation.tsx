import React from "react";
import { useState } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Layout, Menu } from "src/components";
import { Flex } from "src/components";
import { Icon } from "src/components/general/Icon/Icon";
import { ItemType } from "antd/es/menu/hooks/useItems";
import "./global-navigation.css";

export interface IBaseGlobalNavigationItem {
  label: string;
  icon: IconDefinition;
}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
}


export interface IGlobalNavigationProps {
  tools: IGlobalNavigationTool[];
  management: IGlobalNavigationManagement[];
}

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout.Sider width={200}
                  collapsedWidth={100}
                  className="globalNavigation__slider"
                  collapsible
                  collapsed={collapsed}
                  trigger={null}
                  onMouseEnter={e => { setCollapsed(false); }}
                  onMouseLeave={e => { setCollapsed(true); }}
    >

      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        <Menu items={props.tools.map(generateMenuItem)}/>
        <Menu items={props.management.map(generateMenuItem)}/>
      </Flex>

    </Layout.Sider>
  );

  function generateMenuItem(item: IBaseGlobalNavigationItem, index: number): ItemType {
    const key = index + 1 + "";
    return {
      key: `sub${key}`,
      icon: <Icon icon={item.icon}/>,
      label: item.label,
      className: "globalNavigation__item",
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
};