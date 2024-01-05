import React from "react";
import { useState } from "react";
import { faUpload, faHamburger, faDiceOne, faBell, faLifeRing, faGear } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Layout, Menu } from "src/components";
import { Flex } from "src/components";
import { IMenuProps } from "src/components/navigation/Menu/Menu";
import { Icon } from "src/components/general/Icon/Icon";

export interface IGlobalNavigationProps {

}

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const topItems: IMenuProps["items"] = [faUpload, faHamburger, faDiceOne].map(generateItem);

  const bottomItems: IMenuProps["items"] = [faBell, faLifeRing, faGear].map(generateItem);
  

  return (
    <Layout.Sider width={200}
                  style={{ border: "solid 1px black", minHeight: "500px", backgroundColor: "white" }}
                  collapsible
                  collapsed={collapsed}
                  trigger={null}
                  onMouseEnter={e => { setCollapsed(false); }}
                  onMouseLeave={e => { setCollapsed(true); }}
    >

      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        <Menu items={topItems}/>
        <Menu items={bottomItems}  />
      </Flex>

    </Layout.Sider>
  );


  function generateItem(icon: IconDefinition, index: number) {
    const key = index + 1 + "";
    return {
      key: `sub${key}`,
      icon: <Icon icon={icon}/>,
      label: `subnav ${key}`,

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