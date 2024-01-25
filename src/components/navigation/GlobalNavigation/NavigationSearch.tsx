import { Tooltip } from "src/components";
import { Space } from "src/components";
import { Center } from "src/components";
import { Icon } from "src/components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavItemHeight } from "src/components/navigation/GlobalNavigation/GlobalNavigation";

export function NavigationSearch() {
  return <>
    <Tooltip placement="right" title={<Space size="large"><>Search</>
      <>Ctrl + K</>
    </Space>}>
      <Center style={{ height: NavItemHeight }}>
        <Icon icon={faSearch} color="gray" size="2x"/>
      </Center>
    </Tooltip>
    <hr/>
  </>;
}