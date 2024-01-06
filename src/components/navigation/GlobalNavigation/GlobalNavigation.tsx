import React from "react";
import { useState } from "react";
import "./global-navigation.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { Menu } from "src/components";
import { Layout } from "src/components";
import { Flex } from "src/components";
import { Icon } from "src/components/general/Icon/Icon";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Space } from "src/components";

export interface IBaseGlobalNavigationItem {
  label: string;
  icon: IconDefinition;
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
}


export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo;
  tools: IGlobalNavigationTool[];
  management: IGlobalNavigationManagement[];
  canSearch: boolean;
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

      <Flex vertical justify="space-between" style={{ height: "100%", backgroundColor: "white" }}>

        <div>
          <SuiteLogo {...props.logo}/>
          <hr/>

          {props.canSearch &&
           <NavigationSearch/>}

          <Menu items={props.tools.map(generateMenuItem)}/>
        </div>


        <Menu items={props.management.map(generateMenuItem)}/>
      </Flex>

    </Layout.Sider>);


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


function SuiteLogo(props: IGlobalNavigationLogo) {
  return <>
    <Flex justify="center" align="center">
      <div style={{
        minWidth: "80px",
        height: "32px",
        borderRadius: "6px",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        paddingTop: "7px",
        margin: "8px 0",
      }}>
        <Space>
          {props.label}
          <Icon icon={props.icon}/>
        </Space>
      </div>
    </Flex>
  </>;
}

function NavigationSearch() {
  return <>
    <Flex justify="center" align="center">
      <Icon icon={faSearch} color="gray" size="2x"/>
    </Flex>
    <hr/>
  </>;
}