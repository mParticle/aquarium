import React from "react";
import { useState } from "react";
import "./global-navigation.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Menu, Tooltip } from "src/components";
import { Layout } from "src/components";
import { Flex } from "src/components";
import { Space } from "src/components";
import { Icon } from "src/components/general/Icon/Icon";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { Center } from "src/components";
import { MenuItemGroupType } from "antd/es/menu/hooks/useItems";

export interface IBaseGlobalNavigationItem {
  label: string;
  icon: IconDefinition;
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
  children: Omit<MenuItemType, "key">[];
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
  children: Omit<MenuItemType, "key">[];
}


export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo;
  tools: IGlobalNavigationTool[];
  management: IGlobalNavigationManagement[];
  canSearch: boolean;
  canCreate: boolean;
}

const NavItemHeight = "42px" as const;

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

          {props.canCreate &&
           <NavigationCreate/>}

          <Menu items={props.tools.map(generateMenuItem)}/>
        </div>


        <Menu items={props.management.map(generateMenuItem)}/>
      </Flex>

    </Layout.Sider>);


  function generateMenuItem(item: IGlobalNavigationManagement | IGlobalNavigationTool, i: number) {
    const children: (MenuItemType | MenuItemGroupType)[] = item.children.map((child, j) => ({
      label: child.label,
      key: `${child.label}${j}`,
    }));

    children.unshift({ label: item.label, type: "group", key: item.label + "_groupTitle" });

    return {
      label: item.label,
      key: `${item.label}${i}`,
      icon: <Icon icon={item.icon} color="gray" border style={{ borderRadius: "50%", padding: "6px", backgroundColor: "antiquewhite" }}/>,
      className: "globalNavigation__item",
      children,
    };
  }
};


function SuiteLogo(props: IGlobalNavigationLogo) {
  return <>
    <Center>
      <div style={{
        minWidth: "80px",
        minHeight: NavItemHeight,
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
    </Center>
  </>;
}

function NavigationSearch() {
  return <>
    <Center style={{ height: NavItemHeight }}>
      <Tooltip placement="right" title={<Space size="large"><>Search</>
        <>Ctrl + K</>
      </Space>}>
        <Icon icon={faSearch} color="gray" size="2x"/>
      </Tooltip>
    </Center>
    <hr/>
  </>;
}

function NavigationCreate() {
  return <>
    <Center style={{ height: NavItemHeight }}>
      <Icon icon={faPlus} color="gray" size="2x"/>
    </Center>
    <hr/>
  </>;
}