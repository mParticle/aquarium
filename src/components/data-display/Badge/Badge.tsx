import React from "react";
import { Badge as AntBadge } from "antd";
import { BadgeProps as AntBadgeProps } from "antd";

export interface IBadgeProps extends AntBadgeProps {
}

export const Badge = (props: IBadgeProps) => {
  return <>
    <AntBadge {...props}/>
  </>;
};

Badge.Ribbon = AntBadge.Ribbon